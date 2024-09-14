from django.db import models

# Create your models here.

class Category(models.Model):
    category_title = models.CharField(max_length = 10)
    def __str__(self):
        return self.category_title

class Clothing(models.Model):
    category = models.ForeignKey(Category, on_delete = models.CASCADE)
    clothes_price = models.DecimalField(max_digits = 4, decimal_places=2, default= 0)
    clothes_title = models.CharField(max_length = 250)
    clothes_size = models.CharField(max_length = 5)
    clothes_description = models.CharField(max_length = 200)
    def __str__(self):
        return f"{self.clothes_title} - ${self.clothes_price} - {self.clothes_description}"