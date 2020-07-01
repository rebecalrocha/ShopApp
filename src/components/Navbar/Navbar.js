import React from 'react';
import { Link } from 'react-router-dom';
import cartIcon from '../../assets/cart.svg';

export default class Navbar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            productCount: 0,
            user: null
        };
    }

    async componentDidMount() {
      let cart = await JSON.parse(localStorage.getItem("cart")) || {};
      this.setState({productCount: Object.keys(cart).length});

      let currentUser = await JSON.parse(localStorage.getItem("currentUser")) || null;
      this.setState({ user: currentUser });
    }

    onLogoutClick = () => {
      this.setState({ user: null });
      console.log('logout', this.state.user);
      localStorage.removeItem('currentUser');
      window.location.href = '/login';
    }

    userLogged = () => {
      if (this.state.user) {
        console.log('user', this.state.user, typeof (this.state.user))
        return true;
      } else {
        console.log('not user', this.state.user, typeof (this.state.user))
        return false
      }
      
    }

    render() {
      return (
      <nav className="nav navbar navbar-light">
          <a className="navbar-brand" href="/home">
            <span className="navbar-brand font-weight-bold">Shop App</span>
          </a>
          <div className="row mx-3">
            <Link to="/shoppingcart" className="nav-item nav-link" title='Go to cart'>
              <img src={cartIcon} alt="cart.svg"/>
              {this.state.productCount}
            </Link>
            
            { this.state.user  ?
              <button onClick={this.onLogoutClick} className="btn btn-outline-primary">Log Out</button> :
              <Link to="/login" className="nav-item nav-link">Login</Link>
            }
          </div>
        </nav>
        );
    }

}