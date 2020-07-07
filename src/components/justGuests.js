import React from "react";
import { compose } from 'redux'
import { connect } from 'react-redux'

const justGuests = Component => props => {
    const { isAuthenticated } = props

    let redirect = () => {
        if(document.referrer === 'http://localhost:3000/checkout')
            window.location.href = '/checkout';
        else
            window.location.href = '/home';
        return null;
    }
    
    return !isAuthenticated ? <Component {...props} /> : redirect();
}

const mapStateToProps = (state) => ({
    isAuthenticated: state.loggerReducer
  })

const composedGuest = compose(
    connect(mapStateToProps),
    justGuests
)

export default composedGuest