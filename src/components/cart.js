import React, {Component} from 'react'
import '../css/cart.css'
import axios from 'axios'
import {API_URL} from '../API_URL/API_URL'
import cookies from 'universal-cookie'
import Swal from 'sweetalert2'
import cartEmpty from '../images/categoryimg/empty-cart-png.png'
import {Link, Redirect} from 'react-router-dom'

const cookie = new cookies()

class Cart extends Component{

    constructor(props) {
        super(props);
        this.state = {
            cart: []
        }
        this.formatterIDR = new Intl.NumberFormat('id', {
            style: 'currency',
            currency: 'IDR',
            minimumFractionDigits: 0
          })
    }


    async componentDidMount(){
       await this.getcartUser()

        
    }
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

    deleteCart = async (id) => {
        try{
            const res = axios.delete(`${API_URL}/deletecart/${id}`)

            Swal.fire({
                title: 'Are you sure?',
                text: "You won't be able to revert this!",
                type: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Yes, delete it!'
              }).then( res => {
                if (res) {
                  Swal.fire(
                    'Deleted!',
                    'Your file has been deleted.',
                    'success'
                  ).then(
                    setTimeout(function(){
                        window.location.reload()
                    }, 1000)
                  )
                }
              })


        } catch(e){
            console.log(e);
            
        }
    }

    

    

    cartList =  () => {
        if(this.state.cart.length) {
            return this.state.cart.map(item => {
                return (
                    <div>
                        <div key={item.id}>
                            <tr>
                                <td>
                                    <div className="d-flex">
                                        <div>
                                            <img src={`${API_URL}/imageproduct/${item.image_product}`} style={{width: "150px", height:"150px"}}/>
                                        </div>
                                        <div className="productdetail">
                                            <h6>{item.product_name}</h6>
                                            <p>{item.detail_product}</p>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <div className="quantity align-content-center">
                                        {item.quantity}
                                    </div>
                                </td>
                                <td>
                                    <div className="price">
                                    {this.formatterIDR.format(item.price)}
                            
                                    </div>
                                </td>
                                <td>
                                    <div className="total_price">
                                    {this.formatterIDR.format(item.total_`price)}
                                    </div>
                                </td>
                                <td>
                                    <div className="d-block button-remove">
                                    <button className="btn btn-danger btn-fill btn-wd mb-2 mx-auto" onClick={() => {this.deleteCart(item.id)}}>Remove</button>
                                    </div>
                                </td>
                            </tr>
                        </div>
                        <div>
                        </div>
                </div>
                )
            })
        }
        
    }




    render(){
        // console.log(this.state.cart);
        if(this.state.cart.length) {
            return (
                <div>
                    <div className="container">
                        <div className="card card-cart mx-auto">
                            <table className="table table-cart">
                                <thead className="thead-light">
                                    <div>
                                        <tr>
                                            <th className="productname">Product</th>
                                            <th className="quantity-head">Quantity</th>
                                            <th className="price-head">Price</th>
                                            <th className="total-head">Total</th>
                                            <th className="th-blank"></th>
    
                                        </tr>
                                    </div>
                                </thead>
                                <tbody>
                                    {this.cartList()}
                                    <tr>
                                        <div className="d-flex button-wrapper">
                                            <button className="btn btn-primary btn-fill btn-wd1">Continue to shopping</button>
                                            <Link to="/checkout">
                                                <button className="btn btn-success btn-fill btn-wd1">Checkout</button>                            
                                            </Link>
                                        </div>
                                    </tr>   
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            )

        }
        else {
            return (
                
    
                <div>
                <div className="container">
                    <div className="card-cart-empty mx-auto">
                                <div className="cartEmpty mx-auto">
                                    <img src={cartEmpty}/>
                                </div>  
                    </div>
                </div>
            </div>
            )

        }

        
    }
}

export default Cart;