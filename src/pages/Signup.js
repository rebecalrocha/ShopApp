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
        passwordConfirmation: '',
        message: {},
        errors: {}
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

      if (this.state.passwordConfirmation.length >= this.state.password.length) {
        if (this.state.password !== this.state.passwordConfirmation) {
            return false
        } else {
            return true
        }
    }
  }

  removeMessage = () => {
    this.setState({message: {}})
  }

  onSubmit = async event => {
    this.setState({errors: ""})

    event.preventDefault();
    if (this.verifyPassword)
      this.setState({message: {...this.state.message, message:"Your password and confirmation password do not match."}})

    if(this.state.name === "") 
      await this.setState({errors: {...this.state.errors, name: "Name is required"}})

    if(this.state.dateOfBirth === "") 
      await this.setState({errors: {...this.state.errors, dateOfBirth: "Date of birth is required"}})

    if(this.state.cpf === "") 
      await this.setState({errors: {...this.state.errors, cpf: "CPF is required"}})

    if(this.state.email === "") 
      await this.setState({errors: {...this.state.errors, email: "Email is required"}})

    if(this.state.password === "") 
      await this.setState({errors: {...this.state.errors, password: "Password is required"}})

    if(this.state.passwordConfirmation === "") 
      await this.setState({errors: {...this.state.errors, passwordConfirmation: "Password confirmation is required"}})

    if(Object.keys(this.state.errors).length === 0) {
        window.location.href = '/login';
    }

  }

  render() {
      return (
        <div className="">
          { this.state.message.message ?
            <div className="alert alert-danger m-3" role="alert">
              {this.state.message.message}
              <button type="button" className="close" data-dismiss="alert" aria-label="Close" onClick={this.removeMessage}>
                <span aria-hidden="true">&times;</span>
              </button>
            </div> : null
          }
          <div classNamw="container marginSignup"> 
            <form className="container-form">
              <div className="form-group">
                  <label htmlFor="inputName">Name</label>
                  <input value={this.state.name} onChange={this.handleChange} autoComplete="off" type="name" name="name" className="form-control" id="inputName1" aria-describedby="nameHelp"/>
                  { this.state.errors.name ?
                    <span style={{color: "red"}}>
                      {this.state.errors.name}
                    </span> : null
                  }
              </div>

              <div className="form-group">
                  <label htmlFor="inputDateOfBirth">Date Of Birth</label>
                  <input value={this.state.dateOfBirth} onChange={this.handleChange} autoComplete="off" type="date" name="dateOfBirth" className="form-control" id="inputDateOfBirth" aria-describedby="dateOfBirthHelp" />
                  { this.state.errors.dateOfBirth ?
                    <span style={{color: "red"}}>
                      {this.state.errors.dateOfBirth}
                    </span> : null
                  }
              </div>

              <div className="form-group">
                  <label htmlFor="inputCPF">CPF</label>
                  <input value={this.state.cpf} onChange={this.handleDocument} autoComplete="off" maxLength='14' type="cpf" name="cpf" className="form-control" id="inputCpf" aria-describedby="cpfHelp"/>
                  { this.state.errors.cpf ?
                    <span style={{color: "red"}}>
                      {this.state.errors.cpf}
                    </span> : null
                  }
              </div>

              <div className="form-group">
                  <label htmlFor="InputEmail">Email</label>
                  <input value={this.state.email} onChange={this.handleChange} autoComplete="off" type="email" name="email" className="form-control" id="inputEmail1" aria-describedby="emailHelp"/>
                  { this.state.errors.email ?
                    <span style={{color: "red"}}>
                      {this.state.errors.email}
                    </span> : null
                  }
              </div>

              <div className="form-group">
                  <label htmlFor="inputPassword1">Password</label>
                  <input value={this.state.password} onChange={this.handleChange} autoComplete="off" type="password" name="password" className="form-control" id="inputPassword1"/>
                  { this.state.errors.password ?
                    <span style={{color: "red"}}>
                      {this.state.errors.password}
                    </span> : null
                  }
              </div>

              <div className="form-group">
                  <label htmlFor="inputPassword2">Confirm Password</label>
                  <input value={this.state.passwordConfirmation} onChange={this.verifyPassword} autoComplete="off" type="password" name="passwordConfirmation" className="form-control" id="inputPassword2"/>
                  { this.state.errors.passwordConfirmation ?
                    <span style={{color: "red"}}>
                      {this.state.errors.passwordConfirmation}
                    </span> : null
                  }
              </div>

              <button onClick={this.onSubmit} className="btn btn-success mb-1">Sign Up</button>
              <br/>
              <small>
                  Already have an account? Log in <Link to="/login">here</Link>.
              </small>

            </form>
          </div>
        </div>
      );
    }
}
export default Signup;