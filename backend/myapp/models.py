# models.py
from django.db import models

class DataEntry(models.Model):
    # Define fields corresponding to JSON data
    end_year = models.IntegerField()
    intensity = models.IntegerField()
    sector = models.CharField(max_length=255)
    topic = models.CharField(max_length=255)
    insight = models.TextField()
    url = models.URLField()
    region = models.CharField(max_length=255)
    # Add other fields here

    def __str__(self):
        return self.insight
