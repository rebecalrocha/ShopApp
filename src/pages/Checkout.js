import React, { Component } from 'react'
import OrderContainer from '../container/Order Container'
import { cardMask } from '../components/MaskCard'
import { dateMask } from '../components/MaskDate'
import { secMask } from '../components/MaskSecCode'
import { deleteCart } from '../actions'
import { connect } from 'react-redux'
import { getErrors } from '../utils/formValidate'
import countryStates from '../utils/states_titlecase.json'
import { sendMessage } from '../actions'

class Checkout extends Component {
    constructor(props){
        super(props)

        this.state = {
            cardName: "",
            cardNumber: "",
            cardDate: "",
            secCode: "",
            firstName: "",
            lastName: "",
            address: "",
            city: "",
            countryState: "",
            zip: "",
            paymentMethod: "",
            message: {},
            errors: {},
        }
    }

    getCurrentState = () => ({
        cardName: this.state.cardName,
        cardNumber: this.state.cardNumber,
        cardDate: this.state.cardDate,
        secCode: this.state.secCode,
        firstName: this.state.firstName,
        lastName: this.state.lastName,
        address: this.state.address,
        city: this.state.city,
        countryState: this.state.countryState,
        zip: this.state.zip,
        paymentMethod: this.state.paymentMethod
    })

    getChangedState = event => {
        let name = event.target.name
        if(this.state.errors[name]){
            const {[name]: value, ...errors} = this.state.errors
            this.setState({errors})

        } else {
            if (!event.target.value || event.target.value === "") {
                this.setState({errors: {...this.state.errors, [name]: 'Required'}})
            }
        }
    }

    handleChangeMask = event => {
        if(event.target.name === 'cardNumber')
            this.setState({ cardNumber: cardMask(event.target.value) })
        if(event.target.name === 'cardDate')
            this.setState({ cardDate: dateMask(event.target.value) })
        if(event.target.name === 'secCode')
            this.setState({ secCode: secMask(event.target.value) })
        this.getChangedState(event)
    }

    handleChange = event => {
        this.setState({ [event.target.name]: event.target.value })
        this.getChangedState(event)     
    }

    onSubmit = async event => {
        event.preventDefault()

        const account = await this.getCurrentState()
        const errors = await getErrors(account)
        await this.setState({errors})

        if(Object.keys(this.state.errors).length === 0) {
            this.props.deleteCart()
            this.setState({message:  {text: "Thank you for placing an order!", type: "success"}})
            window.location.href = '/home'
            this.props.sendMessage(this.state.message)
        }
      }    

    render() {
        const displayOp = option => (
        <option key={option.abbreviation}>{option.abbreviation}: {option.name}</option>
        
        )

        return (
            <div className="container mt-4">      
                <div className="row sidebar mr-1">
                    <OrderContainer/>
                    <div className="col-md-8 order-md-1 ">
                        <form>
                        <div className="m-3">
                            <label className="font-weight-bold mb-3">Shipping Address</label>
                            <div className="form-row">
                                <div className="form-group col-md-6">
                                    <label htmlFor="inputFName">First name</label>
                                    <input type="text" value={this.state.firstName} name="firstName" onChange={this.handleChange} className={this.state.errors.firstName ? "is-invalid form-control" :"form-control"} id="inputFName"/>
                                    { this.state.errors.firstName ?
                                        <div className="invalid-feedback"> {this.state.errors.firstName} </div> : null
                                    }
                                </div>
                                <div className="form-group col-md-6">
                                    <label htmlFor="inputLName">Last name</label>
                                    <input type="text" value={this.state.lastName} name="lastName" onChange={this.handleChange} className={this.state.errors.lastName ? "is-invalid form-control" :"form-control"} id="inputLName" />
                                    { this.state.errors.lastName ?
                                        <div className="invalid-feedback"> {this.state.errors.lastName} </div> : null
                                    }
                                </div>
                            </div>
                            <div className="form-group">
                                <label htmlFor="inputAddress">Address</label>
                                <input type="text" value={this.state.address} name="address" onChange={this.handleChange} className={this.state.errors.address ? "is-invalid form-control" :"form-control"} id="inputAddress" />
                                { this.state.errors.address ?
                                    <div className="invalid-feedback"> {this.state.errors.address} </div> : null
                                }
                            </div>
                            <div className="form-row">
                                <div className="form-group col-md-6">
                                    <label htmlFor="inputCity">City</label>
                                    <input type="text" value={this.state.city} name="city" onChange={this.handleChange} className={this.state.errors.city ? "is-invalid form-control" :"form-control"} id="inputCity"/>
                                    { this.state.errors.city ?
                                        <div className="invalid-feedback"> {this.state.errors.city} </div> : null
                                    }
                                </div>
                                <div className="form-group col-md-4">
                                    <label htmlFor="inputState">State</label>
                                    <select value={this.state.countryState} name="countryState" onChange={this.handleChange} className={this.state.errors.countryState ? "is-invalid custom-select d-block w-100" :"custom-select d-block w-100"} id="inputState">
                                        <option value="">Choose...</option>
                                        {countryStates && countryStates.map(option => displayOp(option))}
                                    </select>
                                    { this.state.errors.countryState ?
                                        <div className="invalid-feedback"> {this.state.errors.countryState} </div> : null
                                    }
                                </div>
                                <div className="form-group col-md-2">
                                    <label htmlFor="inputZip">Zip</label>
                                    <input type="text" value={this.state.zip} name="zip" onChange={this.handleChange} className={this.state.errors.zip ? "is-invalid form-control" :"form-control"} id="inputZip"/>
                                    { this.state.errors.zip ?
                                        <div className="invalid-feedback"> {this.state.errors.zip} </div> : null
                                    }
                                </div>
                            </div>
                        </div>
                        <hr className="mb-4 mx-3"/>
                        <label className="font-weight-bold mx-3 mb-3">Payment Method</label>
                        <div className="d-block mx-3">
                        <div className="custom-control custom-radio">
                            <input id="credit" name="paymentMethod" value={'credit'} onChange={this.handleChange} type="radio" className={this.state.errors.paymentMethod ? "is-invalid custom-control-input" :"custom-control-input"} required/>
                            <label className="custom-control-label" htmlFor="credit">Credit card</label>
                        </div>
                        <div className="custom-control custom-radio">
                            <input id="debit" name="paymentMethod" value={'debit'} onChange={this.handleChange} type="radio" className={this.state.errors.paymentMethod ? "is-invalid custom-control-input" :"custom-control-input"} required/>
                            <label className="custom-control-label" htmlFor="debit">Debit card</label>
                        </div>
                        </div>

                        <div className="m-3">
                            <div className="form-group">
                                <label htmlFor="inputNameCard">Name on card</label>
                                <input type="text" id="inputNameCard" onChange={this.handleChange} name="cardName"  className={this.state.errors.cardName ? "is-invalid form-control" :"form-control"}/>
                                { this.state.errors.cardName ?
                                    <div className="invalid-feedback"> {this.state.errors.cardName} </div> : null
                                }
                            </div> 
                            <div className="form-group">
                                <label htmlFor="inputCard">Card number</label>
                                <input value={this.state.cardNumber} name="cardNumber" onChange={this.handleChangeMask} type="text" id="inputCard" placeholder="0000-0000-0000-0000" className={this.state.errors.cardNumber ? "is-invalid form-control" :"form-control"}/>
                                { this.state.errors.cardNumber ?
                                    <div className="invalid-feedback"> {this.state.errors.cardNumber} </div> : null
                                }
                            </div>
                            <div className="form-row">
                                <div className="form-group col-md-6">
                                    <label htmlFor="inputExpirationDate">Expiration date</label>
                                    <input type="text" value={this.state.cardDate} name="cardDate" onChange={this.handleChangeMask} id="inputExpirationDate" placeholder="MM/YY" className={this.state.errors.cardDate ? "is-invalid form-control" :"form-control"}/>
                                    { this.state.errors.cardDate ?
                                        <div className="invalid-feedback"> {this.state.errors.cardDate} </div> : null
                                    }
                                </div>
                                <div className="form-group col-md-6">
                                    <label htmlFor="inputSecCode">Security code</label>
                                    <input type="password" value={this.state.secCode} name="secCode" onChange={this.handleChangeMask} id="inputSecCode" placeholder="&#9679;&#9679;&#9679;" className={this.state.errors.secCode ? "is-invalid form-control" :"form-control"}/>
                                    { this.state.errors.secCode ?
                                        <div className="invalid-feedback"> {this.state.errors.secCode} </div> : null
                                    }
                                </div>
                            </div>
                        </div>
                        </form>
                        <hr className="mb-4 mx-3"/>
                        <button style={{width: "96%", marginBottom: "1em"}} onClick={this.onSubmit} type="submit" className=" mx-3 btn btn-primary btn-lg btn-block">Place your order</button>
                    </div>
                    
                </div>

            </div>
        )
    }



}
const mapDispatchToProps = dispatch => ({
    deleteCart: () => dispatch(deleteCart()),
    sendMessage: message => dispatch(sendMessage(message))
  })

export default connect(null, mapDispatchToProps)(Checkout)