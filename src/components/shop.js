import React from 'react';

import Footer from '../components/footer'

import '../css/shop.css';
import buttonAddtoCart from '../images/buttonProductitem/button-add-to-cart.svg' ;
import buttonWishlist from '../images/buttonProductitem/buttonlove.svg' ;
import buttonViewmore from '../images/buttonProductitem/button-viewmore.svg' ;



class Shop extends React.Component {
    render (){
        return (
            <div className="shop">
                <div className="shop-body">
                    <div className="d-flex">
                        <div>
                            <div className="card">
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
                        </div>

                        <div className="productContent">
                            <div className="d-flex">
                                <div className=" product-item card">
                                    <div className="card-body">
                                        <div className="img-product"> img</div>
                                        <h6>Canon EOS 1500D Kit EF-S 18-55mm IS II</h6>
                                        <p>Rp 6.330.000</p>
                                        <div className="d-flex">
                                            <a href="#">
                                                <img src={buttonAddtoCart} alt="button"></img>
                                            </a>
                                            <a href="#">
                                                <img src={buttonWishlist} alt="button"></img>
                                            </a>
                                            <a href="#">
                                                <img src={buttonViewmore} alt="button"></img>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className=" product-item card">
                                    <div className="card-body">
                                        <div className="img-product"> img</div>
                                        <h6>Canon EOS 1500D Kit EF-S 18-55mm IS II</h6>
                                        <p>Rp 6.330.000</p>
                                        <div className="d-flex">
                                            <a href="#">
                                                <img src={buttonAddtoCart} alt="button"></img>
                                            </a>
                                            <a href="#">
                                                <img src={buttonWishlist} alt="button"></img>
                                            </a>
                                            <a href="#">
                                                <img src={buttonViewmore} alt="button"></img>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className=" product-item card">
                                    <div className="card-body">
                                        <div className="img-product"> img</div>
                                        <h6>Canon EOS 1500D Kit EF-S 18-55mm IS II</h6>
                                        <p>Rp 6.330.000</p>
                                        <div className="d-flex">
                                            <a href="#">
                                                <img src={buttonAddtoCart} alt="button"></img>
                                            </a>
                                            <a href="#">
                                                <img src={buttonWishlist} alt="button"></img>
                                            </a>
                                            <a href="#">
                                                <img src={buttonViewmore} alt="button"></img>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className=" product-item card">
                                    <div className="card-body">
                                        <div className="img-product"> img</div>
                                        <h6>Canon EOS 1500D Kit EF-S 18-55mm IS II</h6>
                                        <p>Rp 6.330.000</p>
                                        <div className="d-flex">
                                            <a href="#">
                                                <img src={buttonAddtoCart} alt="button"></img>
                                            </a>
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
                        </div>

                    </div>
                </div>
            

                
                    <Footer/>
                
            </div>
        
        )
    }
}

export default Shop;