import { connect } from 'react-redux'
import { incrementCart } from '../actions'
import Card from '../components/Card'


const isProductAddedToCart = (product, cart) => {
  if (cart.find(p => product.id === p.id)) {
    return true;
  }

  return false;
}

const mapStateToProps = (state, ownProps) => ({
  active: isProductAddedToCart(ownProps.product, state.productsReducer)
})

const mapDispatchToProps = dispatch => ({
  addProduct: product => dispatch(incrementCart(product))
})

export default connect(mapStateToProps, mapDispatchToProps)(Card)