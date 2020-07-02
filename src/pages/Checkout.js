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
                <h5 className="font-weight-bold m-3">Checkout</h5>
                <hr/>
                <form>
                    <label class="font-weight-bold ml-3 mb-3">Shipping Address</label>
                    <div class="form-group row col-md-6">
                        <label for="inputFullName" class="col-sm-2 col-form-label">Fulname</label>
                        <div class="col-sm-10">
                            <input type="text" class="form-control" id="inputFullName"/>
                        </div>
                    </div>
                    <div class="form-group row col-md-6">
                        <label for="inputAddress" class="col-sm-2 col-form-label">Address</label>
                        <div class="col-sm-10">
                        <input type="text" class="form-control" id="inputAddress"/>
                        </div>
                    </div>
                </form>


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