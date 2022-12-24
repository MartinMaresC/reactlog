import React, { Component } from 'react'
import '../css/Login.css';
import 'bootstrap/dist/css/bootstrap.min.css';
class Login extends Component {
  render() {
    return (
      <div className='containerPrincipal'>
        <div className='containerSecundario'>
          <div className='form-group'>
           <label>Usuario: </label>
           <br />
           <input type="text" className='form-control' />
           <br />
           <label>Contraseña: </label>
           <br />
           <input type="password" className='form-control' />
           <br />
           <button className='btn btn-primary'>Iniciar Sesión</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;