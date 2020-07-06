import React from "react";
import { compose } from 'redux'
import { connect } from 'react-redux'

const requireAuthentication = Component => props => {
    const { isAuthenticated } = props
    
    const redirect = () => {
        window.location.href = '/login';
        return null;
    }

    return isAuthenticated ? <Component {...props} /> : redirect();
}

const mapStateToProps = (state) => ({
    isAuthenticated: state.loggerReducer
  })

const composedAuthentication = compose(
    connect(mapStateToProps),
    requireAuthentication
)

export default composedAuthentication