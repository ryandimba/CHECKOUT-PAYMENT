from django.contrib import admin

from .models import PaymentTransaction,Users


admin.site.register(PaymentTransaction)
admin.site.register(Users)
