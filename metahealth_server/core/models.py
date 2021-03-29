from django.db import models
from django_postgres_extensions.models.fields import JSONField
from django.utils.translation import gettext_lazy as _


class Profissional(models.Model):
    
    #TODO: Add more professionals as a choice
    class TipoDeRegistro(models.TextChoices):
        MEDICINA = 'CRM', _('Medicina')
        PSICOLOGIA = 'CRP', _('Psicologia')
        OUTROS = 'XXX', _('Outros')
    
    class UF(models.TextChoices):
        SP = 'SP', _('SaoPaulo')
        OUTROS = 0, _('OutrasLocalidades')
    
    tipo_profissional = models.CharField(
        max_length=5,
        choices=TipoDeRegistro.choices,
        default=TipoDeRegistro.Outros,
    )
    
    uf = models.CherField(
        max_length = 2,
        choices=UF.choices,
        default=UF.Outros,
    )
    
    created_at = models.DateField(_("data_de_criacao"), auto_now_add=True)
    nome = models.TextField()
    register_id = models.TextField()
    rank = models.TextField()
    raw_validation = models.JSONField(_("raw validation"), null=True, blank=True)
    
    def is_in_scope(self):
        return self.tipo_profissional in {
            self.TipoDeRegistro.MEDICINA,
            self.TipoDeRegistro.PSICOLOGIA,
        }
    
    class Meta:
        ordering = ['nome']
    
    def __str__(self):
        return self.nome
    
    
