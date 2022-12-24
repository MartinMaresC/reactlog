import React, { Component } from 'react'
import '../css/Login.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import md5 from 'md5';

const baseUrl="http://localhost:3001/usuarios";


class Login extends Component {

  state={
    form:{
      username: '',
      password: ''
    }
  }

  handleChange=async e=>{
    await this.setState({
      form:{
        ...this.state.from,
        [e.target.name]: e.target.value
      }
    });
    console.log(this.state.form)
  }

  iniciarSesion=async()=>{
    await axios.get(baseUrl, {params: {username: this.state.form.username, password: md5(this.state.form.password)}})
    .then(response=>{
      console.log(response.data)
    })
    .catch(error=>{
      console.log(error);
    })
  }

  render() {
    return (
      <div className='containerPrincipal'>
        <div className='containerSecundario'>
          <div className='form-group'>
           <label>Usuario: </label>
           <br />
           <input onChange={this.handleChange} name='username' type="text" className='form-control' />
           <br />
           <label>Contraseña: </label>
           <br />
           <input onChange={this.handleChange} name='password' type="password" className='form-control' />
           <br />
           <button onClick={()=> this.iniciarSesion()} className='btn btn-primary'>Iniciar Sesión</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;