import datetime
from django.db import models

"class for save user data game "
class UserGame(models.Model):

    name = models.CharField(max_length=255)

    email = models.CharField(max_length=255)

    birth_date = models.DateField(default=datetime.datetime.now())



    

