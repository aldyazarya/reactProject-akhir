import React, {Component} from 'react';
import {Link, Redirect} from 'react-router-dom' ;

import {onLoginClick} from '../action' ;

import {connect} from 'react-redux';


import '../css/login.css'
import facebookLogo from '../images/facebook-logo.svg'
import twitterLogo from '../images/twitter-logo.svg'
import googleLogo from '../images/google-icon.svg'

import Footer from '../components/footer';

class Login extends Component {

    onSubmitClick = () => {
        const username = this.username.value ;
        const password = this.password.value ;
        this.props.onLoginClick (username, password)
        console.log("Username: " + username);
        console.log("Password: " + password);
    }

    onErrorLogin = () => {
        if(this.props.user.error !== ''){
            setTimeout(this.props.onSetTimeOut,3000)
            return (
                <div className="alert alert-danger mt-4">
                    {this.props.user.error}
                </div>
            )
        } else {
            return null
        }

    }






    render(){
        const {user} = this.props
        if(user.username === "") {
            return (
                <div>
                <div className="logincard container">
                    <div className="card mx-auto">
                        <div className="card-body">
                            <h6 className="login mx-auto">Login</h6>
                            <div className="username mx-auto">
                                <p>Username</p>
                                <div className=" input d-flex">
                                    <i className="fas fa-user-alt"></i>
                                    <input ref={input => {this.username= input}} type="teks" placeholder="Type your Username"/>
                                </div>
                                <hr className="garis1"/>
                            </div>
                            <div className="password mx-auto">
                                <p>Password</p>
                                <div className=" input d-flex ">
                                    <i className="fas fa-lock"/>
                                    <input ref={input => {this.password= input}} type="password" placeholder="Type your Password"/>
                                </div>
                                <hr className="garis1"/>
                            </div>
                            <div className="forgetpassword mx-auto">
                                <a href="#">Forget password?</a>
                            </div>
                            <button className="button-login" onClick={this.onSubmitClick}>LOGIN</button>
                            {/* {this.onErrorLogin()} */}
                            <div className="signUsing mx-auto">
                                <p className="teks1"> Sign In Using</p>
                                <div className="sosmed-register mx-auto d-flex">
                                    <a href="#"><img src={facebookLogo} alt="facebook"/></a>
                                    <a href="#"><img src={twitterLogo} alt="twitter"/></a>
                                    <a href="#"><img src={googleLogo} alt="google"/></a>
                                </div>
                            </div>
                            <div className="orCreate mx-auto">
                                <div className="mx-auto">
                                    <p className="teks2">Or Create Account </p>
                                </div>
                                <div className="text-center">
                                    <Link to="/register"><a className="here" href="#">Here</a></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <Footer/>
                
                </div>
            
                
            )
        } else{
            return <Redirect to="/"/>
        }

    }


}

const mapStateToProps = state => {
    return {user : state.auth
    }
}

export default connect (mapStateToProps, {onLoginClick})(Login) ;


