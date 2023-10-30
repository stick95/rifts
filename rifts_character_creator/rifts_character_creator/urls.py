"""
URL configuration for rifts_character_creator project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path

from characters.views import CharacterListCreateView, CharacterDeleteView
from classes.views import OccListCreateView, RccListCreateView, RccDetailView, OccDetailView
from users.views import UserListView

urlpatterns = [
    path('admin/', admin.site.urls),

    #Characters
    path('api/characters/', CharacterListCreateView.as_view(), name='characters-list-create'),
    path('api/characters/<int:pk>/delete/', CharacterDeleteView.as_view(), name='character-delete'),

    #Classes
    path('api/occs/', OccListCreateView.as_view(), name='occ-list-create'),
    path('api/occs/<int:pk>/', OccDetailView.as_view(), name='occ-detail'),
    path('api/rccs/', RccListCreateView.as_view(), name='rcc-list-create'),
    path('api/rccs/<int:pk>/', RccDetailView.as_view(), name='rcc-detail'),

    #Users
    path('api/users/', UserListView.as_view(), name='user-list'),

]
