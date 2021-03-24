import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Cadastro from './pages/Cadastro';
import Home from './pages/Home';
import Login from './pages/Login';

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={ Home } />
          <Route path="/login" component={ Login } />
          <Route path="/cadastro" component={ Cadastro } />
        </Switch>
      </Router>
    );
  }
}

export default App;
