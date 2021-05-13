import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Link } from 'react-router-dom';


class SaibaMais extends Component {
    render () {
        return (
            <div className="App">
                <header className="App-header-sobre">
                    <Link to='/'>
                        <img src={logo} className="App-logo" alt="logo"/>
                    </Link>
                    <h1 className="App-title">
                        Sobre Metahealth
                    </h1>
                    <h2 className="App-title">Objetivo</h2>
                    <p className="App-intro">
                        Trazer um serviço gratuito e complementar aos pacientes neurodiversos, com um direcionamento e guia aos sistemas de saúde público e privado.
                    </p>
                    <h2 className="App-title">Como fazer isso?</h2>
                    <p className="App-intro">
                        O Metahealth  pretende ser um sistema, não apenas um aplicativo.
                    </p>
                    <p className="App-intro">
                        Para o profissional, haverá um aplicativo onde poderá  cadastrar informações como a sua especialidade,  a sua disponibilidade e os preços que pratica (ou não, caso seja ativista), em acordo com a possível severidade do estado psíquico do paciente.
                    </p>
                    <p className="App-intro">
                        Para o paciente, haverá um app com entrada rápida, sem login. A ideia é conseguir agilizar o atendimento dos casos severos, através de um formulário rápido (severidade da condição, serviços público ou privado e as localizações) indicando locais e profissionais disponíveis na região em que ele se encontrar.
                    </p>
                    <p className="App-intro">
                        O seu conceito – ser um sistema de auditor  - demanda  dois componentes nucleares do projeto: um bot verificador de registros e um algoritmo de rankeamento.
                    </p>
                    <p className="App-intro">
                        O bot verificador  considera o registro dos profissionais da plataforma e,  em caso de irregularidade ou inatividade, esse profissional não será indicado aos pacientes. Para isso, será  necessário que  o profissional possua CRM, CRP e outros ('outros' ainda está em fase de estudo).
                    </p>
                    <p className="App-intro">
                    Quanto ao rankeador,  importante para a participação de profissionais que, podem votar em graus de confiança, formando um ecossistema de auditoria horizontal. Os pacientes também podem votar, contudo não há ainda esse status no projeto,  uma vez que não há login e a votação poderia ficar desequilibrada. Esse rankeamento pretende  classificar  para  otimizar o serviço de pesquisa, separando o público do privado. Afinal, mesmo que um profissional seja extremamente capacitado, pode acontecer do paciente não possuir meios financeiros e até evitá-lo pelo medo de sua competência.
                    </p>
                    <h2 className="App-title">Motivação</h2>
                    <p className="App-intro">
                    A procura por ajuda psicológica e psiquiátrica  ainda é difícil, morosa e, por vezes, frustrante. Sem contar o 
                        <a
                            classLink="App-link" 
                            href="https://www.unifesp.br/reitoria/dci/index.php?option=com_k2&view=item&id=2876:depressao-e-a-maior-causa-de-incapacitacao-no-mundo"
                            target="_blank"
                            rel="noopener noreferrer"
                            >
                            estigma
                        </a>
                        existente nas doenças psiquiátricas. Para tanto, o sistema pretende  trazer um ecossistema, uma rede que já existe de indicação profissional e humana, para os pacientes em diversas situações, sem barreira de algoritmos movidos à "pay-per-view". Uma vez cadastrado e homologado, o profissional já pode auditar outros profissionais conhecidos e locais de forma completamente anônima ou não (Imaginamos que, algumas vezes, haverá alguém auditando outro profissional negativamente e de forma não-anônima).
                    </p>
                    <p className="App-intro">
                        Inicialmente, o projeto estava condicionado a ser apenas uma ferramenta de pesquisa otimizada para casos severos. Após projetar o sistema em sua ideia final, há muitas possibilidades de escalonamento.
                    </p>
                    <p className="App-intro">
                        O problema atual é que o projeto é tocado  por apenas uma pessoa, eu. Como trabalho e estudo, tento dedicar-me, também, ao projeto. Tenho que lidar com estresse e sobrecarga (além de ocasionais insônias) que  têm feito o projeto ficar parado por dias ou semanas. Sei o valor que isso poderia ter me trazido no passado e tornei isso meu motor principal. Tento assim, trazer a ajuda que hoje tenho, após anos de tentativas e erros.
                    </p>
                    <p className="App-intro">
                        Toda colaboração  será válida, seja de trabalho de codificação, financeira  e até sugestões. Pude aprender muito durante o desenvolvimento desse projeto.  Não se sinta ignorado caso eu filtre alguma sugestão em detrimento de outra.  Se for entrar em contato por e-mail, prometo, com o  tempo,  explicar os motivos dessas escolhas.
                    </p>
                    <h2 className="App-title">O que o Metahealth não é</h2>
                    <ul className="App-intro">
                        <li>Não é um marketplace.</li>
                        <li>Não é um sistema exclusivo para Médicos.</li>
                        <li>Não é um sistema de 'ERP'.</li>
                        <li>Não é um sistema de plano de saúde.</li>
                        <li>Não é um sistema de verificação de satisfação do cliente.</li>
                    </ul>
                    <p className="App-contato">
                        Contato: vitor.queijo93@gmail.com
                    </p>
                    <p>
                        <Link className="App-link" to="/" rel="noopener noreferrer">Voltar</Link>
                    </p>
                </header>
            </div>
        )
    }
}

export default SaibaMais;