import { connect } from 'react-redux'
import Cart from '../pages/Cart'


const mapStateToProps = state => ({
  products: state.productsReducer
})

export default connect(mapStateToProps)(Cart)