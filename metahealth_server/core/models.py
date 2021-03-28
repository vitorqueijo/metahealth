from django.db import models


class Funcionario(models.Model):
    tipo_profissional = models.TextField()
    nome = models.TextField()
    register_id = models.TextField()
    uf = models.TextField()
    rank = models.TextField()
    
    def __str__(self):
        return self.nome
    
class ValidationModel(models.Model):
    url = models.TextField(_("url origem"))
    status = models.TextField(_("status request"))
    api_limit = models.TextField(_("api status cota limite"))
    item = models.TextField(_(""))
    
    
