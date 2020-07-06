import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { toggleLogin } from '../actions'
import { connect } from 'react-redux'
import { getErrors } from '../utils/formValidate'

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      message: {},
      errors: {}
    };
  }

  getCurrentState = () => ({
    email: this.state.email,
    password: this.state.password
  });

  getChangedState = event => {
    let name = event.target.name
    if(this.state.errors[name]){
        const {[name]: value, ...errors} = this.state.errors;
        this.setState({errors})

    } else {
        if (!event.target.value || event.target.value === "") {
            this.setState({errors: {...this.state.errors, [name]: 'Required'}})
        }
    }
  }

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
    this.getChangedState(event);
  }

  onSubmit = async event => {
    event.preventDefault();

    const account = await this.getCurrentState();
    const errors = await getErrors(account)
    await this.setState({errors})

    if (this.state.email === 'teste@teste.com' &&  this.state.password === '123123') 
        this.props.login();
    else if (Object.keys(this.state.errors).length === 0) 
      this.setState({message: {...this.state.message, message: "Something went wrong, please try again..."}})

  }

  removeMessage = () => {
    this.setState({message: {}})
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
        <div className="container marginLogin">
        <form className="container-form">
            <div className="form-group">
                <label htmlFor="inputEmail">Email</label>
                <input value={this.state.email} onChange={this.handleChange} autoComplete="off" type="email" name="email" className={this.state.errors.email ? "is-invalid form-control" :"form-control"} id="exampleInputEmail1" aria-describedby="emailHelp"/>
                { this.state.errors.email ?
                  <div className="invalid-feedback"> {this.state.errors.email} </div> : null
                }
            </div>
            <div className="form-group">
                <label htmlFor="inputPassword">Password</label>
                <input value={this.state.password} onChange={this.handleChange} autoComplete="off" type="password" name="password" className={this.state.errors.password ? "is-invalid form-control" :"form-control"} id="exampleInputPassword1"/>
                { this.state.errors.password ?
                  <div className="invalid-feedback"> {this.state.errors.password} </div> : null
                }
            </div>
            <button type="submit" onClick={this.onSubmit} className="btn btn-primary mb-1">Log In</button>
            <br/>
            <small>
              Don't have an account? Sign up <Link to="/signup">here</Link>.
            </small>
        </form>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  login: () => dispatch(toggleLogin())
})

export default connect(null, mapDispatchToProps)(Login);
