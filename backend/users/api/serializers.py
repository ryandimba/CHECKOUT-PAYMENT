from rest_framework import serializers
from users.models import Users, PaymentTransaction,Manager, PaymentTransaction


class MPesaResponseSerializer(serializers.ModelSerializer):
    class Meta:
        model = PaymentTransaction
        fields = [
            "transaction_id",
            "amount",
            "status",
            "created_at",
            "updated_at"
           
        ]
class UsersSerializer(serializers.ModelSerializer):
    class Meta:
        model = Users
        fields = [
            "id",
            "username",
            "email",
            "fullname",
            "birthdate",
            "location",
            "experienceyears",
            "phone",
            "created_at",
            "updated_at",
            "role",
            "is_manager",
        ]
        
class ManagerSignupView(serializers.ModelSerializer):
    password2 = serializers.CharField(style={"input_type": "password"}, write_only=True)

    class Meta:
        model = Users
        fields = [
            "id",
            "username",
            "email",
            "fullname",
            "birthdate",
            "location",
            "experienceyears",
            "phone",
            "updated_by",
            "password",
            "password2",
            "role",
            "is_active"
        ]
        extra_kwargs = {"password": {"write_only": True}}

    def save(self, **kwargs):
        fullname = self.validated_data["fullname"]
        username = self.validated_data["username"]
        email = self.validated_data["email"]
        password = self.validated_data["password"]
        password2 = self.validated_data["password2"]
        location = self.validated_data["location"]
        birthdate = self.validated_data["birthdate"]
        phone = self.validated_data["phone"]
        is_active=self.validated_data["is_active"]
        experienceyears = self.validated_data["experienceyears"]
        role = self.validated_data["role"]

        if password != password2:
            raise serializers.ValidationError({"error": "Passwords do not match"})

        user = Users(
            fullname=fullname,
            username=username,
            email=email,
            location=location,
            birthdate=birthdate,
            phone=phone,
            is_active=is_active,
            experienceyears=experienceyears,
            role=role,
        )
        user.set_password(password)
        user.is_manager = True
        user.save()
        Manager.objects.create(user=user)
        return user
    
class ClientSignupView(serializers.ModelSerializer):
    password2 = serializers.CharField(style={"input_type": "password"}, write_only=True)

    class Meta:
        model = Users
        fields = [
            "id",
            "username",
            "email",
            "fullname",
            "birthdate",
            "location",
            "phone",
            "updated_by",
            "password",
            "password2",
            "is_active"
        ]
        extra_kwargs = {"password": {"write_only": True}}

    def save(self, **kwargs):
        fullname = self.validated_data["fullname"]
        username = self.validated_data["username"]
        email = self.validated_data["email"]
        password = self.validated_data["password"]
        password2 = self.validated_data["password2"]
        location = self.validated_data["location"]
        phone = self.validated_data["phone"]
        is_active=self.validated_data["is_active"]

        if password != password2:
            raise serializers.ValidationError({"error": "Passwords do not match"})

        user = Users(
            fullname=fullname,
            username=username,
            email=email,
            location=location,
            phone=phone,
            is_active=is_active,
            
        )
        user.set_password(password)
        user.is_manager = True
        user.save()
        Manager.objects.create(user=user)
        return user

class PaymentSerializer(serializers.ModelSerializer):
    class Meta:
        model = PaymentTransaction
        fields = [
            "payment_method",
            "amount",
            "balance"            
        ]
        


