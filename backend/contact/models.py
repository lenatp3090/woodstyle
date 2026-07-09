from django.db import models


class Contact(models.Model):
    name = models.CharField(max_length=100)
    email = models.EmailField()
    phone = models.CharField(max_length=20)
    message = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.name


class Gallery(models.Model):

    CATEGORY_CHOICES = [
        ("Kitchen", "Kitchen"),
        ("Bedroom", "Bedroom"),
        ("Living Room", "Living Room"),
        ("Wardrobe", "Wardrobe"),
        ("Office", "Office"),
        ("TV Unit", "TV Unit"),
        ("Other", "Other"),
    ]

    title = models.CharField(max_length=200)

    category = models.CharField(
        max_length=50,
        choices=CATEGORY_CHOICES,
        default="Other"
    )

    image = models.ImageField(upload_to="gallery/")

    created_at = models.DateTimeField(auto_now_add=True)


    def __str__(self):
        return self.title