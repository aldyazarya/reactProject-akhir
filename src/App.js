import React, { Component } from 'react';
import cookies from 'universal-cookie';
import {connect} from 'react-redux';
import {BrowserRouter, Route} from 'react-router-dom';

import Header from './components/header'
import Home from './components/home';
import Login from './components/login';
import Register from './components/register' ;
import Shop from './components/shop' ;
import Profile from './components/profile'
import editProfile from './components/editProfile';
import {keepLogin} from '../src/action'

const cookie = new cookies()

class App extends Component {

   //life cycle method
   componentDidMount() {
    
    this.props.keepLogin(cookie.get("masihLogin"), cookie.get("idLogin"))

  }


  render() {
    return (
      <BrowserRouter>
          <div >
            <Header/>

            <Route path="/" exact component={Home}/>
            <Route path="/login" exact component={Login}/>
            <Route path="/register" exact component={Register}/>
            <Route path="/shop" exact component={Shop}/>
            <Route path="/profile" exact component={Profile}/>
            <Route path="/editprofile" exact component={editProfile}/>
            
          </div>
      </BrowserRouter>
    );
  }
}

export default connect(null, {keepLogin}) (App)
