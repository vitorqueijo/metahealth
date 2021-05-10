import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Serviço gratuito e complementar a pacientes neurodiversos
        </p>
        <div>
          <p>
            <a
              className="App-link"
              href="https://github.com/vitorqueijo/metahealth_server"
              target="_blank"
              rel="noopener noreferrer"
            >
              Projeto Metahealth Server
            </a>
          </p>
          <a
            className="App-link"
            href="https://github.com/vitorqueijo/metahealth"
            target="_blank"
            rel="noopener noreferrer"
          >
            Saiba Mais
          </a>
        </div>
      </header>
      <footer className="App-footer">
        <div>GNU General Public License v3.0</div>
      </footer>
    </div>
  );
}

export default App;
