import React, {Component} from 'react'
import axios from 'axios'
import {API_URL} from '../API_URL/API_URL'
import cookies from 'universal-cookie'
import {connect} from 'react-redux'
import {addCart, addWishlist} from '../action/index'
import Swal from 'sweetalert2'
import '../css/productDetail.css'
import {Redirect} from 'react-router-dom'

const cookie = new cookies()

class productDetail extends Component {
    constructor(props) {
        super(props);
        this.formatterIDR = new Intl.NumberFormat('id', {
            style: 'currency',
            currency: 'IDR',
            minimumFractionDigits: 0
        })

    }

    state = {
        productDetail: [],
        url: '',
        products:[]
    }

    async componentDidMount() {
        this.getproductDetail()
    }

    getproductDetail = () => {
      const id = this.props.match.params.id
        axios.get(`${API_URL}/getproduct/${id}`).then(res => {
            console.log(res.data);
            this.setState({
                
                productDetail: res.data[0],
                url: `${API_URL}/imageproduct/${res.data[0].image_product}`
            })
            
        })
    }

    onAddcarts = () => {
        if(cookie.get("masihLogin") === undefined) {
          return <Redirect to="/"/>

        } else {
          const username = cookie.get("masihLogin")
          const product_id = parseInt(this.props.match.params.id)
          const quantity = parseInt(this.quantity.value)
          const price = this.state.productDetail.price
          const total_price = this.state.productDetail.price * quantity
  
          this.props.addCart(username, product_id, quantity, total_price, price)
          .then(
            Swal.fire({
              position: 'center',
              type: 'success',
              title: 'Added to your cart!',
              showConfirmButton: false,
            }).then(
              setTimeout(function(){
                window.location.replace('/cart')
            }, 3000)
            )
          )
          
        }
        // const price =this.state.productDetail.price


    }



    onAddWishlist = () => {
      const username = cookie.get("masihLogin")
      const product_id = parseInt(this.props.match.params.id)

      this.props.addWishlist(username, product_id)
    }


    render(){
        let prods = this.state.productDetail
        return (
            <div className="card mx-auto">
        <div className="container my-auto px-5">
          <div className="row">
            <div className="col-md-6 mb-4">
              <img src={this.state.url} className="img-fluid" alt="prods.product_name" style={{width: "400px"}} />
            </div>

            <div className="col-md-6 mb-4">
              <div className="p-4" style={{width:"504px"}}>
          <h1 className="my-3">{prods.product_name} </h1>
                <div className="mb-3">
                  <a href="/">
                    <span className="badge purple mr-1">{prods.category_name}</span>
                  </a>
                  <a href="/">
                    <span className="badge blue mr-1">New</span>
                  </a>
                  <a href="/">
                    <span className="badge red mr-1">Bestseller</span>
                  </a>
                </div>

                <p className="lead">

                  <span>{this.formatterIDR.format(this.state.productDetail.price)}</span>
                </p>

                <p className="lead font-weight-bold">Description</p>

                <p>
                  {prods.detail_product}
                </p>

                <form className="d-flex justify-content-left">
                  <input
                    ref={input => (this.quantity = input)}
                    type="number"
                    defaultValue="1"
                    min={0}
                    aria-label="Search"
                    className="form-control"
                    style={{ width: "100px" }}
                  />
                  <button
                    className="btn btn-primary btn-md ml-2 my-0 p"
                    onClick={this.onAddcarts}
                    type="button"
                  >
                    Add to cart
                    <i className="fas fa-shopping-cart ml-2" />
                  </button>
                  <button className="btn btn-info btn-md ml-2 my-0 p" onClick={this.onAddWishlist}> Add to Wishlist</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
        )
    }

}
export default connect(null, {addCart, addWishlist}) (productDetail)