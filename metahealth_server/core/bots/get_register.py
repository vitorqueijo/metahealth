from django.conf import settings
from django.core import serializers

import requests
import json



class RegisterValidationBot:
    def __init__(self, tipo_profissional, registro_profissional, uf = 'SP', **kwags):
        self.REGISTER_KEY = getattr(settings, "REGISTER_KEY", None)
        self.target = getattr(settings, "API_CONSULTA", None)
        self.tipo_profissional = tipo_profissional
        self.registro_profissional = registro_profissional
        self.output_type = kwags.get('output_type', 'json')
        self.uf = uf[0:1] + "%2F" + uf[2:]
        self.Session = requests.Session()
    
    def __url_builder(self):
        return self.target + f"?tipo={self.tipo_profissional}&uf={self.uf}&q={self.registro_profissional}\
            &chave={self.REGISTER_KEY}&destino={self.output_type}"
        
    
    def __get_valiation(self):
        res = requests.Response()
        json_res = json()
        
        with self.Session as ses:
            res = ses.get(__url_builder)
            if res.status_code != requests.codes.ok:
                res.raise_for_status()
            json_res = res.json()
    
    