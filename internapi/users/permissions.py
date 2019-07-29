from rest_framework import permissions


class IsAuthenticatedOrReadOnly(permissions.BasePermission):
    """
    Object-level permission to only allow owners of a review to edit it.
    """

    def has_object_permission(self, request, view, obj):
        # Read permissions are allowed to any request,
        # so we'll always allow GET, HEAD or OPTIONS requests.
        if request.method in permissions.SAFE_METHODS:
            return True

        try:
            return obj.user == request.user or request.user.is_superuser
        except AttributeError:
            return request.user.is_superuser

    """
    Permission to let all authenticated users create a review
    """
    def has_permission(self, request, view):
        if request.method not in permissions.SAFE_METHODS:
            return True if request.user.is_authenticated else False

        return True
