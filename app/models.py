from django.db import models

# Create your models here.

class User(models.Model):
    username = models.CharField(max_length=100)
    email = models.EmailField(max_length=50)
    password = models.CharField(max_length=10)
    
class Writer(models.Model):
    user_id = models.ForeignKey(User,on_delete=models.CASCADE)
    first_name = models.CharField(max_length=100)
    last_name = models.CharField(max_length=100)
    gender = models.CharField(max_length=10)
    profile_pic = models.ImageField(upload_to="img/",default="abc.jpg")
    created_at = models.DateTimeField(null=True,max_length=50)