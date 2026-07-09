from django.urls import path
from .views import ContactCreateView, GalleryListView

urlpatterns = [
    path("contact/", ContactCreateView.as_view()),
    path("gallery/", GalleryListView.as_view()),
]