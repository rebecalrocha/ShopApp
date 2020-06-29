import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { cpfMask } from './components/mask'

class Signup extends Component {
    constructor(props) {
        super(props);
        this.state = { //nome, email, senha, data de nascimento e cpf
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

      signup = event => {
        console.log('sign up e: ', event);
        event.preventDefault();
        if (this.verifyPassword){
            //
        }

      }

    render() {
        return (
            <div className="container">
            <form className="container-form">
                <div className="form-group">
                    <label htmlFor="inputName">Name</label>
                    <input value={this.state.name} onChange={this.handleChange} autoComplete="off" type="name" name="name" className="form-control" id="inputName1" aria-describedby="nameHelp" placeholder="Enter name" />
                </div>
                <div className="form-group">
                    <label htmlFor="inputDateOfBirth">Date Of Birth</label>
                    <input value={this.state.dateOfBirth} onChange={this.handleChange} autoComplete="off" type="date" name="dateOfBirth" className="form-control" id="inputDateOfBirth" aria-describedby="dateOfBirthHelp" />
                </div>
                <div className="form-group">
                    <label htmlFor="inputCPF">CPF</label>
                    <input value={this.state.cpf} onChange={this.handleDocument} autoComplete="off" maxLength='14' type="cpf" name="cpf" className="form-control" id="inputCpf" aria-describedby="cpfHelp" placeholder="Enter CPF" />
                </div>
                <div className="form-group">
                    <label htmlFor="InputEmail">Email</label>
                    <input value={this.state.email} onChange={this.handleChange} autoComplete="off" type="email" name="email" className="form-control" id="inputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                </div>
                <div className="form-group">
                    <label htmlFor="inputPassword1">Password</label>
                    <input value={this.state.password} onChange={this.handleChange} autoComplete="off" type="password" name="password" className="form-control" id="inputPassword1" placeholder="Enter password" />
                </div>
                <div className="form-group">
                    <label htmlFor="inputPassword2">Confirm Password</label>
                    <input value={this.state.password_confirmation} onChange={this.verifyPassword} autoComplete="off" type="password" name="password_confirmation" className="form-control" id="inputPassword2" placeholder="Confirm password" />
                </div>

                <button onClick={this.signup} className="btn btn-success mb-1">Sign Up</button>
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