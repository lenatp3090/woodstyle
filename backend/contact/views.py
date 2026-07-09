from rest_framework import generics
from .models import Contact, Gallery
from .serializers import ContactSerializer, GallerySerializer


# Contact Form API
class ContactCreateView(generics.CreateAPIView):
    queryset = Contact.objects.all()
    serializer_class = ContactSerializer


# Gallery Images API
class GalleryListView(generics.ListAPIView):
    queryset = Gallery.objects.all()
    serializer_class = GallerySerializer