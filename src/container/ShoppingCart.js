import { connect } from 'react-redux'
import { incrementProduct, decrementProduct, decrementCart } from '../actions'
import Item from '../components/Item'

const mapDispatchToProps = dispatch => ({
    clickDeleteProduct: id => dispatch(decrementCart(id)),
    clickMoreProduct: id => dispatch(incrementProduct(id)),
    clickLessProduct: id => dispatch(decrementProduct(id))
})


export default connect(null, mapDispatchToProps)(Item)