import { connect } from 'react-redux'
import TotalProducts from '../components/TotalProducts'

const mapStateToProps = state => ({
  totalProducts: state.productsReducer
})

export default connect(mapStateToProps)(TotalProducts)