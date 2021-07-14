import { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Link } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h3>
            Serviço Opensource a pacientes neurodiversos
          </h3>
          <div>
            <p>
              <a
                className="App-link"
                href="https://github.com/vitorqueijo/metahealth"
                target="_blank"
                rel="noopener noreferrer"
              >
                Projeto Metahealth Server
              </a>
            </p>
            <Link
              className="App-link"
              to="/saiba-mais"
            >
              O que é o Metahealth?
            </Link>
          </div>
        </header>
        <footer className="App-footer">
          <div>GNU General Public License v3.0</div>
        </footer>
      </div>
    );
  }
}

export default App;
