import React, { Component } from 'react';

class Login extends Component {
  render() {
    return (
      <div>
        <input type="email" placeholder="Usuário"></input>
        <input type="password" placeholder="Senha"></input>
        <button type="button">Entrar</button>
      </div>
    );
  }
}

export default Login;