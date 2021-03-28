from django.core.management.base import BaseCommand, CommandError
from core.models import Funcionario as User


class Command(BaseCommand):
    help = 'get status of funcionario register'
    
    def add_arguments(self, parser):
        parser.add_argument('register_ids', type=list)
        
    def handle(self, *args, **kwargs):
        for register_id in kwargs['register_ids']:
            try:
                register = register_id.objects.get(pk=register_id)
            except User.DoestNotExist:
                raise CommandError("Register '%s' does not exist" % register_id)
            
