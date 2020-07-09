import React from 'react'
import { connect } from 'react-redux'
import { incrementProduct, decrementProduct, decrementCart } from '../actions'

const ProductCartContainer = ({ product, clickLessProduct, clickMoreProduct, clickDeleteProduct }) => {
  return (
    <div className='d-flex flex-row ml-3 mb-3' style={{ alignItems: 'center' }}>
      <div>
        <img className='m-auto' src={product.image} alt={product.name} width='200' />
      </div>
      <div className='ml-3'>
        <h6 className='font-weight-bold'>{product.name}</h6>
        <h6 className='my-3 text-danger'>${product.price}</h6>
        <div>
          <button type='button' className='btn btn-outline-secondary' onClick={() => clickLessProduct(product.id)}> - </button>
          <span className='mx-2'>{product.quantity}</span>
          <button type='button' className='btn btn-outline-secondary' onClick={() => clickMoreProduct(product.id)}> + </button>
          <button type='button' className='btn btn-outline-secondary ml-3' onClick={() => clickDeleteProduct(product.id)}> Delete </button>
        </div>

      </div>
    </div>
  )
}

const mapDispatchToProps = dispatch => ({
  clickDeleteProduct: id => dispatch(decrementCart(id)),
  clickMoreProduct: id => dispatch(incrementProduct(id)),
  clickLessProduct: id => dispatch(decrementProduct(id))
})

export default connect(null, mapDispatchToProps)(ProductCartContainer)
