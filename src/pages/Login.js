import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { toggleLogin } from '../actions'
import { connect } from 'react-redux'

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
    console.log('submit')
    event.preventDefault();
    if (this.state.email === 'teste@teste.com' &&  this.state.password === '123123') {
      this.props.login();
      if(document.referrer === 'http://localhost:3000/checkout')
        window.location.href = '/checkout';
      else
        window.location.href = '/home';
    } else {
      console.log('continuo em login');
    }
  }

  render() {
    return (
      <div className="container marginLogin">
        <form className="container-form">
            <div className="form-group">
                <label htmlFor="inputEmail">Email</label>
                <input value={this.state.email} onChange={this.handleChange} autoComplete="off" type="email" name="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
            </div>
            <div className="form-group">
                <label htmlFor="inputPassword">Password</label>
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

const mapDispatchToProps = dispatch => ({
  login: () => dispatch(toggleLogin())
})

export default connect(null, mapDispatchToProps)(Login);
