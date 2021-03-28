from django.db import models

class Instituicoes(models.Model):
    name = models.TextField()
    address = models.TextField()

class Funcionario(models.Model):
    nome = models.TextField()
    rank = models.TextField()
    
