import React from 'react';
import { Link } from 'react-router-dom';

export default class Navbar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            productCount: 0
        };
    }

    componentDidMount() {
      let cart = JSON.parse(localStorage.getItem("cart")) || [];
      this.setState({productCount: cart.length});
    }

    render() {
   
      return (
      <nav className="nav navbar navbar-light">
          <a className="navbar-brand" href="/home">
            <span className="navbar-brand font-weight-bold">Shop App</span>
          </a>
          <div className="row mx-3">
            <Link to="" className="nav-item nav-link">
              <img src={require("../../cart.svg")} alt=""/>
              {this.state.productCount}
            </Link>
            <Link to="/home" className="nav-item nav-link">Home</Link>
            <Link to="/login" className="nav-item nav-link">Login</Link>
            <Link to="/signup" className="nav-item nav-link">Sign Up</Link>
            <button onClick={this.logout} className="btn btn-primary">Log Out</button>
          </div>
        </nav>
        );
    }

}