import React, { Component } from 'react';
import axios from 'axios';

class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
            products: null,
            checkProductBeenAdded: []
        };
    }

    componentDidMount = async () => {
        try {
            const response = await axios.get("https://5d6da1df777f670014036125.mockapi.io/api/v1/product");
            this.setState({products: response.data})

            let cart = JSON.parse(localStorage.getItem("cart")) || {};
            this.setState({checkProductBeenAdded: Object.keys(cart)});
        } catch (error) {
            console.log(error)
        }
    }

    // return a fuction that have the event signature
    addProduct = product => {
        let cart = JSON.parse(localStorage.getItem("cart")) || {}
        const productAdd = {
            ...product,
            quantity: 1
        }
        cart[product.id] = productAdd;
        localStorage.setItem("cart", JSON.stringify(cart));
        let checkProductBeenAdded = this.state.checkProductBeenAdded;
        checkProductBeenAdded.push(productAdd.id);
        this.setState({checkProductBeenAdded});
    }

    isProductAddedToCart = product => {
        //console.log(this.state.checkProductBeenAdded);
        const find = this.state.checkProductBeenAdded.find(element => element === product.id);
        if (find) {
            return true;
        }

        return false;
    }

    productDiv = product => {
        return (
            <div key={product.id} className="flex-fill m-5 text-center">
                <h5 className="font-weight-bold text-center">{product.name}</h5>
                <img className="m-auto" src={product.image} alt={product.name} width="250px"/>                
                <h6 className="mt-3 text-danger">U$ {product.price}</h6>

                { this.isProductAddedToCart(product) ? 
                    <button type="button" className="btn btn-success">Added to cart ✓</button> :
                    <button type="button" className="btn btn-warning" onClick={() => this.addProduct(product)}>Add to cart</button>
                }
            </div>
        )
    }

    render() {

        const products = this.state.products || [];
        return (
            <div>
                <div className="d-flex justify-content-around flex-wrap">
                    {products && products.map(this.productDiv)}
                </div>
            </div>
        );

        
    }
        
}

export default Home;
