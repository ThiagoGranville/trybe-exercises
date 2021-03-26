import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Cadastro from './pages/Cadastro';
import Home from './pages/Home';
import Login from './pages/Login';
import ClientesCadastrados from './pages/ClientesCadastrados';

class App extends Component {
  render() {
    return (
        <Switch>
          <Route exact path="/" component={ Home } />
          <Route path="/login" component={ Login } />
          <Route path="/cadastro" component={ Cadastro } />
          <Route path='/users' component={ ClientesCadastrados } />
        </Switch>
    );
  }
}

export default App;
