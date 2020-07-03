import React from "react";
import { compose } from 'redux'
import { connect } from 'react-redux'

const justGuests = Component => props => {
    const { isAuthenticated } = props
    
    return !isAuthenticated ? <Component {...props} /> : window.location.href = '/home';
}

const mapStateToProps = (state) => ({
    isAuthenticated: state.loggerReducer
  })

const composedGuest = compose(
    connect(mapStateToProps),
    justGuests
)

export default composedGuest