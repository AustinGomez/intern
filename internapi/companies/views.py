from rest_framework.response import Response

from companies.serializers import CompanySerializer, CompanySearchSerializer, CompanyAutoCompleteSerializer
from companies.models import Company
from rest_framework import viewsets
from rest_framework import filters
from base.filters import RelatedOrderingFilter
from rest_framework.decorators import action, detail_route
from drf_haystack.viewsets import HaystackViewSet
from drf_haystack.filters import HaystackAutocompleteFilter

from reviews.models import Review
from reviews.serializers import ReviewSerializer

class CompanyViewSet(viewsets.ModelViewSet):
    serializer_class = CompanySerializer
    queryset = Company.objects.all()
    lookup_field = 'slug'

    @detail_route()
    def reviews(self, request, slug=None):
        company = self.get_object()
        reviews = Review.objects.filter(company_id=company).order_by('-created_date')
        review_serializer = ReviewSerializer(reviews, many=True)
        return Response(review_serializer.data)

class CompanySearchView(HaystackViewSet):
    index_models = [Company]
    serializer_class = CompanySearchSerializer
    filter_backends = [filters.OrderingFilter]


class CompanyAutocompleteSearchViewSet(HaystackViewSet):
    index_models = [Company]
    serializer_class = CompanyAutoCompleteSerializer
    filter_backends = [HaystackAutocompleteFilter]
