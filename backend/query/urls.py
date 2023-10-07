from django.urls import path
from . import views

urlpatterns=[

    # path('norwegianwood/',views.norwegian_wood),
    # path('turingpaper/', views.turing_paper, name='turing_paper'),
    # path('psych/', views.psych, name='psych'),
    # path('eighty/', views.eighty, name='eighty'),
    # path('jh/', views.jh, name='jh'),
    # path('mov/', views.mov, name='mov'),
    path('home/', views.home, name='home'),
    path('say_hello/', views.say_hello, name='say_hello'),
    path('register/', views.register_user, name='register_user'),
    path('nasa/', views.nasa, name='nasa'),
    path('bulletin/', views.bulletin, name='bulletin'),
]