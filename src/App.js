import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import './App.css';
import Navbar from './components/Navbar/Navbar';
import Signup from './pages/Signup';
import Login from './pages/Login';
import Home from './pages/Home';
import ShoppingCart from './pages/ShoppingCart';



class App extends Component {
  constructor(props){
    super(props);
    
    this.state = {
      user: null, //pq vou usar isso?
    }
  }

  //right after component is rendered
  async componentDidMount() {
    await this.authListener();
  }

  //call when auth change
  authListener = () => {
      let currentUser = JSON.parse(localStorage.getItem("currentUser")) || []
      this.setState({ user: currentUser });
  }

  render() {
    return (
      <Router>
        <div className="App">
          <Navbar/>
          <Switch>
            <Route path="/shoppingcart">
              <ShoppingCart />
            </Route>
            <Route path="/home">
              <Home />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/signup">
              <Signup />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
