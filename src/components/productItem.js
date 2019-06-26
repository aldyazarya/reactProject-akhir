import React, {Component} from 'react'
import '../css/productItem.css'
import {API_URL} from '../API_URL/API_URL'
import axios from 'axios'
import {Link} from 'react-router-dom'

import buttonAddtoCart from '../images/buttonProductitem/button-add-to-cart.svg' ;
import buttonWishlist from '../images/buttonProductitem/buttonlove.svg' ;
import buttonViewmore from '../images/buttonProductitem/button-viewmore.svg' ;

import generateDataProduct from './generateDataProduct/generateDataProduct'

class productItem extends Component {

    constructor(props) {
        super(props);
        this.formatterIDR = new Intl.NumberFormat('id', {
            style: 'currency',
            currency: 'IDR',
            minimumFractionDigits: 0
          })
    }

    state = {
        products: [],
        
    }
    
    async componentDidMount(){
        await this.getProduct()
}
    
    getProduct = async () => {
        // const res = await axios.get('/getproduct')
        // console.log(res)
        const data = await generateDataProduct()
        console.log(data);
        this.setState({
            products: data
        })   
        console.log(data);

        
        
    }







    prodList = () => {
        return this.state.products.map(product => {
            return (
                <div key={product.id}>
                        <div className=" product-item">
                            <div>
                                <div className="img-product">
                                    <img src={`${API_URL}/imageproduct/${product.image_product}`} alt={product.product_name} style={{width: "245px", height: "239px" }}/>
                                </div>
                                <h6>{product.product_name}</h6>
                                <p>{this.formatterIDR.format(product.price)}</p>
                                <div className="button">
                                        <div>
                                            <Link to={"/productdetail/" + product.id}>
                                                <button className="btn btn-warning btn-fill btn-wd3">SEE PRODUCT</button>
                                            </Link>
                                        </div>
                                    
                                </div>
                            </div>
                        </div>
                   
                </div>
            )
        })
    }






    render(){
        return (
            <div>
                <div className="shop ">
                <div className="shop-body container-fluid">
                    <div className="d-flex">
                        
                            <div className="card-panel col-lg-2">
                                {/* <div className="card-body">
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
                                </div> */}
                            </div>
                        

                        <div className="productContent col-lg-10">
                            <div className="row">
                                {this.prodList()}
                            </div>
                        </div>

                    </div>
                </div>
            

                
                    {/* <Footer/> */}
                
            </div>
            </div>
        )
    }
}

export default productItem