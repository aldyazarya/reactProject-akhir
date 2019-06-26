import React, {Component} from 'react'
import '../css/checkout.css'
import { Button, ButtonGroup } from 'reactstrap';
import visa  from '../images/logo-boxfeatures/Visa.png'
import atm_bersama from '../images/logo-boxfeatures/ATM-Bersama.png'
import axios from 'axios'
import {API_URL} from '../API_URL/API_URL'
import cookies from 'universal-cookie'
import Swal from 'sweetalert2'

const cookie = new cookies()



class Checkout extends Component {

    constructor (props) {
        super(props);
    
        this.state = { 
            rSelected: [],
            sSelected: [],
            profileData: [] ,
            name: '',
            address: '',
            postalcode: '',
            cityordistrict: '',
            country: '',
            cart: []
        };
        this.onRadioBtnClick = this.onRadioBtnClick.bind(this);
        this.onRadioBtnClick2 = this.onRadioBtnClick2.bind(this)
        this.formatterIDR = new Intl.NumberFormat('id', {
            style: 'currency',
            currency: 'IDR',
            minimumFractionDigits: 0
          })
      }
    
      onRadioBtnClick(rSelected) {
        this.setState({ rSelected });
      }
      onRadioBtnClick2(sSelected) {
        this.setState({ sSelected });
      }

      async componentDidMount() {
            await this.createUsername()
            await this.getProfile()
            await this.getcartUser()
      }

      createUsername =  () => {
        try{
            const res = axios.post(`${API_URL}/createusernameorder`, {
                username: cookie.get("masihLogin")
            })
            console.log(res);
                    
        } catch(e) {
            console.log(e);
            
        }
    }
      getProfile = async () => {
            try{    
                const res = await axios.get(`${API_URL}/getprofilefororders/${cookie.get("masihLogin")}`)
                console.log(res.data[0].name)
                this.setState({
                    profileData: res.data,
                    name: res.data[0].name,
                    address: res.data[0].address,
                    postalcode: res.data[0].postalcode,
                    cityordistrict: res.data[0].cityordistrict,
                    country: res.data[0].country
                })
                
            } catch (e) {
                console.log(e);
            }
      }
      //getcart 
      getcartUser = async () => {
        try{
            const res = await axios.get(`${API_URL}/getproductforcart/${cookie.get("masihLogin")}`)
            console.log(res.data)
            this.setState({
                cart: res.data
            })  

        } catch(e) {
            console.log(e);
            
        }
    }

    subtotal = () => {
        if(this.state.cart.length){
            var sumprice = 0

            this.state.cart.forEach(obj => {
                sumprice += obj.total_price
            }); return sumprice
        } else {
            return 0
        }
    }

    total = () => {
        const subtotal = this.subtotal() + this.state.rSelected

        return subtotal;
    }


    placeOrder = () => {
        
        try {
            const name = this.state.name
            const address = this.state.address
            const postalcode = this.state.postalcode
            const cityordistrict = this.state.cityordistrict
            const country = this.state.country
            const services = parseInt(this.state.rSelected)
            const sub_total = this.subtotal()
            const subtotal = this.total()
            const payment =  this.state.sSelected


            const res =axios.patch(`${API_URL}/createorders/${cookie.get("masihLogin")}`, {
                name: name,
                address: address,
                postalcode: postalcode,
                cityordistrict: cityordistrict,
                country: country,
                services: services,
                payment: payment,
                status: "not paid" ,
                subtotal: subtotal,
                shipping_status: "waiting for payment"
            })
            console.log(res)
            const Toast = Swal.mixin({
                toast: true,
                position: 'center',
                showConfirmButton: false,
                timer: 3000
              });
              
              Toast.fire({
                type: 'success',
                title: 'Your Order Has Been Placed!'
              })
              .then(
                  axios.delete(`${API_URL}/deleteusercart/${cookie.get("masihLogin")}`)
              ).then(
                  window.location.replace("/orderhistory")
              )
            
        } catch (e) {
            console.log(e);
        }
    }

    renderList = () => {
        return (
            <div>
                <div>
                    <div className="your-order-title d-flex">
                        <p>YOUR ORDER</p>
                        <a href="/cart"> Edit Shopping Bag </a>
                    </div>
                    <div>
                        {/* mapping here */}
                        {this.state.cart.map(item => {
                            return (
                                <tr key={item.id}>
                                    <td>
                                        <div>
                                            <img src={`${API_URL}/imageproduct/${item.image_product}`} style={{width: "200px", height:"200px"}}/>
                                        </div>
                                    </td>
                                    <td >
                                        <div className="product-name">
                                            {item.product_name}
                                        </div>
                                    </td>
                                    <td>
                                        <div className="quantity">
                                            {item.quantity}
                                        </div>
                                    </td>
                                    <td>
                                        <div className="total-price">
                                            {this.formatterIDR.format(item.total_price)}
                                        </div>
                                    </td>
                                </tr>
                            )
                        })}
                    </div>
                </div>
                <div className="d-flex">
                    <div className="d-block list-title">
                        <p>subtotal</p>
                        <p>Shipping</p>
                        <p>Total</p>
                    </div>
                    <div className="d-block">
                        <p>{this.formatterIDR.format(this.subtotal())}</p>
                        <p>{this.formatterIDR.format(this.state.rSelected)}</p>
                        <p>{this.formatterIDR.format(this.total())}</p>
                    </div>
                </div>
                {/* <button className="btn btn-info btn-fill btn-wd">PLACE ORDER</button> */}
            </div>
        )
    }









    render(){
        // console.log(this.state.cart);
        
        return(
            <div>
                <div className="card mx-auto">
                    <div className="card-body">
                        <div className=" d-block">
                            <div className="d-flex">
                                <div className="checkout">
                                    <h1>Checkout</h1>
                                    <div className="shipping-details">
                                        <p>SHIPPING DETAILS</p>
                                    </div>
                                    <div className="address-detail">
                                        <p>{this.state.name}</p>
                                        <p>{this.state.address}</p>
                                        <p>{this.state.postalcode}</p>
                                        <p>{this.state.cityordistrict}</p>
                                        <p>{this.state.country}</p>
                                    </div>
                                    <div className="delivery-method">
                                        <p>DELIVERY METHOD</p>
                                    </div>
                                    <div className="radio-services">
                                        <p>Services</p>
                                        <ButtonGroup vertical>
                                            <Button color="primary" onClick={() => this.onRadioBtnClick(100000)} active={this.state.rSelected === 100000}>One Day Service</Button>
                                            <Button color="warning" onClick={() => this.onRadioBtnClick(50000)} active={this.state.rSelected === 50000}>Reguler</Button>
                                            <Button color="danger" onClick={() => this.onRadioBtnClick(20000)} active={this.state.rSelected === 20000}>Economic</Button>
                                        </ButtonGroup>
                                    </div>
                                    <div className="delivery-method">
                                        <p>PAYMENT USING</p>
                                    </div>
                                    <div className="radio-services">
                                        <ButtonGroup>
                                            <Button color="default" onClick={() => this.onRadioBtnClick2("VISA")} active={this.state.sSelected === "VISA"}>
                                                <img src={visa} width="100px"/>
                                            </Button>
                                            <Button color="default" onClick={() => this.onRadioBtnClick2("ATM BERSAMA")} active={this.state.sSelected === "ATM BERSAMA"}>
                                                <img src={atm_bersama} width="100px"/>
                                            </Button>
                                        </ButtonGroup>
                                    </div>
                                    <div>
                                    </div>
                                </div>
                                <div>
                                    <div className="your-order">
                                        <div>
                                            {this.renderList()}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="button-proceed mx-auto mb-5">
                                <button id="show" className="btn btn-success btn-fill btn-wd" onClick={() => this.placeOrder()}>PROCEED YOUR ORDER</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Checkout;