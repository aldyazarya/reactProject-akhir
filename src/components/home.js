import React from 'react';
import '../css/home.css' ;

import addtoBagbutton from '../images/addtoBagbutton.svg';
import Item from '../images/banner-img.svg' ;
import Readystocks from '../images/logo-boxfeatures/f-icon1.png' ;
import ReturnPolicy from '../images/logo-boxfeatures/f-icon2.png';
import support from '../images/logo-boxfeatures/f-icon3.png';
import SecurePayment from '../images/logo-boxfeatures/f-icon4.png' ;

import Categoryimg1 from '../images/categoryimg/category-img1.svg';
import Categoryimg2 from '../images/categoryimg/category-img2.svg';
import Categoryimg3 from '../images/categoryimg/category-img3.svg';
import Categoryimg4 from '../images/categoryimg/category-img4.svg';
import Categoryimg5 from '../images/categoryimg/category-img5.svg';

import Footer from './footer';




class Home extends React.Component {
    render() {
        return (
            <div className="bg">
                {/* carousel Start */}
                <div className="container">
                    <div className="slideCarousel">
                      
                        <div id="carouselExampleSlidesOnly" class="carousel slide" data-ride="carousel">
                            <div class="carousel-inner">
                                <div class="carousel-item active">
                                    <div className="d-flex">
                                        <div className="detailProduct  my-auto mx-auto col-5">
                                            <h1>Detail Product</h1>
                                            <p>
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                                                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                            </p>
                                            <a href="#"><img src={addtoBagbutton} alt="test"/><span> ADD TO BAG</span></a>
                                        </div>
                                        <div className="item my-auto mx-auto">
                                            <img src={Item} alt=""/>
                                        </div>
                                    </div>
                                </div>
                                <div class="carousel-item">
                                    <div className="d-flex">
                                        <div className="detailProduct  my-auto mx-auto col-5">
                                            <h1>Camera Analog</h1>
                                            <p>
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                                                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                            </p>
                                            <a href="#"><img src={addtoBagbutton} alt="test"/><span> ADD TO BAG</span></a>
                                            

                                        </div>
                                        <div className="item my-auto mx-auto">
                                            <img src={Item} alt=""/>
                                        </div>
                                    </div>     
                                </div>

                            </div>
                        </div>
                    </div>
                </div> 
                {/* carousel end */}

                {/* Box Features Start*/}
                <div className="container Box-features">
                    <div className="card mx-auto">
                        <div className="card-body d-flex">
                            <div className="Ready-stocks text-center">
                                <div className="content text-center mx-auto">
                                    <img src={Readystocks} alt=""/>
                                    <h5>Ready Stocks</h5>
                                    <p>Free Shipping on all order</p>
                                </div>
                            </div>
                            <div className="Return-policy text-center">
                                <div className="content text-center mx-auto">
                                    <img src={ReturnPolicy} alt=""/>
                                    <h5>Return Policy</h5>
                                    <p>Free Shipping on all order</p>
                                </div>
                            </div>
                            <div className="support text-center">
                                <div className="content text-center mx-auto">
                                    <img src={support} alt=""/>
                                    <h5>24/7 Support</h5>
                                    <p>Free Shipping on all order</p>
                                </div>
                            </div>
                            <div className="Secure-payment text-center">
                                <div className="content text-center mx-auto">
                                    <img src={SecurePayment} alt=""/>
                                    <h5>Secure Payment</h5>
                                    <p>Free Shipping on all order</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                {/* Box Features End*/}

                {/* category image */}
                <div className="container Category-image">
                    <div className="d-flex">
                        <div className="Category-image1">
                            <div className="d-flex">
                                <div className="forhover1">
                                    <div>
                                        <a href="#"><img className="Categoryimg1" src={Categoryimg1}/></a>
                                    </div>
                                    <div className="cameraAnalog text-center">
                                        <a href="#">Analog Camera</a>
                                    </div>
                                </div>
                                <div className="forhover2">
                                    <div>
                                        <a href=""><img className="Categoryimg2" src={Categoryimg2}/></a>
                                    </div>
                                    <div className="rollFilm text-center">
                                        <a href="#">Roll Film & Accessories</a>
                                    </div>

                                </div>
                            </div>
                            <div className="d-flex">
                                <div className="forhover3">
                                    <div>
                                        <a href=""><img className="Categoryimg3" src={Categoryimg3}/></a>
                                    </div>
                                    <div className="Lenses text-center">
                                        <a href="#">Lenses & Accessories</a>
                                    </div>
                                </div>
                                <div className="forhover4">
                                    <div>
                                        <a href=""><img className="Categoryimg4" src={Categoryimg4}/></a>
                                    </div>
                                    <div className="digitalCamera text-center">
                                        <a href="#">Digital Camera</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="Category-image2">
                            <div className="forhover5">
                                <div>
                                    <a href=""><img className="Categoryimg5" src={Categoryimg5}/></a>
                                </div>
                                <div className="videoCamera text-center">
                                    <a href="#">Video Camera</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Latest Products */}
                <div className="container Latest-products">
                    <div className="teks text-center">
                        <h1>Latest Products</h1>
                        <p>deskripsi untuk latest produkdeskripsi untuk latest produkdeskripsi untuk latest produkdeskripsi untuk latest produk</p>
                    </div>
                    <div className="content-products text-center">
                        <h1>isi products</h1>
                    </div>
                </div>

                {/* exclusive hot deals */}
                <div className="exclusiveHotDeals text-center">
                    <div className="teks text-center">
                        <h1>Exclusive Hot Deal Ends Soon</h1>
                        <p>Who are in extremely love with eco friendly system.</p>
                    </div>
                    <div className="timeCard">
                        <div className="card mx-auto">
                            <div className="card-body d-flex">
                                <div className="days text-center">
                                    <div className="content text-center mx-auto">
                                        <h5>29</h5>
                                        <p>Days</p>
                                    </div>
                                </div>
                                <div className="hours text-center">
                                    <div className="content text-center mx-auto">
                                        <h5>22</h5>
                                        <p>Hours</p>
                                    </div>
                                </div>
                                <div className="minutes text-center">
                                    <div className="content text-center mx-auto">
                                        <h5>22</h5>
                                        <p>Mins</p>
                                    </div>
                                </div>
                                <div className="seconds text-center">
                                    <div className="content text-center mx-auto">
                                        <h5>22</h5>
                                        <p>Secs</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <button className="shopNow text-center">SHOP NOW</button>
                </div>
            
                <Footer/>
            </div>

        )
    }
}

export default Home;
