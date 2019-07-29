from django.db import models
from base.models import BaseModel

# Create your models here.
class Company(BaseModel):
    name = models.CharField(max_length=100, blank=False, unique=True)
    size = models.CharField(max_length=50, blank=True, null=True)
    description = models.TextField(blank=True, null=True, default='')
    website_url = models.URLField(blank=True, null=True)
    careers_url = models.URLField(blank=True, null=True)
    logo_url = models.URLField(blank=True, null=True)
    slug = models.CharField(db_index=True, max_length=50)
    user_reviews_count = models.IntegerField(default=0)
    total_rating = models.FloatField(db_index=True, default=0.0)
    avg_rating = models.FloatField(db_index=True, default=0.0)
    hq_city = models.CharField(max_length=50, blank=True, null=True)
    hq_region = models.CharField(max_length=50, blank=True, null=True)
    hq_country = models.CharField(max_length=50, blank=True, null=True)
    approved = models.BooleanField(default=False)

    def __str__(self):
        return self.name

    class Meta:
        verbose_name_plural = "companies"


