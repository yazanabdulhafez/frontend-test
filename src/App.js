import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from './components/Home';
import { Profile } from './components/Profile';
import Favorite from './components/Favorite';
import Header from './components/Header';
import Footer from './components/Footer';
import { withAuth0 } from "@auth0/auth0-react";


export class App extends Component {

constructor(props){
  super(props);
  this.state={
    counter:0,
  }
}
  
handleCounter=(value)=>{
  this.setState({
    counter:value,
  })
}

  render() {
    console.log('app',this.props.auth0);
    return (
      <Router>
        <Header counter={this.state.counter} />
        <Switch>
          <Route exact path="/">
            <Home handleCounter={this.handleCounter}
            counter={this.state.counter} />
          </Route>
          <Route path="/favorite">
          {this.props.auth0.isAuthenticated&&<Favorite handleCounter={this.handleCounter}/>}
          </Route>
          <Route path="/profile">
           {this.props.auth0.isAuthenticated&&<Profile auth0={this.props.auth0} />}
          </Route>
        </Switch>
        <Footer />
      </Router>

    )
  }
}

export default  withAuth0(App);

