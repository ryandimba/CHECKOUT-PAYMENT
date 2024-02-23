from django.urls import path
from .views import ManagerSignupView, CustomAuthToken, CallbackAPIView,MakePaymentAPIView,ClientSignupView

urlpatterns = [
    path('mpesa/lipanampesa/', MakePaymentAPIView.as_view(), name='mpesa-lipanampesa'),
    path('mpesa-callback/', CallbackAPIView.as_view(), name='mpesa_callback'),
    path("signup/manager/", ManagerSignupView.as_view()),
    path("signup/client/", ClientSignupView.as_view()),
    path("login/", CustomAuthToken.as_view(), name="auth-token"),
]
