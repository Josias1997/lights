from django import forms
from .models import Comment, NewsletterUser


class CommentForm(forms.ModelForm):
    class Meta:
        model = Comment
        fields = ('author_name', 'author_email', 'text')
        labels = {
            'author_name': 'Nom',
            'author_email': 'Email',
            'text': 'Commentaire'
        }


class NewsletterSignUpForm(forms.ModelForm):
    class Meta:
        model = NewsletterUser
        fields = ('email', 'name')
        labels = {
            'email': 'Email',
            'name': 'Nom'
        }
