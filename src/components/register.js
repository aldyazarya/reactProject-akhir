import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'

import {onRegister} from '../action'
import '../css/register.css';
import facebookLogo from '../images/facebook-logo.svg'
import twitterLogo from '../images/twitter-logo.svg'
import googleLogo from '../images/google-icon.svg'

import Footer from '../components/footer';


class Register extends Component {

    onRegistertClick = () => {
        const user = this.username.value
        const email = this.email.value
        const pass = this.password.value
        this.props.onRegister(user,email,pass)
    }

    onErrorRegister = () => {
        if(this.props.error !== ''){
            return (
                <div className="alert alert-danger mt-4">
                    {this.props.error}
                </div>
            )
        } else if (this.props.success !== ''){
            return (
                <div className="alert alert-success mt-4">
                    {this.props.success}
                </div>
            )
        }else {
            return null
        }
    }








    render() {
        return(
            <div className="bg">
            <div className="container">
                <div className="card mx-auto">
                    <div className=" card-body d-flex">
                        <div className="registerImage"></div>
                        <div className="registerBody">
                            <h2>Create Account</h2>
                            <h6>Get started with your free account</h6>
                            <div className=" sosmed mx-auto d-flex">
                                <a href="#"><img src={facebookLogo} alt="facebook"/></a>
                                <a href="#"><img src={twitterLogo} alt="twitter"/></a>
                                <a href="#"><img src={googleLogo} alt="google"/></a>
                            </div>
                            <div className="username mx-auto">
                                <p>Username</p>
                                <div className=" input d-flex">
                                    <i className="fas fa-user-alt"></i>
                                    <input ref={input => {this.username= input}} type="teks" placeholder="Type your Username"/>
                                </div>
                                <hr className="garis1"/>
                            </div>
                            <div className="email mx-auto">
                                <p>Email</p>
                                <div className=" input d-flex ">
                                    <i className="fas fa-envelope"></i>
                                    <input ref={input => {this.email = input}} type="email" placeholder="Type your Email"/>
                                </div> 
                                <hr className="garis1"/>
                            </div>
                            <div className="password mx-auto">
                                <p>Password</p>
                                <div className=" input d-flex ">
                                    <i className="fas fa-lock"></i>
                                    <input ref={input => {this.password= input}} type="password" placeholder="Type your Password"/>
                                </div>
                                <hr className="garis1"/>
                            </div>
                            <div className="text-center">
                                <button className="button-register mx-auto" onClick={this.onRegistertClick}>SIGN UP</button>
                                {/* {this.onErrorRegister()} */}
                            </div>
                            <div>
                                <p className="haveanAccount text-center">Have an Account? <Link to="/login"><span><a href="#">Log In</a></span></Link></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
                <Footer/>
            </div>
        )
    }
}


const mapStateToProps = state => {
    return {error: state.auth.error, success:state.auth.success}
}

export default connect(mapStateToProps,{onRegister})(Register)