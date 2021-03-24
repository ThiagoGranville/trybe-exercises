import React, { Component } from 'react';
import { connect } from 'react-redux';
import registerAction from '../actions/registerAction';

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
    const { age, name, email } = this.state;
    const { sendInfo } = this.props;
    return (
      <div>
        <form>
          <input name="age" type="number" placeholder="idade" onChange={this.handleChange}></input>
          <input name="name" type="text" placeholder="Nome" onChange={this.handleChange}></input>
          <input name="email" type="email" placeholder="E-mail" onChange={this.handleChange}></input>
          <button type="button" onClick={() => { sendInfo(age, name, email) }}>Cadastrar</button>
        </form>
      </div>
    );
  }
}

const MapDispatchToProps = (dispatch) => ({
  sendInfo: (idade, nome, email) => dispatch(registerAction(idade, nome, email))
});

export default connect(null, MapDispatchToProps)(Cadastro);