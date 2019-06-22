import React, {Component} from 'react'
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import '../css/editProfile.css'
// import {saveProfile} from '../action'
import axios from '../config/axios'
import cookies from 'universal-cookie'
import { Button, ButtonGroup} from 'reactstrap'
import {API_URL} from '../API_URL/API_URL'
import Swal from 'sweetalert2'
import blankImage from '../images/logo-boxfeatures/dosya.png'

const cookie = new cookies()

class editProfile extends Component {

    constructor(props){
        super(props);
         this.state = {
            rSelected: [],
            file: '',
            imagePreviewUrl: {blankImage},
            image_product: '',
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
        this.onChange1 = this.onChange1.bind(this)
        this.onChange2 = this.onChange2.bind(this)
        this._handleImageChange = this._handleImageChange.bind(this);
        this._handleSubmit = this._handleSubmit.bind(this);
    };

    showavatar = () => {
        
    }
    

    onRadioBtnClick = (rSelected) => {
        this.setState({rSelected})

        console.log(rSelected); 
    }

    onChange1(event){
        this.setState({
            categoryValue: event.target.value,
     })
    }
    
    onChange2(event){
        this.setState({
            subcategoryValue: event.target.value
        })
    }
    _handleSubmit(e) {
        e.preventDefault();
        // TODO: do something with -> this.state.file
    }
    _handleImageChange(e) {
        e.preventDefault();
        
        let reader = new FileReader();
        let file = e.target.files[0];
        
        reader.onloadend = () => {
            this.setState({
            file: file,
            imagePreviewUrl: reader.result
        });
    }
    
    reader.readAsDataURL(file)
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
    
    onEditProfileAvatar = async (e) => {
        const avatar = this.image.files[0]
        try{
            const formData2 = new FormData()
        formData2.append('avatar', avatar)
        //penggunan formdata hanya ketika kita mengupdate data yng ada bentuk file
        //kalau hanya string biasa langsung di tembak aja dalam bentuk object


        const res2 = await axios.patch(`${API_URL}/users/createprofile/avatar/${cookie.get('usernameLogin')}`, formData2, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
        
            
            Swal.fire({
                position: 'center',
                type: 'success',
                title: 'Your Profile Has Been Edit',
                showConfirmButton: false,
              }).then (
                  setTimeout(function(){
                      window.location.replace('/profile')
                  }, 3000)
              )

        } catch(e) {
            console.log(e);
            
        }
          
    }


    onEditProfile = async (e) => {
            const name = this.name.value
            const dateofbirth = this.dateofbirth.value
            const gender = this.state.rSelected
            const phonenumber = this.phonenumber.value 
            const country = this.country.value
            const cityordistrict = this.cityordistrict.value
            const postalcode = parseInt(this.postalcode.value)
            const address = this.address.value
            
                const res =  await axios.patch(`${API_URL}/users/createprofile/${cookie.get('idLogin')}`, {
                    name,
                    dateofbirth,
                    gender,
                    phonenumber,
                    country,
                    cityordistrict,
                    postalcode,
                    address
                })
                console.log(res);

    }

    onSubmitEditProfile =  (e) => {
        this.onEditProfile()
        this.onEditProfileAvatar()
    }




    render(){
        let {imagePreviewUrl} = this.state;
        let $imagePreview = null;
        if (imagePreviewUrl) {
        $imagePreview = (<img src={imagePreviewUrl}/>);
        }   
        
            return(
                <div className="col-md-12">
                    <div className="card">
                        <div className="header">
                            <h4>Form Profile</h4>
                        </div>
                        <div className="content">
                            <form className="form-horizontal">
                                <div className="form-group">
                                    <label className="control-label col-md-3">
                                        USERNAME
                                    </label>
                                    <div className="col-md-9">
                                        <div>
                                            <div>
                                                <input type="text" placeholder={this.state.username} className="form-control"  disabled/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label className="control-label col-md-3">
                                        NAME
                                    </label>
                                    <div className="col-md-9" style={{width: '33.187px'}}>
                                        <div>
                                            <div>
                                                <input type="text" placeholder={this.state.name} className="form-control" ref={input => this.name = input} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label className="control-label col-md-3">
                                        EMAIL
                                    </label>
                                    <div className="col-md-9">
                                        <div>
                                            <div>
                                                <input type="text" placeholder={this.state.email} className="form-control" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label className="control-label col-md-3">
                                        DATE OF BIRTH
                                    </label>
                                    <div className="col-md-9">
                                        <div>
                                            <div>
                                                <input type="date" placeholder={this.state.dateofbirth} className="form-control" ref={input => this.dateofbirth = input} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label className="control-label col-md-3">
                                        GENDER
                                    </label>
                                    <div className="col-md-9">
                                        <div>
                                            <div>
                                            <ButtonGroup>
                                                <Button onClick={() => this.onRadioBtnClick("male")} active={this.state.rSelected === "male"} name="gender" value="male" label="male" size="sm">Male</Button>
                                                <Button onClick={() => this.onRadioBtnClick("female")} active={this.state.rSelected === "female"} name="gender" value="female" label="female" size="sm">Female</Button>
                                             </ButtonGroup>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label className="control-label col-md-3">
                                        PHONE NUMBER
                                    </label>
                                    <div className="col-md-9" style={{width: '33.187px'}}>
                                        <div>
                                            <div>
                                                <input type="text" placeholder={this.state.phonenumber} className="form-control" ref={input => this.phonenumber = input} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label className="control-label col-md-3">
                                        COUNTRY
                                    </label>
                                    <div className="col-md-9" style={{width: '33.187px'}}>
                                        <div>
                                            <div>
                                                <input type="text" placeholder={this.state.country} className="form-control" ref={input => this.country = input} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label className="control-label col-md-3">
                                        CITY OR DISTRICT
                                    </label>
                                    <div className="col-md-9" style={{width: '33.187px'}}>
                                        <div>
                                            <div>
                                                <input type="text" placeholder={this.state.city} className="form-control" ref={input => this.cityordistrict = input} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label className="control-label col-md-3">
                                        POSTAL CODE
                                    </label>
                                    <div className="col-md-9" style={{width: '33.187px'}}>
                                        <div>
                                            <div>
                                                <input type="text" placeholder={this.state.postalcode} className="form-control" ref={input => this.postalcode = input} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label className="control-label col-md-3">
                                        ADDRESS
                                    </label>
                                    <div className="col-md-9" style={{width: '33.187px'}}>
                                        <div>
                                            <div>
                                                <input type="text" placeholder={this.state.address} className="form-control" ref={input => this.address = input} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label className="control-label col-md-3">
                                        IMAGE PRODUCT
                                    </label>
                                    <div className=" test col-md-9">
                                        <div className="">
                                            <div>
                                                <form onSubmit={this._handleSubmit}>
                                                    <input type="file" onChange={this._handleImageChange} ref={input => this.image = input} />
                                                    {/* <button type="submit" onClick={this._handleSubmit}>Upload Image</button> */}
                                                </form>
                                            </div>
                                            <div className="showAvatar">
                                                {$imagePreview}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </form>
                            <button className="btn btn-primary btn-fill btn-wd btn-addprofile" onClick={this.onSubmitEditProfile}>ADD PRODUCT</button>
                        </div>
                    </div>
                </div>
        )
    }
}

export default editProfile