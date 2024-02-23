from django.db import models
from django.db.models.signals import post_save
from django.contrib.auth.models import AbstractUser
from rest_framework.authtoken.models import Token
from django.conf import settings
from django.dispatch import receiver


class Users(AbstractUser):

    CHEF = "Barber"
    MANAGER = "Manager"

    ROLE_CHOICES = [
        (CHEF, "Barber"),
        (MANAGER, "Manager"),
    
    ]
    is_manager = models.BooleanField(default=False)
    is_barber = models.BooleanField(default=False)
    birthdate = models.DateField(null=True, blank=True)
    location = models.CharField(max_length=255, null=True, blank=True)
    phone = models.CharField(max_length=15, null=True, blank=True)
    created_at = models.DateTimeField(auto_now_add=True, null=True, blank=True)
    updated_at = models.DateTimeField(auto_now=True, null=True, blank=True)
    updated_by = models.ForeignKey(
        "self", on_delete=models.SET_NULL, null=True, blank=True
    )
    role = models.CharField(max_length=255, choices=ROLE_CHOICES, null=True, blank=True)
    experienceyears = models.IntegerField(null=True, blank=True)
    department = models.CharField(max_length=255, null=True, blank=True)
    fullname = models.CharField(max_length=255, null=True, blank=True)
    email = models.EmailField(unique=True)
    user_image = models.ImageField(
        upload_to="user_images/", default="default_user_image.jpg"
    )

    def __str__(self):
        return self.username
    
@receiver(post_save, sender=settings.AUTH_USER_MODEL)
def create_auth_token(sender, instance=None, created=False, **kwargs):
    if created:
        Token.objects.create(user=instance)
        UserProfile.objects.create(user=instance)


class UserProfile(models.Model):
    user = models.OneToOneField(
        settings.AUTH_USER_MODEL, related_name="profile", on_delete=models.CASCADE
    )
    user_image = models.ImageField(
        upload_to="user_images/", default="default_user_image.jpg"
    )

    def __str__(self):
        return f"Profile for {self.user.username}"

class Manager(models.Model):
    user = models.OneToOneField(Users, related_name="manager", on_delete=models.CASCADE)

    def __str__(self):
        return self.user.username
    
class PaymentTransaction(models.Model):
    BANK = "bank"
    MPESA = "mpesa"
    CASH = "cash"
    
    PAYMENT_CHOICES = [
        (BANK, "bank"),
        (MPESA, "mpesa"),
        (CASH, "cash"),
    ]
    user = models.OneToOneField(settings.AUTH_USER_MODEL, related_name="payment", on_delete=models.CASCADE, null=True, blank=True)
    transaction_id = models.CharField(max_length=100)
    amount = models.DecimalField(max_digits=10, decimal_places=2)
    status = models.CharField(max_length=20)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    payment_method= models.CharField(max_length=255, choices=PAYMENT_CHOICES, null=True, blank=True) # Cash, Mpesa, Card
    balance = models.DecimalField(max_digits=50, decimal_places=2, null=True, blank=True)
    created_at = models.DateTimeField(auto_now_add=True, null=True, blank=True)
    created_by = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.SET_NULL, null=True, blank=True, related_name='paymenttho')
        
    def __str__(self):
        return f"Transaction ID: {self.transaction_id}, Amount: {self.amount}, Status: {self.status}"
















