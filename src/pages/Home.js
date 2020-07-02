import React, { Component } from 'react';
import axios from 'axios';
import ProductHomeContainer from '../container/ProductHomeContainer';

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
        } catch (error) {
            console.log(error)
        }
    }


    render() {

        const products = this.state.products || [];
        return (
            <div className="text">
                <div className="d-flex justify-content-around flex-wrap">
                    {products && products.map(product => <ProductHomeContainer key={product.id} product={product} />)}
                </div>
            </div>
        );

        
    }
        
}

export default Home;
