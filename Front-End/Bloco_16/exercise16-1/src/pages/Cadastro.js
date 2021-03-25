import React, { Component } from 'react';
import { connect } from 'react-redux';
import registerAction from '../actions/registerAction';
import { Link } from 'react-router-dom';

class Cadastro extends Component {
  constructor(props) {
    super(props);

    this.state = {
      age: 0,
      name: '',
      email: '',
    }

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({ target }) {
    const state = this.state;
    const name = target.name;
    const value = target.value;
    this.setState(
      {
        ...state,
        [name]: value,
      }
      );
  }

  render() {
    const { age, name, email,  } = this.state;
    const { sendInfo, loginStatus } = this.props;
    return (
      <div>
        { loginStatus ?
        (<form>
          <input name="age" type="number" placeholder="idade" onChange={this.handleChange}></input>
          <input name="name" type="text" placeholder="Nome" onChange={this.handleChange}></input>
          <input name="email" type="email" placeholder="E-mail" onChange={this.handleChange}></input>
          <button type="button" onClick={() => { sendInfo({ age, name, email }) }}>Cadastrar</button>
          <Link to='/users'>Página de usuários</Link>
        </form>)
        : <p>Login não efetuado</p>
        }
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  sendInfo: (user) => dispatch(registerAction(user)),
});

const mapStateToProps = (state) => ({
  loginStatus: state.loginReducer.login,
});

export default connect(mapStateToProps, mapDispatchToProps)(Cadastro);