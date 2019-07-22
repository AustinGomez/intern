from django.db.models import Q
from django.contrib.postgres.search import SearchVector, SearchQuery, SearchRank, TrigramSimilarity

def search_queryset(queryset, request):
    query = request.GET.get('q', None)

    if query:
        vector = SearchVector('name', weight='A')
        query = SearchQuery(query)

        queryset = queryset.annotate(rank=SearchRank(vector, query),
                                     similarity=TrigramSimilarity('name', request.GET.get('q', None))) \
            .filter((Q(similarity__gte=0.1))) \
            .order_by('-similarity')

    return queryset