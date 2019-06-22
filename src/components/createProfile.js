import React, {Component} from 'react'
// import {connect} from 'react-redux'
import '../css/createProfile.css'
// import {createProfile} from '../action/index'
// import {createAddress} from '../action/index'
import axios from '../config/axios'
import cookies from 'universal-cookie'
import { Button, ButtonGroup} from 'reactstrap'
import blankImage from '../images/logo-boxfeatures/blank_image.jpg'
// import {onCreateProfile} from '../action/index'
import { API_URL } from '../API_URL/API_URL';
import Swal from 'sweetalert2'

const cookie = new cookies()

class CreateProfile extends Component {

    constructor(props){
        super(props);
         this.state = {
            rSelected: [],
            file: '',
            imagePreviewUrl: {blankImage},
            image_product: '',
            email: '',
            username: '',
            id: ''
          }
        this.onChange1 = this.onChange1.bind(this)
        this.onChange2 = this.onChange2.bind(this)
        this._handleImageChange = this._handleImageChange.bind(this);
        this._handleSubmit = this._handleSubmit.bind(this);
    };

    

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

        const res =  await axios.get(`${API_URL}/getlastuser/`)
        console.log(res);

        this.setState({
            email: res.data[0].email,
            username: res.data[0].username,
            id: res.data[0].id
        })   
    }

    onCreateProfileAvatar = async (e) => {
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
        
            cookie.remove('emailLogin')
            cookie.remove('usernameLogin')
            cookie.remove('idLogin')
            
            Swal.fire({
                position: 'center',
                type: 'success',
                title: 'Your Profile Has Been Created',
                showConfirmButton: false,
              }).then (
                  setTimeout(function(){
                      window.location.replace('/login')
                  }, 3000)
              )

        } catch(e) {
            console.log(e);
            
        }
          
    }


    onCreateProfile = async (e) => {
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

    onSubmitProfile =  (e) => {
        this.onCreateProfile()
        this.onCreateProfileAvatar()
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
                                            <input type="text" value={this.state.username} className="form-control" disabled style={{color:'#dbdbdb'}} />
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
                                            <input type="text" className="form-control" ref={input => this.name = input} />
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
                                            <input type="text" value={this.state.email} className="form-control" disabled style={{color:'#dbdbdb'}}/>
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
                                            <input type="date" className="form-control" ref={input => this.dateofbirth = input} />
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
                                            <input type="text" className="form-control" ref={input => this.phonenumber = input} />
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
                                            <input type="text" className="form-control" ref={input => this.country = input} />
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
                                            <input type="text" className="form-control" ref={input => this.cityordistrict = input} />
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
                                            <input type="text" className="form-control" ref={input => this.postalcode = input} />
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
                                            <input type="text" className="form-control" ref={input => this.address = input} />
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
                        <button className="btn btn-primary btn-fill btn-wd btn-addprofile" onClick={this.onSubmitProfile}>ADD PRODUCT</button>
                    </div>
                </div>
            </div>

        )
    }

}


export default CreateProfile;