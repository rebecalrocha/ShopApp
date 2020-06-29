import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Redirect } from "react-router-dom";
//import Home from './Home';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      redirect: false
    };
  }

  handleChange = (e) => {
    //console.log('handle change e: ', e.target);
    this.setState({ [e.target.name]: e.target.value });
  }

  login = (e) => {
    //console.log('log in event: ', e);
    e.preventDefault();
    if(this.state.email === 'teste@teste.com' &&  this.state.password === '123123') {
      console.log('vou para home');
      this.setState({redirect: true})
      //setar user no localStorage
      const user = { uid: "01", email: "teste@teste.com" }
      localStorage.setItem('currentUser', JSON.stringify(user));
    } else {
      console.log('continuo em login');
      // return <Redirect to="/login" />
    }
  }

  render() {
    const { redirect } = this.state;

    if (redirect) {
      return <Redirect to='/home'/>;
    }


    return (
      <div className="container">
        <form className="container-form">
            <div className="form-group">
                <label htmlFor="exampleInputEmail1">Email</label>
                <input value={this.state.email} onChange={this.handleChange} autoComplete="off" type="email" name="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
            </div>
            <div className="form-group">
                <label htmlFor="exampleInputPassword1">Password</label>
                <input value={this.state.password} onChange={this.handleChange} autoComplete="off" type="password" name="password" className="form-control" id="exampleInputPassword1" placeholder="Enter password" />
            </div>
            <button type="submit" onClick={this.login} className="btn btn-primary mb-1">Login</button>
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