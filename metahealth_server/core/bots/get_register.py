from django.conf import settings
from django.core import serializers

from core.models import Professional

import requests
import json


class RegisterValidationBot:
    def __init__(self, tipo_profissional, registro_profissional, uf = 'SP', **kwags):
        self.__REGISTER_KEY = getattr(settings, "REGISTER_KEY", None)
        self.__target = getattr(settings, "API_CONSULTA", None)
        self.__tipo_profissional = tipo_profissional
        self.__registro_profissional = registro_profissional[0:1] + "%2F" + registro_profissional[2:]
        self.__output_type = kwags.get('output_type', 'json')
        self.__uf = uf
        self.__Session = requests.Session()
    
    #TODO: checking all information before bot calling and adding better callback
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
            return res.json()

    def __call__(self):
        if not Professional.is_in_scope(self.__tipo_professional, self.__uf):
            raise Exception("Está fora do escopo do sistema!")
        self.__url_builder()
        return self.__get_validation()
 