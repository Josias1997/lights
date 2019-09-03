from django.shortcuts import render
from .models import Description

# Create your views here.


def index(request):
    description = Description.objects.all()[0]
    return render(request, 'frontend/index.html', {
        'description': description
    })

