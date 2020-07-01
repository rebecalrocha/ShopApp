import React, { Component } from 'react';

class ShoppingCart extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            cartProducts: null,
            totalPrice: 0
        }
    };

    hancleClickMoreProduct = product => {
        let p = this.state.cartProducts[product.id];
        p.quantity += 1;

        this.setState({
            cartProducts: {
                ...this.state.cartProducts,
                [product.id]: p
            }
        });
        localStorage.setItem("cart", JSON.stringify(this.state.cartProducts));

        this.totalPriceProducts();
    }

    hancleClickLessProduct = product => {
        let p = this.state.cartProducts[product.id];
        if(p.quantity > 1) {
            p.quantity -= 1;

            this.setState({
                cartProducts: {
                    ...this.state.cartProducts,
                    [product.id]: p
                }
            });
            localStorage.setItem("cart", JSON.stringify(this.state.cartProducts));

            this.totalPriceProducts();
        }

    }


    hancleClickDeleteProduct = product => {
        let cart = JSON.parse(localStorage.getItem("cart")) || {}
        delete cart[product.id]
        localStorage.setItem("cart", JSON.stringify(cart));
        let products = this.state.cartProducts;
        delete products[product.id]
        this.setState({cartProducts: products});

        this.totalPriceProducts();
    }

    async componentDidMount() {
        await this.getProducts();
        await this.totalPriceProducts();
    }

    getProducts = () => {
        let cart = JSON.parse(localStorage.getItem("cart")) || {}
        this.setState({ cartProducts: cart });
    }

    totalPriceProducts = () => {
        let totalPrice = 0;
        Object.values(this.state.cartProducts).map(product => totalPrice += product.quantity * product.price);
        this.setState({ totalPrice });
    }

    productDiv = product => {
        return (
            <div key={product.id} className="d-flex flex-row ml-3 mb-3" style={{alignItems: "center"}}>    
                <div>
                    <img className="m-auto" src={product.image} alt={product.name} width="200"/>
                </div>
                <div className="ml-3">
                    <h6 className="font-weight-bold">{product.name}</h6>
                    <h6 className="my-3 text-danger">U$ {product.price}</h6>
                    <div>
                        <button type="button" className="btn btn-outline-secondary" onClick={() => this.hancleClickLessProduct(product)}> - </button>   
                        <span className="mx-2">{product.quantity}</span>
                        <button type="button" className="btn btn-outline-secondary" onClick={() => this.hancleClickMoreProduct(product)}> + </button>  
                        <button type="button" className="btn btn-outline-secondary ml-3" onClick={() => this.hancleClickDeleteProduct(product)}> Delete </button>
                    </div>
                    
                </div>   
            </div>
        )
    }

    render() {
        const cartProducts = this.state.cartProducts || {};
        const totalPrice = this.state.totalPrice || [];

        if(Object.keys(cartProducts).length === 0) {
            return (
                <div className="" style={{height: "200px", alignItems: "center", display: "flex", justifyContent: "center"}}>
                    <h5 className="font-weight-bold m-3">Your shopping cart is empty</h5>
                </div>
            );
        } else {
            return (
                <div className="" style={{alignItems: "center"}}>
                    <h5 className="font-weight-bold m-3" style={{alignItems: "center"}}>Shopping Cart</h5>
                    <hr/>
                    {cartProducts && Object.values(cartProducts).map(this.productDiv)}

                    <div className="d-flex bg-light rounded justify-content-around m-3">
                        <h5 className="m-3 ">Total: {totalPrice}</h5>
                        <div>
                        <button type="button" className="btn btn-warning my-2">Proceed to checkout</button>
                        </div>
                        
                    </div>
                </div>
            );
        }

    }
}

export default ShoppingCart;