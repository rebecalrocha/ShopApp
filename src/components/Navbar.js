import React from 'react'
import { Link } from 'react-router-dom'
import cartIcon from '../assets/cart.svg'
import CounterContainer from '../container/CounterContainer'
import { toggleLogin } from '../actions'
import { connect } from 'react-redux'

class Navbar extends React.Component {
    handleOnLogoutClick = () => {
      this.props.logout()
      window.location.href = '/login'
    }

    render () {
      return (
        <nav className='nav navbar navbar-light'>
          <a className='navbar-brand' href='/home'>
            <span className='navbar-brand font-weight-bold'>Shop App</span>
          </a>
          <div className='row mx-3'>
            <Link to='/shoppingcart' className='nav-item nav-link' title='Go to cart'>
              <img src={cartIcon} alt='cart.svg' />
              <CounterContainer />
            </Link>

            {this.props.isLogged
              ? <button onClick={this.handleOnLogoutClick} className='btn btn-outline-primary'>Log out</button>
              : <a className='btn btn-outline-primary nav-item nav-link btn-link' href='/login' role='button'>Log In</a>}
          </div>
        </nav>
      )
    }
}

const mapStateToProps = state => ({
  isLogged: state.loggerReducer
})

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(toggleLogin())
})

export default connect(mapStateToProps, mapDispatchToProps)(Navbar)
