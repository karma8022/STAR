from django.urls import path
from . import views

urlpatterns=[
    path('home/', views.home, name='home'),
    path('say_hello/', views.say_hello, name='say_hello'),
    path('login/', views.login_user, name='login_user'),
    path('register/', views.register_user, name='register_user'),
    path('nasa/', views.nasa, name='nasa'),
    path('bulletin/', views.bulletin, name='bulletin'),
    path('standards/', views.standards, name='standards'),
    path('spacetech/', views.standards, name='spacetech'),
]