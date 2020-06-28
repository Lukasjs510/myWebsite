from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('', include('frontend.urls')),
    path('', include('workexp.urls')),
    path('', include('accounts.urls')),
    path('', include('welcome.urls')),
]
