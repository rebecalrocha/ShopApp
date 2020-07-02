import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
  }

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  }

  onSubmit = event => {
    event.preventDefault();
    if(this.state.email === 'teste@teste.com' &&  this.state.password === '123123') {
      
      //setar user no localStorage
      const user = { uid: "01", email: "teste@teste.com" }
      localStorage.setItem('currentUser', JSON.stringify(user));
      window.location.href = '/home';
    } else {
      console.log('continuo em login');
      // error
    }
  }

  render() {
    return (
      <div className="container marginLogin">
        <form className="container-form">
            <div className="form-group">
                <label htmlFor="exampleInputEmail1">Email</label>
                <input value={this.state.email} onChange={this.handleChange} autoComplete="off" type="email" name="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
            </div>
            <div className="form-group">
                <label htmlFor="exampleInputPassword1">Password</label>
                <input value={this.state.password} onChange={this.handleChange} autoComplete="off" type="password" name="password" className="form-control" id="exampleInputPassword1"/>
            </div>
            <button type="submit" onClick={this.onSubmit} className="btn btn-primary mb-1">Login</button>
            <br/>
            <small>
              Don't have an account? Sign up <Link to="/signup">here</Link>.
            </small>
        </form>
      </div>
    );
  }
}

export default Login;