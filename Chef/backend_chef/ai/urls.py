from django.urls import path
from .views import generate_recipe

urlpatterns = [
    path("generate/", generate_recipe),
]
