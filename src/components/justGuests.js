import React from "react";
import { compose } from 'redux'
import { connect } from 'react-redux'

const justGuests = Component => props => {
    const { isAuthenticated } = props

    let newLocation = () => {
        if(document.referrer === 'http://localhost:3000/checkout')
            return window.location.href = '/checkout';
        else
            return window.location.href = '/home';
    }
    
    return !isAuthenticated ? <Component {...props} /> : newLocation()
}

const mapStateToProps = (state) => ({
    isAuthenticated: state.loggerReducer
  })

const composedGuest = compose(
    connect(mapStateToProps),
    justGuests
)

export default composedGuest