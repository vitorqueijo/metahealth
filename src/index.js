import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import SaibaMais from './Sobre';
import Component404 from './Component404';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import './fonts/SpaceGrotesk-VariableFont_wght.ttf'

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" exact={ true } component={App}/>
      <Route path="/saiba-mais" component={SaibaMais}/>
      <Route path='*' component={Component404} />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
