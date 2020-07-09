import React from 'react'
import { connect } from 'react-redux'

const CounterContainer = ({ totalProducts }) => {
  return (
    <span>
      {totalProducts}
    </span>
  )
}

const mapStateToProps = state => ({
  totalProducts: state.productsReducer.length
})

export default connect(mapStateToProps)(CounterContainer)
