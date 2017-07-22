# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models

# Create your models here.
class UserProfile(models.Model):
    firstname = models.CharField(max_length = 64)
    lastname = models.CharField(max_length = 100)
    email = models.CharField(max_length = 100)
    numppl = models.DecimalField(max_digits = 10, decimal_places = 2)
