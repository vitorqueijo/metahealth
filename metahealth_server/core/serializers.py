from django.contrib.auth.models import User
from rest_framework import serializers
from core.models import Professional


class ProfessionalSerializer(serializers.ModelSerializer):
    class Meta:
        model = Professional
    
    def create(self, data_to_create):
        name_data = data_to_create.pop('nome')
        