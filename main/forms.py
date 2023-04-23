from django import forms


class RegisterGameForm(forms.Form):

    name = forms.CharField(label="Nome", max_length=255)

    email =forms.CharField(label="E-mail", max_length=255)

    birth_date = forms.DateField(label='Data de Nascimento')


