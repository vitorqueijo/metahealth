import { Component } from "react";
import './App.css';
import logo from './logo.svg';

class Component404 extends Component{
    render(){
        return(
            <div className='App'>
                <header className='App-header'>
                    <img src={logo} className="App-logo" alt="logo" />
                    <h1>
                        404...nada por aqui.
                    </h1>
                </header>
            </div>
        )
    }
}

export default Component404;