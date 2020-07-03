import React, { Component } from 'react'
import { connect } from 'react-redux'


class OrderContainer extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            totalPrice: 0,
            cupon:'',
            usedCupon: false
        }
    };
    componentDidMount = () => {
        this.totalPrice();
    }
    
    totalPrice = () => {
        const products = this.props.products || [];
        let totalPrice = 0;
        products.map(product => 
            totalPrice += product.quantity * product.price
        );
        this.setState({totalPrice})
    }

    handleChange = event => {
        this.setState({ [event.target.name]: event.target.value });
    }

    onSubmit = event => {
        event.preventDefault();
        if (this.state.cupon === 'LIVEN10') {
            this.setState({usedCupon: true})
          let newTotal = this.state.totalPrice * 0.9
          this.setState({totalPrice: newTotal})

        } else {
          //cupon invalido
        }
    }

    render() {



        return (
            <div className="text col-md-4 order-md-2 mb-4">
                <br/>
                <h6 className="d-flex justify-content-between align-items-center mb-3">
                    <span className="text-muted font-weight-bold">Order Summary</span>
                </h6> 
                <ul className="list-group mb-3">
                    <li className="list-group-item d-flex justify-content-between lh-condensed">
                        <h6 className="my-0">Items</h6>
                        <span className="text-muted"> {this.props.products.length} </span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between lh-condensed">
                        <h6 className="my-0">Shipping</h6>
                        <span className="text-muted">$0</span>
                    </li>
                    { this.state.usedCupon ? 
                        <li className="list-group-item d-flex justify-content-between bg-light">
                            <div className="text-success">
                                <h6 className="my-0">Promo code</h6>
                                <small>LIVEN10</small>
                            </div>
                            <span className="text-success">-10%</span> 
                        </li>: null
                    }
                    
                    <li className="list-group-item d-flex justify-content-between">
                        <span>Order total (USD)</span>
                        <strong>{this.state.totalPrice.toFixed(2)}</strong>
                    </li>
                </ul>
                <div className="card p-2">
                    <div className="input-group">
                        <input type="text" value={this.state.cupon} onChange={this.handleChange} autoComplete="off" id="cupon" name="cupon" className="form-control" placeholder="Promo code"/>
                        <div className="input-group-append">
                            <button type="submit" onClick={this.onSubmit} className="btn btn-secondary" disabled={this.state.usedCupon} >Redeem</button>
                        </div>
                    </div>
                </div>
            </div>
          )        
    }
}


const mapStateToProps = state => ({
  products: state.productsReducer
})

export default connect(mapStateToProps)(OrderContainer)