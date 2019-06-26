import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import axios from '../config/axios'
import cookies from 'universal-cookie'
import {API_URL} from '../API_URL/API_URL'

import '../css/profile.css'
import avatar from '../images/categoryimg/585e4bcdcb11b227491c3396.png'

const cookie = new cookies()

class Profile extends Component {

	constructor(props) {
		super(props)
		this.state = {
			username: '',
			name: '',
			dateofbirth: '',
			gender: '',
			email: '',
			phonenumber: '',
			country: '',
			city: '',
			postalcode: '',
			address: '',
			avatar: ''
		}
	}


	async componentDidMount(){
		const res = await axios.get(`${API_URL}/users/${cookie.get('masihLogin')}`)
		console.log(res.data[0]);

		this.setState({
			username: res.data[0].username,
			name: res.data[0].name,
			dateofbirth: res.data[0].dateofbirth,
			gender: res.data[0].gender,
			email: res.data[0].email,
			phonenumber: res.data[0].phonenumber,
			country: res.data[0].country,
			city: res.data[0].cityordistrict,
			postalcode: res.data[0].postalcode,
			address: res.data[0].address,
			avatar: res.data[0].avatar
		})

		console.log(this.state);
	}


    render(){
        return (
            <div className="container">
                <div className="banner-info d-flex mx-auto">
				<div className="col-md-7 header-right my-auto">
					<h1>{this.state.username}</h1>
					<div>
						<h6>button untuk wishlist dan cart</h6>
					{/* button edit profile */}
					</div>
					<ul className="address">
						<div className="d-flex data-profil">
							<div className="data-profil-label">
								<h5>PERSONAL INFORMATION</h5>
								<h6>NAME</h6>
								<h6>DATE OF BIRTH</h6>
								<h6>GENDER</h6>
								<h5>CONTACT</h5>
								<h6>EMAIL</h6>
								<h6>PHONE NUMBER</h6>
								<h5>ADDRESS</h5>
								<h6>COUNTRY</h6>
								<h6>CITY</h6>
								<h6>POSTAL CODE</h6>
								<h6>ADDRESS</h6>
							</div>
							<div className="data-profil-content">
								<h5>PERSONAL</h5>
								<h6>{this.state.name}</h6>
								<h6>{this.state.dateofbirth}</h6>
								<h6>{this.state.gender}</h6>
								<h5>CONTACT</h5>
								<h6>{this.state.email}</h6>
								<h6>{this.state.phonenumber}</h6>
								<h5>ADDRESS</h5>
								<h6>{this.state.country}</h6>
								<h6>{this.state.city}</h6>
								<h6>{this.state.postalcode}</h6>
								<h6>{this.state.address}</h6>
							</div>
						</div>	
					</ul>
				</div>

				<div className="col-md-5 header-left my-auto">
					<div>
						<img src={`${API_URL}/avatar/${this.state.avatar}`} alt={this.state.username}  className="profile-picture"/>
					</div>
					<div className="linktoeditprofile mx-auto">
						<Link to ="/editprofile" className="linktoeditprofile">
							<button className="btn mx-auto btn-primary btn-fill btn-profile" > EDIT PROFILE</button>
						</Link>
					</div>
				</div>
				<div className="clearfix"> </div>		
		      </div>
            </div>
        )
    }
    



}

export default Profile;