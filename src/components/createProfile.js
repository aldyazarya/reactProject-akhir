import React, {Component} from 'react'
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import '../css/createProfile.css'
import {createProfile} from '../action'
import {createAddress} from '../action'
import axios from '../config/axios'
import cookies from 'universal-cookie'
import { Button, ButtonGroup} from 'reactstrap'

const cookie = new cookies()

class CreateProfile extends Component {

    state = {
        cSelected: [],
        
}

    onRadioBtnClick = (rSelected) => {
        this.setState({rSelected})

        console.log(rSelected); 
    }


    onCreateProfileClick = (e) => {
        const firstname = this.firstname.value
        const lastname = this.lastname.value
        const dateofbirth = this.dateofbirth.value
        const gender = this.state.rSelected
        const phonenumber = this.phonenumber.value
        const country = this.country.value
        const cityordistrict = this.cityordistrict.value
        const postalcode = this.postalcode.value
        const address = this.address.value
        this.props.createProfile(firstname, lastname, dateofbirth, gender, phonenumber)
        this.props.createAddress(country, cityordistrict, postalcode, address)
        //this.props.save address
        //this.props
    }



    render(){
        return(
            <div>
                <div className="container">
                    <div className="card mx-auto">
                        <div className="card-body d-flex">
                            <div className="side-profile">
                                    <button className="button-saveProfile" onClick={this.onCreateProfileClick}>Create</button>
                            </div>
                            <div>
                                <div className="profile d-flex">
                                    <h6> Create Profile</h6>
                                </div>
                                <div className="personal-profile">
                                    <div className="mb-3">
                                        <h5>Personal Profile</h5>
                                        <div className="d-flex">
                                            <h6>First Name</h6>
                                            <fieldset className="material">
                                                <input type="text" ref={input => this.firstname = input} ></input>
                                            </fieldset>
                                        </div>
                                        <div className="d-flex">
                                            <h6>Last Name</h6>
                                            <fieldset className="material">
                                                <input type="text" ref={input => this.lastname = input} ></input>
                                            </fieldset>
                                        </div>
                                        <div className="d-flex">
                                            <h6>Date of Birth</h6>
                                            <fieldset className="material">
                                                <input type="date" ref={input => this.dateofbirth = input}></input>
                                            </fieldset>
                                        </div>
                                        <div className="d-flex">
                                            <h6>Gender</h6>
                                            {/* <div className=" form-check form-check-inline">
                                                <input className=" form-check-input" type="radio"  name="inlineRadioOptions" id="inlineRadio1" value="male"/>
                                                <label className=" form-check-label" for="inlineRadio1"> Male</label>
                                            </div>
                                            <div className=" form-check form-check-inline">
                                                <input className=" form-check-input" type="radio"  name="inlineRadioOptions" id="inlineRadio2" value="female"/>
                                                <label className=" form-check-label" for="inlineRadio1"> Female</label>
                                            </div> */}
                                            <ButtonGroup>
                                                <Button onClick={() => this.onRadioBtnClick("male")} active={this.state.rSelected === "male"} name="gender" value="male" label="male" size="sm">Male</Button>
                                                <Button onClick={() => this.onRadioBtnClick("female")} active={this.state.rSelected === "female"} name="gender" value="female" label="female" size="sm">Female</Button>
                                            </ButtonGroup>
                                            
                                        </div>
                                    </div>
                                    <div className="mb-3">
                                        <h5>Contact</h5>
                                        <div className="d-flex">
                                            <h6>Email</h6>
                                            {/* <fieldset className="material">
                                                <input type="email" ref={input => this.email = input}></input>
                                            </fieldset> */}
                                            <p>-</p>
                                        </div>
                                        <div className="d-flex">
                                            <h6>Phone Number</h6>
                                            <fieldset className="material">
                                                <input type="teks" ref={input => this.phonenumber = input} ></input>
                                            </fieldset>
                                        </div>
                                    </div>
                                    <div className="mb-3">
                                    <h5>Address</h5>
                                        
                                        <div className="d-flex">
                                            <h6>Country</h6>
                                            <fieldset className="material">
                                                <input type="teks" ref={input => this.country = input} ></input>
                                            </fieldset>
                                        </div>
                                        <div className="d-flex">
                                            <h6>City or District</h6>
                                            <fieldset className="material">
                                                <input type="teks" ref={input => this.cityordistrict = input} ></input>
                                            </fieldset>
                                        </div>
                                        <div className="d-flex">
                                            <h6>Postal Code</h6>
                                            <fieldset className="material">
                                                <input type="teks" ref={input => this.postalcode = input}></input>
                                            </fieldset>
                                        </div>
                                        <div className="d-flex">
                                            <h6>Address</h6>
                                            <fieldset className="material">
                                                <input type="teks" ref={input => this.address = input}></input>
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

export default connect (null, {createProfile, createAddress})(CreateProfile);