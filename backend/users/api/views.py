from rest_framework import generics, status
from rest_framework.response import Response
from datetime import datetime
from django.http import HttpResponse
from requests.auth import HTTPBasicAuth
from rest_framework.exceptions import APIException
from rest_framework.authtoken.models import Token
from rest_framework.authtoken.views import ObtainAuthToken, APIView
from django.views import View
import logging
from rest_framework import permissions
from rest_framework.decorators import api_view, permission_classes
from rest_framework.exceptions import AuthenticationFailed
from rest_framework.permissions import IsAuthenticated
from django.http import HttpResponseServerError
from rest_framework import serializers
from users.models import PaymentTransaction
import base64
from django.conf import settings
import requests
import json
from .permissions import  IsManagerUser
from .serializers import (
    UsersSerializer,
    PaymentSerializer,
    ManagerSignupView,
    ClientSignupView
   
   
)

logger = logging.getLogger(__name__)

class ManagerSignupView(generics.GenericAPIView):
    serializer_class = ManagerSignupView

    def post(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = serializer.save()
        token, created = Token.objects.get_or_create(user=user)
        if created:
            print("A new token was created.")
        else:
            print("An existing token was retrieved.")
            
        return Response(
            {
                "user": UsersSerializer(
                    user, context=self.get_serializer_context()
                ).data,
                "token": Token.objects.get(user=user).key,
                "message": "Account created successfully",
            }
        )
        
class ClientSignupView(generics.GenericAPIView):
    serializer_class = ClientSignupView

    def post(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = serializer.save()
        return Response(
            {
                "user": UsersSerializer(
                    user, context=self.get_serializer_context()
                ).data,
                "token": Token.objects.get(user=user).key,
                "message": "Account created successfully",
            }
        )

class CustomAuthToken(ObtainAuthToken):
    def post(self, request, *args, **kwargs):
        print("Request Data:", request.data)

        try:
            if not request.data:
                username = request.query_params.get("username")
                password = request.query_params.get("password")
                data = {"username": username, "password": password}
            else:
                data = request.data

            serializer = self.serializer_class(data=data, context={"request": request})
            serializer.is_valid(raise_exception=True)
            user = serializer.validated_data["user"]
            print("Validated Data:", serializer.validated_data)
            token, created = Token.objects.get_or_create(user=user)
            
            user_profile_data = {
                "user_id": user.pk,             
                "email": user.email,
                "username": user.username,
                "fullname": user.fullname,
                "birthdate": user.birthdate,
                "location": user.location,
                "phone": user.phone,
                "is_active":user.is_active
               

            }
            return Response(
                {
                    "token": token.key,
                    "user_profile_data": user_profile_data,
                    "message": "Login successfully",
                }
            )
        except AuthenticationFailed as e:

            print(f"AuthenticationFailed: {e}")
            return Response({"error": str(e)}, status=400)
        except Exception as e:

            print(f"Exception: {e}")

            return HttpResponseServerError("Internal Server Error")

@api_view(["POST"])
@permission_classes([IsAuthenticated])
def user_logout(request):
    if request.method == "POST":
        try:

            request.user.auth_token.delete()
            return Response(
                {"message": "Successfully logged out."}, status=status.HTTP_200_OK
            )
        except Exception as e:
            return Response(
                {"error": str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR
            )
            
#Payment role manager ,barber      
class PaymentGetAPIView(generics.ListAPIView):
    serializer_class = PaymentSerializer
    permission_classes = [permissions.IsAuthenticated & IsManagerUser ]

    def get_queryset(self):
        return PaymentTransaction.objects.all()
    
class PaymentUpdateAPIView(generics.UpdateAPIView):
    serializer_class = PaymentSerializer
    permission_classes = [permissions.IsAuthenticated & IsManagerUser]

    def update(self, request, *args, **kwargs):
        payment_id = request.query_params.get('id')
        if not payment_id:
            return Response({"error": "ID parameter is required"}, status=status.HTTP_400_BAD_REQUEST)
        
        try:
            payment = PaymentTransaction.objects.get(pk=payment_id)
        except PaymentTransaction.DoesNotExist:
            return Response({"error": "Payment not found"}, status=status.HTTP_404_NOT_FOUND)

        field_names = request.query_params.getlist('field_name')
        field_values = request.query_params.getlist('field_value')

        if len(field_names) != len(field_values):
            return Response({"error": "Number of field names and field values do not match"}, status=status.HTTP_400_BAD_REQUEST)

        for field_name, field_value in zip(field_names, field_values):
            if field_name not in ['amount', 'balance', 'payment', 'order']:
                return Response({"error": f"Invalid field name provided: {field_name}"}, status=status.HTTP_400_BAD_REQUEST)
            
            setattr(payment, field_name, field_value)

        payment.save()
        
        return Response({"message": "Payment updated successfully"}, status=status.HTTP_200_OK)

class PaymentDeleteAPIView(generics.DestroyAPIView):
    permission_classes = [permissions.IsAuthenticated & IsManagerUser ]

    def delete(self, request, *args, **kwargs):
        payment_id = request.query_params.get('id')
        if not payment_id:
            return Response({"error": "ID parameter is required"}, status=status.HTTP_400_BAD_REQUEST)
        
        try:
            payment = PaymentTransaction.objects.get(pk=payment_id)
        except PaymentTransaction.DoesNotExist:
            return Response({"error": "Stock not found"}, status=status.HTTP_404_NOT_FOUND)

        payment.delete()
        return Response({"message": "Trannsactions deleted  successfully"}, status=status.HTTP_204_NO_CONTENT)
      
class MakePaymentAPIView(APIView):
    def post(self, request, *args, **kwargs):
        amount = request.data.get('amount')
        phone_number = request.data.get('phone_number')
        
        try:
            paymentResponseData = self.make_mpesa_payment_request(amount=amount, phone_number=phone_number)
            return Response(paymentResponseData)
        except Exception as e:
            return Response({"error": str(e)}, status=500)
    
    def generate_access_token(self):
        try:
            res = requests.get(settings.ACCESS_TOKEN_URL, auth=HTTPBasicAuth(settings.MPESA_CONSUMER_KEY, settings.MPESA_CONSUMER_SECRET))
            res.raise_for_status()  # Raise an error for non-2xx status codes
            json_response = res.json()
            access_token = json_response.get("access_token")
            print("Access Token:", access_token)
            return access_token
        except Exception as e:
            raise Exception("Failed to generate access token: " + str(e))
    
    def generate_password(self, formatted_time):
        try:
            data_to_encode = f"{settings.MPESA_BUSINESS_SHORTCODE}{settings.LIPANAMPESA_PASSKEY}{formatted_time}"
            encoded_string = base64.b64encode(data_to_encode.encode())
            encoded_pass = encoded_string.decode('utf-8')
            lipa = settings.LIPANAMPESA_PASSKEY
            shorts = settings.MPESA_BUSINESS_SHORTCODE
            print("Passkey is:", lipa)
            print("Shortcode is:", shorts)
            print("Password is:", encoded_pass)
            return encoded_pass
        except Exception as e:
            logger.error(f"Error generating password: {e}")
            raise APIException(detail=f"Error generating password: {e}")


    def timestamp_conversion(self):
        try:
            unformatted_time = datetime.now()
            formatted_time = unformatted_time.strftime("%Y%m%d%H%M%S")
            print("Time is:", formatted_time)
            return formatted_time
        except Exception as e:
            logger.error(f"Error converting timestamp: {e}")
            raise APIException(detail=f"Error converting timestamp: {e}")
    
    def make_mpesa_payment_request(self, amount:str, phone_number:str) -> dict:
        try:
            access_token = self.generate_access_token()
            formatted_time = self.timestamp_conversion()
            decoded_password = self.generate_password(formatted_time)        
            headers = {
                'Authorization': f'Bearer {access_token}',
                'Content-Type': 'application/json'
            }
                        
            payload = {
                "BusinessShortCode": settings.MPESA_BUSINESS_SHORTCODE,    
                "Password": decoded_password,    
                "Timestamp": formatted_time,    
                "TransactionType": settings.TRANSACTION_TYPE,    
                "Amount": amount,    
                "PartyA": phone_number,    
                "PartyB": settings.MPESA_BUSINESS_SHORTCODE,    
                "PhoneNumber": phone_number,    
                "CallBackURL": "https://mpesa-backend-1.onrender.com/api/mpesa-callback/",    
                "AccountReference": settings.ACCOUNT_REFERENCE,    
                "TransactionDesc": settings.TRANSACTION_DESCRIPTION
            }
                        
            response = requests.post(settings.MPESA_INITIATE_PAYMENT_URL, json=payload, headers=headers)
            response.raise_for_status()  # Raise an error for non-2xx status codes
            
            obbstr = response.json()
            print("obstr:", obbstr)
            merchant_request_id = obbstr.get('MerchantRequestID')
            checkout_request_id = obbstr.get('CheckoutRequestID')
            responseDescription = obbstr.get('ResponseDescription')
            response_code = obbstr.get('ResponseCode')
            customerMessage = obbstr.get('CustomerMessage')
            
            data = {
                "merchant_request_id": merchant_request_id,
                "checkout_request_id": checkout_request_id,
                "responseDescription": responseDescription,
                "response_code": response_code,
                "customerMessage": customerMessage
            }
            return data
        except Exception as e:
            raise Exception("Failed to make M-Pesa payment request: " + str(e))
    

class MPesaResponseSerializer(serializers.Serializer):
    TransactionID = serializers.CharField()
    Amount = serializers.DecimalField(max_digits=10, decimal_places=2)
    ResultCode = serializers.CharField()

class CallbackAPIView(APIView):
    def post(self, request):
        # Deserialize the M-Pesa API response data
        serializer = MPesaResponseSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        mpesa_response = serializer.validated_data
        
        # Extract relevant data from the M-Pesa response
        transaction_id = mpesa_response.get('TransactionID')
        amount = mpesa_response.get('Amount')
        status = mpesa_response.get('ResultCode')
        
        # Update your database with the M-Pesa transaction details
        # For demonstration, assuming you have a PaymentTransaction model
        payment_transaction = PaymentTransaction.objects.get_or_create(transaction_id=transaction_id)[0]
        payment_transaction.amount = amount
        payment_transaction.status = status
        payment_transaction.save()
        
        # Return a response to acknowledge receipt of the callback
        return HttpResponse('Callback received and processed successfully', status=200)
        
