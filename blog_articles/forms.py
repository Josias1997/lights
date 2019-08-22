from django import forms
from .models import Comment


class CommentForm(forms.ModelForm):
    class Meta:
        model = Comment
        fields = ('author_name', 'author_email', 'text')
        labels = {
            'author_name': 'Nom',
            'author_email': 'Email',
            'text': 'Commentaire'
        }