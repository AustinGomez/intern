from rest_framework.response import Response
from companies.services import search_queryset
from companies.serializers import CompanySerializer
from companies.models import Company
from rest_framework import viewsets
from rest_framework import filters
from rest_framework.decorators import action, detail_route

from reviews.models import Review
from reviews.serializers import ReviewSerializer

class CompanyViewSet(viewsets.ModelViewSet):
    serializer_class = CompanySerializer
    queryset = Company.objects.all()
    lookup_field = 'slug'

    def list(self, request, *args, **kwargs):
        queryset = search_queryset(self.get_queryset(), request)
        print(queryset)
        page = self.paginate_queryset(queryset)
        print(page)
        if page is not None:
            serializer = self.get_serializer(page, many=True)
            return self.get_paginated_response(serializer.data)

        serializer = self.get_serializer(queryset, many=True)
        return Response(serializer.data)

    @detail_route()
    def reviews(self, request, slug=None):
        company = self.get_object()
        reviews = Review.objects.filter(company_id=company).order_by('-created_date')
        review_serializer = ReviewSerializer(reviews, many=True)
        page = self.paginate_queryset(reviews)
        if page:
            return self.get_paginated_response(review_serializer.data)
        return Response(review_serializer.data)
