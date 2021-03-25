import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class ClientesCadastrados extends Component {
  render() {
    const { registeredUsers, loginStatus } = this.props;
    return (
      <div>
        {loginStatus ? (
          registeredUsers.length !== 0 ? (
            <div>
              <h1>Clientes</h1>
              {registeredUsers.map((user) => {
                return (
                  <div>
                    <p>{user.name}</p>
                    <p>{user.age}</p>
                    <p>{user.email}</p>
                  </div>
                );
              })}
            </div>
          ) : (
            <div>
              <p>Nenhum cliente cadastrado</p>
              <Link to="/cadastro">Cadastre-se aqui</Link>
            </div>
          )
        ) : (
          <p>Login não efetuado</p>
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  registeredUsers: state.registerReducer,
  loginStatus: state.loginReducer.login,
});

export default connect(mapStateToProps)(ClientesCadastrados);
