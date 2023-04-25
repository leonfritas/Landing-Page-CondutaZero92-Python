from django.shortcuts import render
from django.http import HttpResponse
from django.contrib import messages
from main.forms import RegisterGameForm
from main.models import UserGame

# Create your views here.

def get_index(request):
    context_dict={}

    if request.method == 'POST':
        form = RegisterGameForm(request.POST)
        if form.is_valid():
            name = form.cleaned_data['name']
            email = form.cleaned_data['email']
            birth_date = form.cleaned_data['birth_date']

            userGame = UserGame()
            userGame.name = name
            userGame.email = email
            userGame.birth_date =birth_date
            userGame.save()

            messages.add_message(request, messages.SUCCESS, 'Dados Salvos com Sucesso!')
    else:
        form = RegisterGameForm()

    context_dict['form'] = form
       

    return render(request, 'index.html', context_dict )
