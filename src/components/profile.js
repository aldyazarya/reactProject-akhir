import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'

import '../css/profile.css'
import avatar from '../images/categoryimg/585e4bcdcb11b227491c3396.png'

class Profile extends Component {
    render() {
        return (
            <div>
                <div className="container">
                    <div className="card mx-auto">
                        <div className="card-body d-flex">
                            <div className="side-profile">
                                    <img src={avatar} alt="avatar"/>
                                    <div className=" user d-flex align-content-center">
                                        <i className="fas fa-user-alt"></i>
                                        <h6>Aldy Azarya</h6>
                                    </div>
                                    <div className=" email d-flex">
                                        <i className="fas fa-envelope"></i>
                                        <h6>aldy1612@gmail.com</h6>
                                    </div>
                                    <div className=" phone d-flex">
                                        <i className="fas fa-mobile-alt"></i>
                                        <h6>082292919541</h6>
                                    </div>
                                    <div className="location d-flex">
                                        <i className="fas fa-map-marker-alt"></i>
                                        <h6>Jl. Palbatu 1</h6>
                                    </div>
                                    <Link to="/editprofile"><button className="button-editProfile">Edit Profile</button></Link>

                            </div>
                            <div>
                                <div className="profile d-flex">
                                    <a href="#">Profile</a>
                                    <a href="#">WishList</a>
                                </div>
                                <div className="personal-profile">
                                    <div className="mb-3">
                                        <h5>Personal Profile</h5>
                                        <div className="d-flex">
                                            <h6>First Name</h6>
                                            <h5>Aldy</h5>
                                        </div>
                                        <div className="d-flex">
                                            <h6>Last Name</h6>
                                            <h5>Azarya</h5>
                                        </div>
                                        <div className="d-flex">
                                            <h6>Date of Birth</h6>
                                            <h5>16 December 1994</h5>
                                        </div>
                                        <div className="d-flex">
                                            <h6>Gender</h6>
                                            <h5>Pria</h5>
                                        </div>
                                    </div>
                                    <div className="mb-3">
                                        <h5>Contact</h5>
                                        <div className="d-flex">
                                            <h6>Email</h6>
                                            <h5>aldy1612@gmail.com</h5>
                                        </div>
                                        <div className="d-flex">
                                            <h6>Phone Number</h6>
                                            <h5>082292919541</h5>
                                        </div>
                                    </div>
                                    <div className="mb-3">
                                    <h5>Address</h5>
                                        <div className="d-flex">
                                            <h6>Address Name</h6>
                                            <h5>Home</h5>
                                        </div>
                                        <div className="d-flex">
                                            <h6>Country</h6>
                                            <h5>Indonesia</h5>
                                        </div>
                                        <div className="d-flex">
                                            <h6>City or District</h6>
                                            <h5>Jakarta Selatan</h5>
                                        </div>
                                        <div className="d-flex">
                                            <h6>Postal Code</h6>
                                            <h5>90245</h5>
                                        </div>
                                        <div className="d-flex">
                                            <h6>Address</h6>
                                            <h5>Jl. Palbatu no.1</h5>
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