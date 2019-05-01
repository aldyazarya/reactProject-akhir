import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import axios from '../config/axios'
import cookies from 'universal-cookie'

import '../css/profile.css'
// import avatar from '../images/categoryimg/585e4bcdcb11b227491c3396.png'

const cookie = new cookies()

class Profile extends Component {

    state = {
            username: '',
            email: '',
            firstname: '',
            lastname: '',
            dateofbirth: '',
            gender: '',
            phonenumber: '',
            avatar: '',
            addressname: '',
            country: '',
            cityordistrict: '',
            postalcode: '',
            address:''

    }

    componentDidMount(){
        
        axios.get(`/profile/${cookie.get("masihLogin")}`)
        .then((x) => {
            console.log(x.data);
    
            this.setState({
                firstname: x.data[0].firstname,
                lastname: x.data[0].lastname,
                dateofbirth: x.data[0].dateofbirth,
                gender: x.data[0].gender,
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
                addressname: x.data[0].addressname,
                address: x.data[0].address,
                country: x.data[0].country,
                cityordistrict: x.data[0].cityordistrict,
                postalcode: x.data[0].postalcode 
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










    render() {
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
                                <div className="personal-profile">
                                    <div className="mb-3">
                                        <h5>Personal Profile</h5>
                                        <div className="d-flex">
                                            <h6>First Name</h6>
                                            <h5>{this.state.firstname}</h5>
                                        </div>
                                        <div className="d-flex">
                                            <h6>Last Name</h6>
                                            <h5>{this.state.lastname}</h5>
                                        </div>
                                        <div className="d-flex">
                                            <h6>Date of Birth</h6>
                                            <h5>{this.state.dateofbirth}</h5>
                                        </div>
                                        <div className="d-flex">
                                            <h6>Gender</h6>
                                            <h5>{this.state.gender}</h5>
                                        </div>
                                    </div>
                                    <div className="mb-3">
                                        <h5>Contact</h5>
                                        <div className="d-flex">
                                            <h6>Email</h6>
                                            <h5>{this.state.email}</h5>
                                        </div>
                                        <div className="d-flex">
                                            <h6>Phone Number</h6>
                                            <h5>{this.state.phonenumber}</h5>
                                        </div>
                                    </div>
                                    <div className="mb-3">
                                    <h5>Address</h5>
                                        <div className="d-flex">
                                            <h6>Address Name</h6>
                                            <h5>{this.state.addressname}</h5>
                                        </div>
                                        <div className="d-flex">
                                            <h6>Country</h6>
                                            <h5>{this.state.country}</h5>
                                        </div>
                                        <div className="d-flex">
                                            <h6>City or District</h6>
                                            <h5>{this.state.cityordistrict}</h5>
                                        </div>
                                        <div className="d-flex">
                                            <h6>Postal Code</h6>
                                            <h5>{this.state.postalcode}</h5>
                                        </div>
                                        <div className="d-flex">
                                            <h6>Address</h6>
                                            <h5>{this.state.address}</h5>
                                        </div>
                                    </div>
                
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        )
    }
}

export default Profile;