from django.db import router
from django.urls import path, include
from rest_framework import routers
from .views import SubscriptionView

router = routers.DefaultRouter()
router.register(r"subscriptions", SubscriptionView)

urlpatterns = [path("", include(router.urls))]
