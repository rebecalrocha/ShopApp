import React, { Component } from 'react';
import OrderContainer from '../container/Order Container';
import { cardMask } from '../components/MaskCard';
import { dateMask } from '../components/MaskDate';
import { secMask } from '../components/MaskSecCode';
import { deleteCart } from '../actions';
import { connect } from 'react-redux';

class Checkout extends Component {
    constructor(props){
        super(props);

        this.state = {
            cardName: "",
            cardNumber: "",
            cardDate: "",
            secCode: "",
            firstName: "",
            lastName: "",
            address: "",
            city: "",
            state: "",
            zip: "",
            errors: {},
        }
    }

    options = ["AC: Acre","AL: Alagoas","AM: Amazonas","AP: Amapá","BA: Bahia","CE: Ceará","DF: Distrito Federal",
    "ES: Espírito Santo","GO: Goiás","MA: Maranhão","MG: Minas Gerais","MS: Mato Grosso do Sul","MT: Mato Grosso",
    "PA: Pará","PB: Paraíba","PE: Pernambuco","PI: Piauí","PR: Paraná","RJ: Rio de Janeiro","RN: Rio Grande do Norte",
    "RO: Rondônia","RR: Roraima","RS: Rio Grande do Sul","SC: Santa Catarina","SE: Sergipe","SP: São Paulo","TO: Tocantins"]

    handleCardNumber = event => {
        this.setState({ cardNumber: cardMask(event.target.value) })
    }

    handleDate = event => {
        this.setState({ cardDate: dateMask(event.target.value) })
    } 

    handleSecCode = event => {
        this.setState({ secCode: secMask(event.target.value) })
    }

    handleChange = event => {
        this.setState({ [event.target.name]: event.target.value });
    }

    onSubmit = async event => {
        console.log('submit')
        event.preventDefault();
        this.setState({errors: {}})

        if(this.state.firstName === "") 
            await this.setState({errors: {...this.state.errors, firstName: "First name is required"}})

        if(this.state.lastName === "") 
            await this.setState({errors: {...this.state.errors, lastName: "Last name is required"}})

        if(this.state.address === "") 
            await this.setState({errors: {...this.state.errors, address: "Address is required"}})

        if(this.state.city === "") 
            await this.setState({errors: {...this.state.errors, city: "City is required"}})

        if(this.state.state === "") 
            await this.setState({errors: {...this.state.errors, state: "State is required"}})

        if(this.state.zip === "") 
            await this.setState({errors: {...this.state.errors, zip: "Zip is required"}})

        //
        if(this.state.cardName === "") 
            await this.setState({errors: {...this.state.errors, cardName: "Card name is required"}})

        if(this.state.cardNumber === "") 
            await this.setState({errors: {...this.state.errors, cardNumber: "Card number is required"}})

        if(this.state.cardDate === "") 
            await this.setState({errors: {...this.state.errors, cardDate: "Card date is required"}})

        if(this.state.secCode === "") 
            await this.setState({errors: {...this.state.errors, secCode: "Security code is required"}})

        if(Object.keys(this.state.errors).length === 0) {
            this.props.deleteCart();
            window.location.href = '/home';
        }

      }    

    render() {
        const displayOp = option => (
        <option key={option}>{option}</option>
        )

        return (
            <div style={{width: "90%"}} className="container">      
                <div className="row sidebar mr-1">
                    <OrderContainer/>
                    
                    <div className="col-md-8 order-md-1">
                        
                        <form>
                        <div className="m-3">
                            <label className="font-weight-bold mb-3">Shipping Address</label>
                            <div className="form-row">
                                <div className="form-group col-md-6">
                                    <label htmlFor="inputFName">First name</label>
                                    <input type="text" value={this.state.firstName} name="firstName" onChange={this.handleChange} className="form-control" id="inputFName"/>
                                    { this.state.errors.firstName ?
                                        <span style={{color: "red"}}>
                                            {this.state.errors.firstName}
                                        </span> : null
                                    }
                                </div>
                                <div className="form-group col-md-6">
                                    <label htmlFor="inputLName">Last name</label>
                                    <input type="text" value={this.state.lastName} name="lastName" onChange={this.handleChange} className="form-control" id="inputLName" />
                                    { this.state.errors.lastName ?
                                        <span style={{color: "red"}}>
                                            {this.state.errors.lastName}
                                        </span> : null
                                    }
                                </div>
                            </div>
                            <div className="form-group">
                                <label htmlFor="inputAddress">Address</label>
                                <input type="text" value={this.state.address} name="address" onChange={this.handleChange} className="form-control" id="inputAddress" />
                                { this.state.errors.address ?
                                        <span style={{color: "red"}}>
                                            {this.state.errors.address}
                                        </span> : null
                                }
                            </div>
                            <div className="form-row">
                                <div className="form-group col-md-6">
                                    <label htmlFor="inputCity">City</label>
                                    <input type="text" value={this.state.city} name="city" onChange={this.handleChange} className="form-control" id="inputCity"/>
                                    { this.state.errors.city ?
                                        <span style={{color: "red"}}>
                                            {this.state.errors.city}
                                        </span> : null
                                    }
                                </div>
                                <div className="form-group col-md-4">
                                    <label htmlFor="inputState">State</label>
                                    <select id="inputState" value={this.state.state} name="state" onChange={this.handleChange} className="custom-select d-block w-100">
                                        <option value>Choose...</option>
                                        {this.options && this.options.map(op => displayOp(op))}
                                    </select>
                                    { this.state.errors.state ?
                                        <span style={{color: "red"}}>
                                            {this.state.errors.state}
                                        </span> : null
                                    }
                                </div>
                                <div className="form-group col-md-2">
                                    <label htmlFor="inputZip">Zip</label>
                                    <input type="text" value={this.state.zip} name="zip" onChange={this.handleChange} className="form-control" id="inputZip"/>
                                    { this.state.errors.zip ?
                                        <span style={{color: "red"}}>
                                            {this.state.errors.zip}
                                        </span> : null
                                    }
                                </div>
                            </div>
                        </div>
                        <hr className="mb-4 mx-3"/>
                        <label className="font-weight-bold mx-3 mb-3">Payment Method</label>
                        <div className="d-block mx-3">
                        <div className="custom-control custom-radio">
                            <input id="credit" name="paymentMethod" type="radio" readOnly className="custom-control-input" checked required/>
                            <label className="custom-control-label" htmlFor="credit">Credit card</label>
                        </div>
                        <div className="custom-control custom-radio">
                            <input id="debit" name="paymentMethod" type="radio" className="custom-control-input" required/>
                            <label className="custom-control-label" htmlFor="debit">Debit card</label>
                        </div>
                        </div>

                        <div className="m-3">
                            <div className="form-group">
                                <label htmlFor="inputNameCard">Name on card</label>
                                <input type="text" className="form-control" id="inputNameCard" onChange={this.handleChange} name="cardName" />
                                { this.state.errors.cardName ?
                                        <span style={{color: "red"}}>
                                            {this.state.errors.cardName}
                                        </span> : null
                                }
                            </div> 
                            <div className="form-group">
                                <label htmlFor="inputCard">Card number</label>
                                <input value={this.state.cardNumber} name="cardNumber" onChange={this.handleCardNumber} type="text" className="form-control" id="inputCard" placeholder="0000-0000-0000-0000"/>
                                { this.state.errors.cardNumber ?
                                        <span style={{color: "red"}}>
                                            {this.state.errors.cardNumber}
                                        </span> : null
                                }
                            </div>
                            <div className="form-row">
                                <div className="form-group col-md-6">
                                    <label htmlFor="inputExpirationDate">Expiration date</label>
                                    <input type="text" value={this.state.cardDate} onChange={this.handleDate} className="form-control" id="inputExpirationDate" placeholder="MM/YY"/>
                                    { this.state.errors.cardDate ?
                                        <span style={{color: "red"}}>
                                            {this.state.errors.cardDate}
                                        </span> : null
                                    }
                                </div>
                                <div className="form-group col-md-6">
                                    <label htmlFor="inputSecCode">Security code</label>
                                    <input type="password" value={this.state.secCode} onChange={this.handleSecCode} className="form-control" id="inputSecCode" placeholder="&#9679;&#9679;&#9679;"/>
                                    { this.state.errors.secCode ?
                                        <span style={{color: "red"}}>
                                            {this.state.errors.secCode}
                                        </span> : null
                                    }
                                </div>
                            </div>
                        </div>
                        </form>
                        <hr className="mb-4 mx-3"/>
                        <button style={{width: "96%"}} onClick={this.onSubmit} className=" mx-3 btn btn-primary btn-lg btn-block" type="submit">Place your order</button>
                    </div>
                    
                </div>

            </div>
        );
    }



}
const mapDispatchToProps = dispatch => ({
    deleteCart: () => dispatch(deleteCart())
  })

export default connect(null, mapDispatchToProps)(Checkout);