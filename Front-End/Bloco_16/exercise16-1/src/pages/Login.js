import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import loginAction from '../actions/loginAction';

class Login extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      email: '',
      password: '',
    }

    this.handleChange = this.handleChange.bind(this);
    this.validateLogin = this.validateLogin.bind(this);
  }

  handleChange({target}) {
    const state = this.state;
    const value = target.value;
    this.setState({
      ...state,
      [target.name]: value,
    })
  }

  validateLogin() {
    const { email, password } = this.state;

    return email && password ? true : false;
  }

  render() {
    const { validateLoginToStore } = this.props;
    return (
      <div>
        <input name="email" type="email" placeholder="Usuário" onChange={this.handleChange}></input>
        <input name="password" type="password" placeholder="Senha" onChange={this.handleChange}></input>
        <Link to='/users'>
        <button type="button" onClick={() => validateLoginToStore(this.validateLogin())}>Entrar</button>
        </Link>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  validateLoginToStore: (login) => dispatch(loginAction(login)),
});

export default connect(null, mapDispatchToProps)(Login);