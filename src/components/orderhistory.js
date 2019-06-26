import React, {Component} from 'react'
import '../css/orderhistory.css'
import axios from 'axios'
import {API_URL} from '../API_URL/API_URL'
import cookies from 'universal-cookie'
import Swal from 'sweetalert2'

const cookie = new cookies()


class orderHistory extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            ordersfinish: [],
            orderswaitingpayment: [],
            file: '',
            imagePreviewUrl: '',
        }
        this.formatterIDR = new Intl.NumberFormat('id', {
            style: 'currency',
            currency: 'IDR',
            minimumFractionDigits: 0
          })
        this._handleImageChange = this._handleImageChange.bind(this);
        this._handleSubmit = this._handleSubmit.bind(this);
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
        this.getOrdernotPaid()
        this.getOrderPaid()
    }
    _handleSubmit(e) {
        e.preventDefault();
        // TODO: do something with -> this.state.file
    }

    getOrdernotPaid = async () => {
        const res = await  axios.get(`${API_URL}/shownotpaid/${cookie.get("masihLogin")}`)
        // console.log(res.data);
        this.setState({
            orderswaitingpayment: res.data
        })
    }
    getOrderPaid = async () => {
        const res = await  axios.get(`${API_URL}/showpaid/${cookie.get("masihLogin")}`)
        // console.log(res.data);
        this.setState({
            ordersfinish: res.data
        })
    }

    uploadPaymentreceipt = async (id) => {
        const payment_receipt = await this.image.files[0]
            const formData2 = new FormData()
            formData2.append('payment_receipt', payment_receipt)

            const res = await axios.patch(`${API_URL}/paymentreceipt/${id}`, formData2, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            })
            console.log(res);
            
        
    }

    renderPayment = () => {
        if(this.state.orderswaitingpayment.length) {
            
            return this.state.orderswaitingpayment.map(item => {
                if(item.services === 100000) {
                    item.services = "One Day Services"
                } else if (item.services === 50000){
                    item.services = "Regular"
                } else if (item.services === 20000 ) {
                    item.services = "Economic"
                }
                {
                    let {imagePreviewUrl} = this.state;
                    let $imagePreview = null;
                    if (imagePreviewUrl) {
                    $imagePreview = (<img src={imagePreviewUrl} width="200px" height="200px"/>);
                    }   
                    return (
                        <div key={item.id}className="list-payment-waiting d-flex">
                            <div className="list-order2">
                                <p>ORDER ID-{item.id}</p>
                                <p>{item.updatedAt}</p>
                                <p>{item.services}</p>
                                <p>{item.payment}</p>
                                <p>{this.formatterIDR.format(item.subtotal)}</p>
                                <p>{item.shipping_status}</p>
                            </div>
                            <div>
                                <form onSubmit={this._handleSubmit}>
                                    <input type="file" onChange={this._handleImageChange} ref={input => this.image = input} />
                                </form>
                                <div className="showAvatar">
                                    {$imagePreview}
                                </div>
                                <button className="btn btn-primary btn-fill btn-uploadpayment" onClick={() => {this.uploadPaymentreceipt(item.id)}}>UPLOAD PAYMENT RECEIPT</button>
                            </div>
                        </div>

                    )
                }
                
            })
        }
    }

    renderOrder = () => {
        if(this.state.ordersfinish.length) {
            return this.state.ordersfinish.map(item => {
                if(item.services === 100000) {
                    item.services = "One Day Services"
                } else if (item.services === 50000){
                    item.services = "Regular"
                } else if (item.services === 20000 ) {
                    item.services = "Economic"
                }
                return (
                    <div className="list-order">
                        <p>ORDER ID-{item.id}</p>
                        <p>{item.updatedAt}</p>
                        <p>{item.services}</p>
                        <p>{item.shipping_status}</p>
                    </div>
                )
            })
        } else {
            return
        }
    }

    
    
    
    
    render(){
        // console.log(this.state.orderswaitingpayment);
        
        return (
            <div>
                <div className="col-md-12">
                <div className="card">
                    <div className="header">
                        <h4>Order History</h4>
                    </div>
                    <div className="content">
                        <div className="title-order">
                            YOUR ORDER
                        </div>
                        {/* mapping order */}
                        {this.renderOrder()}
                        
                        <div className="title-order">
                            PAYMENT WAITING
                        </div>
                        <div>
                            {/* mapping untuk order detail */}
                            {this.renderPayment()}
                            
                        </div>
                    </div>
                </div>
            </div>
            </div>
        )
    }
}

export default orderHistory;