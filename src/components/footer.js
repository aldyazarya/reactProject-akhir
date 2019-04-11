import React from 'react';

import '../css/footer.css'

class Footer extends React.Component {
    render(){
        return (
            <div className="footer">
                <div className="container footer-content">
                    <div className=" info d-flex ">
                        <div className="aboutUs">
                            <h5> About Us</h5>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore dolore magna aliqua.</p>
                        </div>
                        <div className="newsLetter">
                            <h5>Newsletter</h5>
                            <p>Stay update with our latest</p>
                            <div className="d-flex">
                                <input className="form-control" placeholder="Enter Email" required type="email"/>
                                <button className=" btn btn-light"><i className="fa  fa-long-arrow-alt-right" aria-hidder="true"></i></button>
                            </div>
                        </div>
                        <div className="followUs">
                            <h5>Follow Us</h5>
                            <p>Let us be social</p>
                            <div className="medsos d-flex">
                                <a href="#"><i class="fab fa-facebook-f"></i></a>
                                <a href="#"><i class="fab fa-twitter"></i></a>
                                <a href="#"><i class="fab fa-instagram"></i></a>
                                <a href="#"><i class="fab fa-youtube"></i></a>
                            </div>
                        </div>
                    </div>
                    <div className="copyright text-center">
                        Copyright ©2019 All rights reserved | Aldy Azarya
                    </div>
                </div>
            </div>
        )
    }
}

export default Footer;