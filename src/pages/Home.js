import React, { Component } from 'react';
import axios from 'axios';
//import { Link } from 'react-router-dom';

class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
          products: null
        };
      }

    componentDidMount = async () => {
        try {
            const response = await axios.get("https://5d6da1df777f670014036125.mockapi.io/api/v1/product");
            this.setState({products: response.data})
        } catch (error) {
            console.log(error)
        }
    }

    // return a fuction that have the event signature
    addProduct = product => event => {
        let cart = JSON.parse(localStorage.getItem("cart")) || []
        cart.push(product);
        console.log(product);
        localStorage.setItem("cart", JSON.stringify(cart));
    }

    productDiv = product => {
        return (
            <div key={product.id} className="flex-fill m-5 text-center">
                <h5 className="font-weight-bold text-center">{product.name}</h5>
                
                <img className="m-auto" src={product.image} alt={product.name} width="200"/>
                
                <h6 className="mt-3 text-danger">U$ {product.price}</h6>
                
                <button type="button" className="btn btn-warning " onClick={this.addProduct(product)}>Add to cart</button>                 
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
