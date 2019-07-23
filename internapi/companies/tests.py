from django.test import TestCase
from rest_framework import status
from rest_framework.reverse import reverse
from rest_framework.test import APITestCase
from companies.models import Company
from jobs.models import Job
from reviews.models import Review
from companies.serializers import CompanySerializer
from reviews.serializers import ReviewSerializer


class ReadCompanyTest(TestCase):

    def setUp(self):
        self.test_company = Company.objects.create(name="TestCompany", slug='testcompany')
        self.test_job = Job.objects.create(company=self.test_company, title="testjob")
        self.test_review = Review.objects.create(company=self.test_company, job=self.test_job, overall_rating=5,
                                                 mentorship_rating=5, work_life_balance_rating=5,
                                                 meaningful_work_rating=5, user_id=1)

    def test_can_read_company_list(self):
        response = self.client.get(reverse('company-list'), {"limit": 4})
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        json = response.json()
        companies = Company.objects.all()
        serializer = CompanySerializer(companies, many=True)
        self.assertEqual(json.get('results'), serializer.data)

    def test_company_search_filters_results(self):
        response = self.client.get(reverse('company-list'), {"limit": 4, "q": "facebook"})
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        json = response.json()
        self.assertEqual(json.get('results'), [])

    def test_company_search_returns_correct_company(self):
        Company.objects.create(name="facebook", slug="facebook")
        response = self.client.get(reverse('company-list'), {"limit": 4, "q": "facebook"})
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        json = response.json()
        company = Company.objects.filter(name='facebook')
        serializer = CompanySerializer(company, many=True)
        self.assertEqual(json.get('results'), serializer.data)

    def test_can_read_company_detail(self):
        response = self.client.get(reverse('company-detail', kwargs={"slug": self.test_company.slug}))
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        company = Company.objects.get(slug=self.test_company.slug)
        serializer = CompanySerializer(company)
        self.assertEqual(serializer.data, response.data)

    def test_read_invalid_company_detail_fails(self):
        response = self.client.get(reverse('company-detail', kwargs={"slug": "DOESNTEXIST"}))
        self.assertEqual(response.status_code, status.HTTP_404_NOT_FOUND)

    def test_can_read_company_reviews(self):
        response = self.client.get(reverse('company-reviews', kwargs={"slug": self.test_company.slug}), {"limit": 4})
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        json = response.json()
        reviews = Review.objects.filter(company=self.test_company)
        serializer = ReviewSerializer(reviews, many=True)
        self.assertEqual(json.get('results'), serializer.data)
