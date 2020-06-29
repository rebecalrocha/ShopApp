import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import './App.css';
import Navbar from './components/Navbar/Navbar';
import Login from './pages/Login';
import Home from './pages/Home';
import Signup from './Signup';


class App extends Component {
  constructor(props){
    super(props);
    
    this.state = {
      user: null,
    }
  }

  //right after component is rendered
  componentDidMount() {
    this.authListener();
    console.log(this.state)
  }

  //call when auth change
  authListener = () => {
      //let currentUser = JSON.parse(localStorage.getItem("currentUser")) || []
      //const user = { uid: '01', email: 'teste@teste.com' }
      //this.setState({ user });
      //localStorage.setItem('currentUser', user.uid);
  }
  
  logout = () => {
    this.setState({ user: null });
    localStorage.removeItem('currentUser');
    //return <Redirect to="/login" />
  }


  render() {
    return (
      <Router>
        <div className="App">
          <Navbar/>

          <Switch>
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
