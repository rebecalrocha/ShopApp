import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { cpfMask } from '../components/MaskCPF'
import { getErrors } from '../utils/formValidate'
import { sendMessage } from '../actions'
import { connect } from 'react-redux'

class Signup extends Component {
  constructor (props) {
    super(props)
    this.state = {
      name: '',
      dateOfBirth: '',
      cpf: '',
      email: '',
      password: '',
      passwordConfirmation: '',
      message: {},
      errors: {},
      samePassword: true
    }
  }

  getCurrentState = () => ({
    name: this.state.name,
    dateOfBirth: this.state.dateOfBirth,
    cpf: this.state.cpf,
    email: this.state.email,
    password: this.state.password,
    passwordConfirmation: this.state.passwordConfirmation
  })

  getChangedState = event => {
    const name = event.target.name
    if (this.state.errors[name]) {
      const { [name]: value, ...errors } = this.state.errors
      this.setState({ errors })
    } else {
      if (!event.target.value || event.target.value === '') {
        this.setState({ errors: { ...this.state.errors, [name]: 'Required' } })
      }
    }
  }

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value })
    this.getChangedState(event)
  }

  handleDocument = event => {
    this.setState({ cpf: cpfMask(event.target.value) })
    this.getChangedState(event)
  }

  removeMessage = () => {
    this.setState({ message: {} })
  }

  handleOnSubmit = async event => {
    event.preventDefault()

    const account = await this.getCurrentState()
    const errors = await getErrors(account)
    await this.setState({ errors })

    if (this.state.password !== this.state.passwordConfirmation) {
      await this.setState({ message: { text: 'Your password and confirmation password do not match.', type: 'danger' } })
      this.props.sendMessage(this.state.message)
      await this.setState({ samePassword: false })
    } else {
      await this.setState({ samePassword: true })
    }

    if (Object.keys(this.state.errors).length === 0 && this.state.samePassword) {
      await this.setState({ message: { text: 'User successfully registered!', type: 'success' } })
      window.location.href = '/login'
      this.props.sendMessage(this.state.message)
    }
  }

  render () {
    return (
      <div className=''>
        <div className='container mt-5'>
          <form className='container-form'>
            <div className='form-group'>
              <label htmlFor='inputName'>Name</label>
              <input value={this.state.name} onChange={this.handleChange} autoComplete='off' type='name' name='name' className={this.state.errors.name ? 'is-invalid form-control' : 'form-control'} id='inputName1' aria-describedby='nameHelp' />
              {this.state.errors.name
                ? <div className='invalid-feedback'> {this.state.errors.name} </div> : null}
            </div>

            <div className='form-group'>
              <label htmlFor='inputDateOfBirth'>Date Of Birth</label>
              <input value={this.state.dateOfBirth} onChange={this.handleChange} autoComplete='off' type='date' name='dateOfBirth' className={this.state.errors.dateOfBirth ? 'is-invalid form-control' : 'form-control'} id='inputDateOfBirth' aria-describedby='dateOfBirthHelp' />
              {this.state.errors.dateOfBirth
                ? <div className='invalid-feedback'> {this.state.errors.dateOfBirth} </div> : null}
            </div>

            <div className='form-group'>
              <label htmlFor='inputCPF'>CPF</label>
              <input value={this.state.cpf} onChange={this.handleDocument} placeholder='000.000.000-00' autoComplete='off' maxLength='14' type='cpf' name='cpf' className={this.state.errors.cpf ? 'is-invalid form-control' : 'form-control'} id='inputCpf' aria-describedby='cpfHelp' />
              {this.state.errors.cpf
                ? <div className='invalid-feedback'> {this.state.errors.cpf} </div> : null}
            </div>

            <div className='form-group'>
              <label htmlFor='InputEmail'>Email</label>
              <input value={this.state.email} onChange={this.handleChange} autoComplete='off' type='email' name='email' className={this.state.errors.email ? 'is-invalid form-control' : 'form-control'} id='inputEmail1' aria-describedby='emailHelp' />
              {this.state.errors.email
                ? <div className='invalid-feedback'> {this.state.errors.email} </div> : null}
            </div>

            <div className='form-group'>
              <label htmlFor='inputPassword1'>Password</label>
              <input value={this.state.password} onChange={this.handleChange} autoComplete='new-password' type='password' name='password' className={this.state.errors.password ? 'is-invalid form-control' : 'form-control'} id='inputPassword1' />
              {this.state.errors.password
                ? <div className='invalid-feedback'> {this.state.errors.password} </div> : null}
            </div>

            <div className='form-group'>
              <label htmlFor='inputPassword2'>Confirm Password</label>
              <input value={this.state.passwordConfirmation} onChange={this.handleChange} autoComplete='off' type='password' name='passwordConfirmation' className={this.state.errors.passwordConfirmation ? 'is-invalid form-control' : 'form-control'} id='inputPassword2' />
              {this.state.errors.passwordConfirmation
                ? <div className='invalid-feedback'> {this.state.errors.passwordConfirmation} </div> : null}
            </div>

            <button onClick={this.handleOnSubmit} className='btn btn-success mb-1'>Sign Up</button>
            <br />
            <small>
                  Already have an account? Log in <Link to='/login'>here</Link>.
            </small>

          </form>
        </div>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  sendMessage: message => dispatch(sendMessage(message))
})

export default connect(null, mapDispatchToProps)(Signup)
