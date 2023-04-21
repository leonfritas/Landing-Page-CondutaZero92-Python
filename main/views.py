from django.shortcuts import render
from django.http import HttpResponse

# Create your views here.

def get_index(request):
    context_dict={}

    return render(request, 'index.html', context_dict )
