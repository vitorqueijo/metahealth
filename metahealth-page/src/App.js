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
        <a
          className="App-link"
          href="https://github.com/vitorqueijo/metahealth_server"
          target="_blank"
          rel="noopener noreferrer"
        >
          Projeto Metahealth Server
        </a>
      </header>
    </div>
  );
}

export default App;
