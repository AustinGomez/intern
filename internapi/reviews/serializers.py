from rest_framework import serializers
from reviews.models import Review
from companies.serializers import CompanySerializer
from jobs.serializers import JobSerializer


class ReviewSerializer(serializers.ModelSerializer):
    company = CompanySerializer(
        source='company_id',
        read_only=True
    )

    job = JobSerializer(
        source='job_id',
        read_only=True
    )

    class Meta:
        model = Review
        fields = '__all__'
