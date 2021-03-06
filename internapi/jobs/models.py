from django.db import models
from base.models import BaseModel

# Create your models here.


class Job(BaseModel):
    title = models.CharField(max_length=100)
    min_salary_in_cents = models.BigIntegerField(blank=True, null=True)
    max_salary_in_cents = models.BigIntegerField(blank=True, null=True)
    avg_salary_in_cents = models.BigIntegerField(blank=True, null=True)
    avg_rating = models.FloatField(blank=True, null=True)
    slug = models.CharField(blank=False, null=False, max_length=100)
    location = models.CharField(blank=True, null=True, max_length=150)
    total_rating = models.FloatField(blank=True, null=True)
    total_salary_in_cents = models.BigIntegerField(blank=True, null=True)

    company = models.ForeignKey(db_index=True, to="companies.Company", on_delete=models.CASCADE)

    def __str__(self):
        return self.title + " @ " + str(self.company.name)