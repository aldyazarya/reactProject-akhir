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
import CreateProfile from './components/createProfile'
import Wishlist from './components/wishlist'
import productItem from './components/productItem'
import {keepLogin} from '../src/action'
import productdetail from './components/productDetail'
import Cart from './components/cart'
import Checkout from './components/checkout'
import orderHistory from './components/orderhistory'

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
            <Route path="/login" component={Login}/>
            <Route path="/register"  component={Register}/>
            <Route path="/shop"  component={productItem}/>
            <Route path="/profile" exact component={Profile}/>
            <Route path="/editprofile"  component={editProfile}/>
            <Route path="/createprofile"  component={CreateProfile}/>
            <Route path="/wishlist" component={Wishlist}/>
            <Route path="/productitem" component={productItem}/>
            <Route path="/productdetail/:id" component={productdetail}/>
            <Route path="/cart" component={Cart}/>
            <Route path="/checkout" component={Checkout}/>
            <Route path="/orderhistory" component={orderHistory}/>

            
          </div>
      </BrowserRouter>
    );
  }
}

export default connect(null, {keepLogin}) (App)
