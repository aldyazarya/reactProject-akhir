import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import axios from '../config/axios'
import cookies from 'universal-cookie'

import '../css/wishlist.css'

const cookie = new cookies()

class Wishlist extends Component {

    state = {
        username: '',
        email: '',
        avatar: '',
        phonenumber: '',
        address: ''
    }

    componentDidMount(){
        axios.get(`/profile/${cookie.get("masihLogin")}`)
        .then((x) => {
            console.log(x.data);
    
            this.setState({
                phonenumber: x.data[0].phonenumber
            })
        }).catch()

        axios.get(`/users/${cookie.get("masihLogin")}`)
        .then((x) => {
            console.log (x.data);

            this.setState({
                username: x.data[0].username,
                email: x.data[0].email
            })
         
        }).catch()

        axios.get(`/showaddress/${cookie.get("masihLogin")}`)
        .then((x) => {
            console.log(x.data);
            
            this.setState({
                address: x.data[0].address,
            }) 
        })

        axios.get(`/showavatar/${cookie.get("masihLogin")}`)
        .then((x) => {
            console.log(x.data);// lgsung gambar

            this.setState({
                avatar: x.data
            })
            
        })
    }


    render(){
        return (
            <div>
                <div className="container">
                    <div className="card mx-auto">
                        <div className="card-body d-flex">
                            <div className="side-profile">
                                    <img src={this.state.avatar} alt="avatar"/>
                                    <div className=" user d-flex align-content-center">
                                        <i className="fas fa-user-alt"></i>
                                        <h6>{this.state.username}</h6>
                                    </div>
                                    <div className=" email d-flex">
                                        <i className="fas fa-envelope"></i>
                                        <h6>{this.state.email}</h6>
                                    </div>
                                    <div className=" phone d-flex">
                                        <i className="fas fa-mobile-alt"></i>
                                        <h6>{this.state.phonenumber}</h6>
                                    </div>
                                    <div className="location d-flex">
                                        <i className="fas fa-map-marker-alt"></i>
                                        <h6>{this.state.address}</h6>
                                    </div>
                                    <Link to="/editprofile"><button className="button-editProfile">Edit Profile</button></Link>

                            </div>
                            <div>
                                <div className="profile d-flex">
                                    <a href="/profile">Profile</a>
                                    <a href="#">WishList</a>
                                </div>
                                {/*  */}
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        )
    }
}

export default Wishlist;