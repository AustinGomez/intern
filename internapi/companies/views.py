from rest_framework.response import Response

from companies.services import search_queryset
from companies.serializers import CompanySerializer
from companies.models import Company
from rest_framework import viewsets
from rest_framework.filters import OrderingFilter
from django_filters import rest_framework as filters
from rest_framework.decorators import detail_route
from django_filters.rest_framework import DjangoFilterBackend
from jobs.models import Job
from jobs.serializers import JobSerializer
from reviews.models import Review
from reviews.serializers import ReviewSerializer


class CompanyFilter(filters.FilterSet):
    min_total_rating = filters.NumberFilter(field_name="total_rating", lookup_expr='gte')
    min_avg_rating = filters.NumberFilter(field_name="avg_rating", lookup_expr='gte')

    class Meta:
        model = Company
        fields = '__all__'


class CompanyViewSet(viewsets.ModelViewSet):
    serializer_class = CompanySerializer
    queryset = Company.objects.all()
    lookup_field = 'slug'
    filterset_class = CompanyFilter
    filter_backends = [OrderingFilter, DjangoFilterBackend]

    def list(self, request, *args, **kwargs):
        queryset = search_queryset(self.filter_queryset(self.get_queryset()), request)
        page = self.paginate_queryset(queryset)
        serializer = self.serializer_class(page, many=True)
        return self.get_paginated_response(serializer.data)

    @detail_route()
    def reviews(self, request, slug=None):
        company = self.get_object()

        reviews = Review.objects.filter(company_id=company).order_by('-created_date')
        location = self.request.query_params.get('location', None)
        title = self.request.query_params.get('title', None)

        if location:
            reviews = reviews.filter(job_id__location=location)
        if title:
            reviews = reviews.filter(job_id__title=title)
        page = self.paginate_queryset(reviews)
        review_serializer = ReviewSerializer(page, many=True)
        return self.get_paginated_response(review_serializer.data)

    @detail_route()
    def jobs(self, request, slug=None):
        company = self.get_object()
        jobs = Job.objects.filter(company=company)
        page = self.paginate_queryset(jobs)
        job_serializer = JobSerializer(page, many=True)
        return self.get_paginated_response(job_serializer.data)