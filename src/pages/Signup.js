import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { cpfMask } from '../components/MaskCPF'

class Signup extends Component {
  constructor(props) {
      super(props);
      this.state = { 
        name: '',
        dateOfBirth: '',
        cpf: '',
        email: '',
        password: '',
        passwordConfirmation: ''
      };
    }
  
  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleDocument = event => {
    this.setState({ cpf: cpfMask(event.target.value) })
  }
    
  verifyPassword = async event => {
    await this.handleChange(event);

      if (this.state.password_confirmation.length >= this.state.password.length) {
        if (this.state.password !== this.state.password_confirmation) {
            return false
        } else {
            return true
        }
    }
  }

  onSubmit = event => {
    event.preventDefault();
    if (this.verifyPassword){
      //do something
    }

  }

  render() {
      return (
          <div className="container marginSignup">
          <form className="container-form">
              <div className="form-group">
                  <label htmlFor="inputName">Name</label>
                  <input value={this.state.name} onChange={this.handleChange} autoComplete="off" type="name" name="name" className="form-control" id="inputName1" aria-describedby="nameHelp"/>
              </div>
              <div className="form-group">
                  <label htmlFor="inputDateOfBirth">Date Of Birth</label>
                  <input value={this.state.dateOfBirth} onChange={this.handleChange} autoComplete="off" type="date" name="dateOfBirth" className="form-control" id="inputDateOfBirth" aria-describedby="dateOfBirthHelp" />
              </div>
              <div className="form-group">
                  <label htmlFor="inputCPF">CPF</label>
                  <input value={this.state.cpf} onChange={this.handleDocument} autoComplete="off" maxLength='14' type="cpf" name="cpf" className="form-control" id="inputCpf" aria-describedby="cpfHelp"/>
              </div>
              <div className="form-group">
                  <label htmlFor="InputEmail">Email</label>
                  <input value={this.state.email} onChange={this.handleChange} autoComplete="off" type="email" name="email" className="form-control" id="inputEmail1" aria-describedby="emailHelp"/>
              </div>
              <div className="form-group">
                  <label htmlFor="inputPassword1">Password</label>
                  <input value={this.state.password} onChange={this.handleChange} autoComplete="off" type="password" name="password" className="form-control" id="inputPassword1"/>
              </div>
              <div className="form-group">
                  <label htmlFor="inputPassword2">Confirm Password</label>
                  <input value={this.state.password_confirmation} onChange={this.verifyPassword} autoComplete="off" type="password" name="password_confirmation" className="form-control" id="inputPassword2"/>
              </div>

              <button onClick={this.onSubmit} className="btn btn-success mb-1">Sign Up</button>
              <br/>
              <small>
                  Already have an account? Log in <Link to="/login">here</Link>.
              </small>

          </form>
        </div>
      );
    }
}
export default Signup;