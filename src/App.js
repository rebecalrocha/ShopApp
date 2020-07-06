import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import './App.css';
import Navbar from './components/Navbar';
import composedAuthentication from './components/requireAuth';
import composedGuest from './components/justGuests';
import Signup from './pages/Signup';
import Login from './pages/Login';
import Home from './pages/Home';
import CartContainer from './container/CartContainer';
import Checkout from './pages/Checkout';
import NotFound from './pages/NotFound';



class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Navbar/>
          <Switch>
            <Route exact path={["/home", "/"]} component={Home} />
            <Route exact path="/login" component={composedGuest(Login)} />
            <Route exact path="/signup" component={composedGuest(Signup)} />
            <Route exact path="/shoppingcart" component={CartContainer} />
            <Route exact path="/checkout" component={composedAuthentication(Checkout)} />
            <Route path="*" component={NotFound} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
