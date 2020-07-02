import React, { Component } from 'react';
import { connect } from 'react-redux'
import ProductCartContainer from './ProductCartContainer';

class CartContainer extends Component {
  constructor(props) {
      super(props);
      
      this.state = {
          totalPrice: 0
      }
  };

  render() {
      const products = this.props.products || [];
      let totalPrice = 0;
      products.map(product => 
          totalPrice += product.quantity * product.price
      );

      if(products.length === 0) {
          return (
              <div className="text" style={{height: "200px", alignItems: "center", display: "flex", justifyContent: "center"}}>
                  <h5 className="font-weight-bold m-3">Your shopping cart is empty</h5>
              </div>
          );
      } else {
          return (
              <div className="text" style={{alignItems: "center"}}>
                  <h5 className="font-weight-bold m-3" style={{alignItems: "center"}}>Shopping Cart</h5>
                  <hr/>
                  {products.map(product => <ProductCartContainer key={product.id} product={product} />)}

                  <div className="d-flex bg-light rounded justify-content-around m-3">
                      <h5 className="m-3">
                          Subtotal ({products.length} {products.length === 1 ? 'item' : 'itens'}): <span className="text-danger">${totalPrice.toFixed(2)}</span>
                          </h5>
                      <div>
                      <a className="btn btn-warning my-2" href="/checkout" role="button">Proceed to checkout</a>
                      </div>
                      
                  </div>
              </div>
          );
      }

  }
}

const mapStateToProps = state => ({
  products: state.productsReducer
})

export default connect(mapStateToProps)(CartContainer)