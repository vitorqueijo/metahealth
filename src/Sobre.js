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
                        Trazer um serviço gratuito e complementar a pacientes neurodiversos visando um melhor direcionamento e guia nos sistemas público e privados.
                    </p>
                    <h2 className="App-title">Como fazer isso?</h2>
                    <p className="App-intro">
                        O Metahealth em si pretende ser um sistema, não um aplicativo unicamente. Em termos práticos para o profissional, haverá um aplicativo onde
                        poderá se cadastrar suas informações como, além da especialidade, sua disponibilidade e preços (ou não, caso seja ativista) de acordo com a possível
                        severidade do estado psíquico do paciente. Tal como haverá a inserção manual dos locais da saúde pública, seja por indicação de algum profissional da
                        plataforma, seja pelo desenvolvedor da plataforma. Do lado do paciente, haverá um app para entrada rápida sem login, a ideia é conseguir uma agilidade
                        no atendimento de casos severos, logo de acordo com um formulário rápido (severidade da condição, serviços públicos ou privados e localização atual )
                        indicar os locais e profissionais disponíveis na região do paciente.
                    </p>
                    <p className="App-intro">
                        O conceito de ser um sistema de auditor é o que demanda os outros dois componentes nucleares do projeto: bot verificador de registros e um algoritmo de rankeamento.
                        O bot verificador apenas verifica o registro dos profissionais da plataforma, em caso de irregularidade ou inativo, o profiossional não será mais mostrado aos pacientes. 
                        Por isso, apenas será possível estar na plataforma se o profissional possuir CRM, CRP e outros ( 'outros' ainda está em fase de estudo ). Quanto ao rankeador, é importante
                        a participação de profissionais, ele poderá votar em graus de confiança, para formar um ecossistema de auditoria horizontal, pacientes também poderão votar, contudo no status atual
                        do projeto ainda não está diretamente no escopo, uma vez que não há login, a votação ficaria desequilibrada. O rankeamento apenas pretende-se rankear de acordo com localizações a fim de
                        otimizar o serviço de pesquisa, separando público do privado. Afinal, mesmo que um profissional seja 'ótimo', sempre pode ocorrer do paciente não possuir meios financeiros ou até evitar pelo medo de ser cobrado.
                    </p>
                    <h2 className="App-title">Motivação</h2>
                    <p className="App-intro">
                        A procura por ajuda psicológica e psiquiatrica infelizmente são ainda difíceis, morosas e até frustrantes.
                        Sem contar o
                        <a 
                            classLink="App-link" 
                            href="https://www.unifesp.br/reitoria/dci/index.php?option=com_k2&view=item&id=2876:depressao-e-a-maior-causa-de-incapacitacao-no-mundo"
                            target="_blank"
                            rel="noopener noreferrer"
                            >
                            estigma
                        </a>
                        existente sobre doenças psiquiátricas. Para tanto, o sistema pretende-se trazer um ecossistema, uma rede que já existe de indicação profissional e
                        humana para os pacientes em diversas situações sem a barreira de algoritmos movidos à "pay-per-view", uma vez cadastrado e homologado, o profissional
                        já pode auditar outros profissionais conhecidos e locais de forma completamente anônima ou não ( Imaginamos que poucas vezes haverá alguém auditando
                        outro profissional negativamente de forma não-anônima).
                    </p>
                    <p className="App-intro">
                        Inicialmente, o projeto estava condicionado a ser apenas uma ferramenta de pesquisa otimizada para casos severos. Após projetar o sistema em sua ideia final,
                        há muitas possibilidades de escalonamento.
                    </p>
                    <p className="App-intro">
                        O único problema: atualmente o projeto é tocado fixamente por uma pessoa. Eu. Atualmente, trabalho e estudo, tenho poucas horas para conseguir me dedicar ao projeto,
                        além de ter de lidar com estresse e sobrecarga ( além de ocasionais insônias ) que fazem o projeto ficar parado por dias ou semanas. Sei o valor do que isso poderia ter
                        me trazido no passado e tornei disso como meu motor principal, trazer aos que procuram ajuda o que hoje eu tenho após anos de tentativa e erro. 
                    </p>
                    <p className="App-intro">
                        Toda ajuda é válida, seja de trabalho de coding, financeira ou até sugestões. Mas não absoluta, o que eu pude aprender durante o desenvolvimento do projeto,
                        é uma incompreensão do que seria procurar ajuda psicológica e psiquiátrica, ou até o que seria procurar ajuda em situações gravíssimas, então, não se sinta
                        ignorado caso eu filtre alguma sugestão, se for por e-mail, prometo que com tempo tento explicar os motivos.
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