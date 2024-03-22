from django.http import JsonResponse
from django.contrib.auth.models import User
import json
# Lipa Na M-Pesa Endpoint
def lipa_na_mpesa(request):
    if request.method == 'POST':
        try:
            data = json.loads(request.body)
            amount = data.get('amount')
            phone_number = data.get('phone_number')
            # Process M-Pesa payment logic here
            # Replace this with your M-Pesa integration code
            response_data = {
                "merchant_request_id": "2ba8-4165-beca-292db11f9ef81102555",
                "checkout_request_id": "ws_CO_23022024153658080791746140",
                "responseDescription": "Success. Request accepted for processing",
                "response_code": "0",
                "customerMessage": "Success. Request accepted for processing"
            }
            return JsonResponse(response_data, status=200)
        except json.JSONDecodeError:
            return JsonResponse({"error": "Invalid JSON"}, status=400)
    else:
        return JsonResponse({"error": "Method not allowed"}, status=405)

# Client Signup Endpoint
def client_signup(request):
    if request.method == 'POST':
        try:
            data = json.loads(request.body)
            username = data.get('username')
            email = data.get('email')
            fullname = data.get('fullname')
            birthdate = data.get('birthdate')
            location = data.get('location')
            phone = data.get('phone')
            password = data.get('password')
            password2 = data.get('password2')
            is_active = data.get('is_active', True)

            if password != password2:
                return JsonResponse({"error": "Passwords do not match"}, status=400)

            user = User.objects.create_user(username=username, email=email, password=password)
            user.first_name = fullname
            user.save()

            response_data = {
                "user": {
                    "id": user.id,
                    "username": user.username,
                    "email": user.email,
                    "fullname": user.first_name,
                    "birthdate": birthdate,
                    "location": location,
                    "phone": phone,
                    "created_at": user.date_joined,
                    "updated_at": user.date_joined,
                    "is_active": is_active,
                },
                "message": "Account created successfully"
            }
            return JsonResponse(response_data, status=201)
        except json.JSONDecodeError:
            return JsonResponse({"error": "Invalid JSON"}, status=400)
    else:
        return JsonResponse({"error": "Method not allowed"}, status=405)

# Login Endpoint
def login(request):
    if request.method == 'POST':
        try:
            data = json.loads(request.body)
            username = data.get('username')
            password = data.get('password')

            user = User.objects.get(username=username)
            if user.check_password(password):
                # Assuming you are using JWT for authentication
                # You can replace this with your authentication logic
                token = generate_jwt_token(user)
                user_data = {
                    "user_id": user.id,
                    "username": user.username,
                    "email": user.email,
                    "fullname": user.first_name,
                    "birthdate": user.birthdate,
                    "location": user.location,
                    "phone": user.phone,
                    "is_active": user.is_active
                }
                response_data = {
                    "token": token,
                    "user_profile_data": user_data,
                    "message": "Login successful"
                }
                return JsonResponse(response_data, status=200)
            else:
                return JsonResponse({"error": "Invalid credentials"}, status=401)
        except User.DoesNotExist:
            return JsonResponse({"error": "User does not exist"}, status=404)
        except json.JSONDecodeError:
            return JsonResponse({"error": "Invalid JSON"}, status=400)
    else:
        return JsonResponse({"error": "Method not allowed"}, status=405)

#Get all users endpoint.
    def get_all_users(request):
    if request.method == 'GET':
        try:
            # Retrieve all users
            users = User.objects.all()

            # Serialize user data
            serialized_users = serializers.serialize('json', users)

            return JsonResponse(serialized_users, safe=False, status=200)
        except Exception as e:
            return JsonResponse({"error": str(e)}, status=500)
    else:
        return JsonResponse({"error": "Method not allowed"}, status=405)