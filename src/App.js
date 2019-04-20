import React, { Component } from 'react';
import cookies from 'universal-cookie';
import {connect} from 'react-redux';
import {BrowserRouter, Route} from 'react-router-dom';

import Header from './components/header'
import Home from './components/home';
import Login from './components/login';
import Register from './components/register' ;
import Shop from './components/shop' ;
import {keepLogin} from '../src/action'

const cookie = new cookies()

class App extends Component {

   //life cycle method
   componentDidMount() {
    //akan di jalankan sekali ketika pertama kali component di render
    //mengambil value yang disimpan pada file cookie masihLogin
    var userCookie = cookie.get('masihLogin')
    // jika didapatkan username di file cookie akan memanggil function keepLogin
    if(userCookie !== undefined) {
      console.log("cookie ada");
      this.props.keepLogin(userCookie)
      
    }

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
            
          </div>
      </BrowserRouter>
    );
  }
}

export default connect(null, {keepLogin}) (App)
