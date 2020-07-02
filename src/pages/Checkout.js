import React, { Component } from 'react';

class Checkout extends Component {
    constructor(props){
        super(props);

        this.state = {

        }
    }

    render() {
        return (
            <div>
                <h1>Hi friends! It's me, Rebs!</h1>

                <div>
                    Shipping address
                    <br/>
                    Full name:
                    Address:
                    City:
                    State:
                    ZIP:
                    Country:
                </div>

                <div>
                    Add a credit or debit card
                    <br/>
                    Card number:
                    Name on card:
                    Expiration date

                    or

                    Card ending in 0000 Rebeca Lima Rocha 06/2023

                </div>

                <div>
                    Order Summary
                    <br/>
                    Items: $
                    Shipping: $
                    Order Total: $
                </div>

                <button>Place your order</button>
            </div>
        );
    }



}

export default Checkout;