import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import './App.css';
import Navbar from './components/Navbar';
import composedAuthentication from './components/requireAuth';
import Signup from './pages/Signup';
import Login from './pages/Login';
import Home from './pages/Home';
import CartContainer from './container/CartContainer';
import Checkout from './pages/Checkout';



class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Navbar/>
          <Switch>
            <Route path="/checkout" component={composedAuthentication(Checkout)}></Route>
            <Route path="/shoppingcart" component={CartContainer} />
            <Route path="/home" component={Home} />
            <Route path="/login" component={Login} />
            <Route path="/signup" component={Signup} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
