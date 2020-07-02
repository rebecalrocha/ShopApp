import React from "react";
import { compose } from 'redux'
import { connect } from 'react-redux'

const requireAuthentication = Component => props => {
    const { isAuthenticated } = props
    
    return isAuthenticated ? <Component {...props} /> : window.location.href = '/login';
}

const mapStateToProps = (state) => ({
    isAuthenticated: state.loggerReducer
  })

const composedAuthentication = compose(
    connect(mapStateToProps),
    requireAuthentication
)

export default composedAuthentication