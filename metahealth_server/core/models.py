from djongo import models


class StatusObject(models.Model):
    rank = models.CharField(max_length=100)
    
    class Meta:
        abstract = True

class Instituicoes(models.Model):
    name = models.CharField(max_length=100)
    address = models.CharField(max_length=100)
    status_rank = models.EmbeddedField(
        model_container = StatusObject
    )
    
    class Meta:
        abstract = True

class Entry(models.Model):
    _id = models.ObjectIdField()
    instituicao = models.EmbeddedField(
        model_container = Instituicoes,
    )
    objects = models.DjongoManager()
