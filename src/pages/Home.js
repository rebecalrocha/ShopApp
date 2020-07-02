import React, { Component } from 'react';
import axios from 'axios';
import ProductCard from '../container/ProductCard';

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


    render() {

        const products = this.state.products || [];
        return (
            <div className="text">
                <div className="d-flex justify-content-around flex-wrap">
                    {products && products.map(product => <ProductCard key={product.id} product={product} />)}
                </div>
            </div>
        );

        
    }
        
}

export default Home;
