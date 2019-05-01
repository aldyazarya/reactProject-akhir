import React, {Component} from 'react'
import {Link} from 'react-router-dom';
import {connnect} from 'react-redux';
import '../css/editProfile.css'
import avatar from '../images/categoryimg/585e4bcdcb11b227491c3396.png'
import {SaveProfile} from '../action'
import axios from '../config/axios'
import cookies from 'universal-cookie'

const cookie = new cookies()

class editProfile extends Component {

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


    render(){
        return(
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

                                    <button className="button-saveProfile">Save</button>
                            </div>
                            <div>
                                <div className="profile d-flex">
                                    <h6> Edit Profile</h6>
                                </div>
                                <div className="personal-profile">
                                    <div className="mb-3">
                                        <h5>Personal Profile</h5>
                                        <div className="d-flex">
                                            <h6>First Name</h6>
                                            <fieldset className="material">
                                                <input type="text" ref={input => this.firstname = input} placeholder={this.state.firstname}></input>
                                            </fieldset>
                                        </div>
                                        <div className="d-flex">
                                            <h6>Last Name</h6>
                                            <fieldset className="material">
                                                <input type="text" ref={input => this.lastname = input} placeholder={this.state.lastname}></input>
                                            </fieldset>
                                        </div>
                                        <div className="d-flex">
                                            <h6>Date of Birth</h6>
                                            <fieldset className="material">
                                                <input type="date" ref={input => this.dateofbirth = input} placeholder={this.state.dateofbirth}></input>
                                            </fieldset>
                                        </div>
                                        <div className="d-flex">
                                            <h6>Gender</h6>
                                            <div className=" form-check form-check-inline">
                                                <input className=" form-check-input" type="radio" ref={input => this.gender = input} name="inlineRadioOptions" id="inlineRadio1" value="male"/>
                                                <label className=" form-check-label" for="inlineRadio1"> Male</label>
                                            </div>
                                            <div className=" form-check form-check-inline">
                                                <input className=" form-check-input" type="radio" ref={input => this.gender = input} name="inlineRadioOptions" id="inlineRadio2" value="female"/>
                                                <label className=" form-check-label" for="inlineRadio1"> Female</label>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mb-3">
                                        <h5>Contact</h5>
                                        <div className="d-flex">
                                            <h6>Email</h6>
                                            <fieldset className="material">
                                                <input type="email" ref={input => this.email = input} placeholder={this.state.email}></input>
                                            </fieldset>
                                        </div>
                                        <div className="d-flex">
                                            <h6>Phone Number</h6>
                                            <fieldset className="material">
                                                <input type="teks" ref={input => this.phonenumber = input} placeholder={this.state.phonenumber}></input>
                                            </fieldset>
                                        </div>
                                    </div>
                                    <div className="mb-3">
                                    <h5>Address</h5>
                                        <div className="d-flex">
                                            <h6>Address Name</h6>
                                            <fieldset className="material">
                                                <select className="dropdown">
                                                    <option value="Home">Home</option>
                                                    <option value="Office">Office</option>
                                                    <option value="Others">Others</option>
                                                </select>
                                            </fieldset>
                                        </div>
                                        <div className="d-flex">
                                            <h6>Country</h6>
                                            <fieldset className="material">
                                                <input type="teks" ref={input => this.country = input} placeholder={this.state.country}></input>
                                            </fieldset>
                                        </div>
                                        <div className="d-flex">
                                            <h6>City or District</h6>
                                            <fieldset className="material">
                                                <input type="teks" ref={input => this.cityordistrict = input} placeholder={this.state.cityordistrict}></input>
                                            </fieldset>
                                        </div>
                                        <div className="d-flex">
                                            <h6>Postal Code</h6>
                                            <fieldset className="material">
                                                <input type="teks" ref={input => this.postalcode = input} placeholder={this.state.postalcode}></input>
                                            </fieldset>
                                        </div>
                                        <div className="d-flex">
                                            <h6>Address</h6>
                                            <fieldset className="material">
                                                <input type="teks" ref={input => this.address = input} placeholder={this.state.address}></input>
                                            </fieldset>
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

export default editProfile;