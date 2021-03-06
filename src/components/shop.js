import React from 'react';
import axios from 'axios'

import Footer from '../components/footer'
import generateDataProduct from './generateDataProduct/generateDataProduct'
// import productItem from './productItem'
import {API_URL} from '../API_URL/API_URL'
import cookies from 'universal-cookie'
import '../css/shop.css';
import buttonAddtoCart from '../images/buttonProductitem/button-add-to-cart.svg' ;
import buttonWishlist from '../images/buttonProductitem/buttonlove.svg' ;
import buttonViewmore from '../images/buttonProductitem/button-viewmore.svg' ;
import {addCart} from '../action/index'
import {connect} from 'react-redux'
import productItem from '../components/productItem'
import {Link} from 'react-router-dom'
// import {addCart} from '../action/index'


const cookie = new cookies()

class Shop extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            products: [],
            productname: '',
            url: '',
            productDetail: []
        }
        this.formatterIDR = new Intl.NumberFormat('id', {
            style: 'currency',
            currency: 'IDR',
            minimumFractionDigits: 0
          })
    }



    async componentDidMount() {
        const data = await generateDataProduct()
        console.log(data);
        this.setState({
            products: data
        })   
        console.log(data);



    }

    f1 = ()=> {
        const click = document.getElementById('button')
        console.log(click.value);
    }

    addCart = (username, product_id, quantity, total_price ) => {
        return async dispatch=>{
            const {products} = this.state
            if(products.length !== 0) {
                var {
                    id, price
                } =products[0]
            } 
            console.log(id);
            
            this.f1()
            
            // const click = document.getElementById('button')
            // click.value
            try{
                const res = await axios.post(`${API_URL}/cart/add`, {
                    username: cookie.get("masihLogin"),
                    product_id: id,
                    quantity: 1,
                    total_price: price
                }) 
                console.log(res);

                
                
    
            } catch(e) {
                console.log(e);
            }
        
        }
    }

    
    




    renderList = () => {
        // this.getid()
        // console.log(this.state.products[0].id);
        
        
        if(this.state.products.length) {
            return this.state.products.map(item => {
                return (
                    <div key={item.id}>
                        <div className=" product-item card">
                            <div className="card-body">
                                <div className="img-product">
                                    <img src={`${API_URL}/imageproduct/${item.image_product}`} alt={item.product_name} style={{width: "245px", height: "239px"}}/>
                                </div>
                                <h6>{item.product_name}</h6>
                                <p>{this.formatterIDR.format(item.price)}</p>
                                <div className="d-flex">
                                    <button id='button' value= {item.id} type="button" key={item.id} onClick={this.addCart()} >
                                        {/* <Link to="/productdetail" key={item.id}> */}
                                        <img src={buttonAddtoCart} alt="button"></img>
                                        {/* </Link> */}
                                    </button>
                                    
                                    
                                    
                                    <a href="#">
                                        <img src={buttonWishlist} alt="button"></img>
                                    </a>
                                    <a href="#">
                                        <img src={buttonViewmore} alt="button"></img>
                                    </a>
                                </div>
                            </div>
                        </div>   
                    </div>
                )
            })
        }
    }

    // renderList = () => {
    //     // return (
    //     //     <productItem/>
    //     // )
    //     this.props.detailProduct()
    // }






    render (){

        
        return (
            <div className="shop ">
                <div className="shop-body container-fluid">
                    <div className="d-flex">
                        
                            <div className="card col-lg-2">
                                <div className="card-body">
                                    <div className="panel-group" id="accordion">
                                        <div className="panel panel-default">
                                            <div className="panel-heading">
                                                <h4 className="panel-title">
                                                    <a data-toggle="collapse" data-parent="#accordion" href="#collapse1"> Analog Camera</a>
                                                </h4>
                                            </div>
                                            <div id="collapse1" className="panel-collapse collapse in">
                                                <div className="panel-body">
                                                    <ul class="list-group">
                                                        <li class="list-group-item"><a href="#"> Large Format</a></li>
                                                        <li class="list-group-item"><a href="#"> Single Lens Reflects (SLR)</a></li>
                                                        <li class="list-group-item"><a href="#"> Rangefinder</a></li>
                                                        <li class="list-group-item"><a href="#"> Point and Shoot</a></li>
                                                        <li class="list-group-item"><a href="#"> Lomography</a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="panel panel-default">
                                            <div className="panel-heading">
                                                <h4 className="panel-title">
                                                    <a data-toggle="collapse" data-parent="#accordion" href="#collapse2"> Roll film & Accessories</a>
                                                </h4>    
                                            </div>
                                            <div id="collapse2" className="panel-collapse collapse in">
                                                <div className="panel-body">
                                                    <ul class="list-group">
                                                        <li class="list-group-item"><a href="#"> Color Film</a></li>
                                                        <li class="list-group-item"><a href="#"> BW Film</a></li>
                                                        <li class="list-group-item"><a href="#"> Instant Film & Disposable Camera</a></li>
                                                        <li class="list-group-item"><a href="#"> Chemical & Accessories</a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="panel panel-default">
                                            <div className="panel-heading">
                                                <h4 className="panel-title">
                                                    <a data-toggle="collapse" data-parent="#accordion" href="#collapse3"> Digital Camera</a>
                                                </h4>    
                                            </div>
                                            <div id="collapse3" className="panel-collapse collapse in">
                                                <div className="panel-body">
                                                    <ul class="list-group">
                                                        <li class="list-group-item"><a href="#"> DSLR</a></li>
                                                        <li class="list-group-item"><a href="#"> Mirrorless</a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="panel panel-default">
                                            <div className="panel-heading">
                                                <h4 className="panel-title">
                                                    <a data-toggle="collapse" data-parent="#accordion" href="#collapse4"> Lenses & Accessories</a>
                                                </h4>    
                                            </div>
                                            <div id="collapse4" className="panel-collapse collapse in">
                                                <div className="panel-body">
                                                    <ul class="list-group">
                                                        <li class="list-group-item"><a href="#"> Lenses</a></li>
                                                        <li class="list-group-item"><a href="#"> Tripod & Monopod</a></li>
                                                        <li class="list-group-item"><a href="#"> Filter Lens</a></li>
                                                        <li class="list-group-item"><a href="#"> Batteries & Charger</a></li>
                                                        <li class="list-group-item"><a href="#"> Camera Bags & Straps</a></li>
                                                        <li class="list-group-item"><a href="#"> Studio Lighting & Flashes</a></li>
                                                        <li class="list-group-item"><a href="#"> Other Accesories</a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="panel panel-default">
                                            <div className="panel-heading">
                                                <h4 className="panel-title">
                                                    <a data-toggle="collapse" data-parent="#accordion" href="#collapse5"> Video Camera</a>
                                                </h4>    
                                            </div>
                                            <div id="collapse5" className="panel-collapse collapse in">
                                                <div className="panel-body">
                                                    <ul class="list-group">
                                                        <li class="list-group-item"><a href="#"> Camcorder</a></li>
                                                        <li class="list-group-item"><a href="#"> Drones & Aerial Imaging</a></li>
                                                        <li class="list-group-item"><a href="#"> Action Camera & Accessories</a></li>
                                                        <li class="list-group-item"><a href="#"> Others Accessories</a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="panel-heading">
                                            <h4 className="panel-title">
                                                <a data-toggle="collapse" data-parent="#accordion" href="#"> HOT DEALS</a>
                                            </h4>    
                                        </div>
                                    </div>
                                </div>
                            </div>
                        

                        <div className="productContent col-lg-10">
                            <div className="row">
                                {this.renderList()}
                            </div>
                        </div>

                    </div>
                </div>
            

                
                    {/* <Footer/> */}
                
            </div>
        
        )
    }
}

export default Shop