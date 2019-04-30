import React, {Component} from 'react' ;
import {Link, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';

import '../css/header.css'
import logobrand from '../images/logo-boxfeatures/logo1.png';


import {
    Button,
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem } from 'reactstrap';

import {onLogoutUser} from '../action'



class Header extends Component {
    
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
          isOpen: false
        };
    }


    // componentDidMount () {
    //     (document).ready(function() {

    //         (window).scroll(function() {
        
    //             var height = ('.navbarMenu').height();
    //             var scrollTop = (window).scrollTop();
        
    //             if (scrollTop >= height - 40) {
    //                 ('.navbar').addClass('solid-nav');
    //             } else {
    //                 ('.navbar').removeClass('solid-nav');
    //             }
        
    //         });
    //     });
    // }

    toggle() {
    this.setState(({
        isOpen: !this.state.isOpen
    }));
    }



    render() {

        const {user} = this.props

        if (user.username === '') {
            return (
                <div class="navbarMenu">
                    <nav class=" container navbar navbar-expand-lg fixed-top" id="main-nav">
                        <div class="container">
                            <a href="index.html" class="navbar-brand align-self-center mr-auto p-0"><img src={logobrand} alt=""/></a>
                            {/* tombol yang akan muncul ketika layar mengecil, ini burger menu */}
                            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#Navbarcollapse" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                            {/* mendapatkan icon 3 garis dari font awesome */}
                            <span class="navbar-toggler-icon"></span>
                            </button>
                            <div class="collapse navbar-collapse" id="Navbarcollapse">
                                <ul class="nav navbar-nav ml-auto">
                                    <li class="nav-item  align-self-center">
                                        <Link className="link" to="/">
                                            <a href="#home" class="nav-link p-0">HOME</a>
                                        </Link>
                                    </li>
                                    <li class="nav-item align-self-center">
                                        <Link className="link" to="/shop">
                                            <a href="#explore-head-section" class="nav-link p-0">SHOP</a>
                                        </Link>
                                    </li>
                                    <li class="nav-item align-self-center">
                                        <Link  className="link" to="/login">
                                            <a href="#create-head-section" class="nav-link p-0">LOGIN</a>
                                        </Link>
                                    </li>
                                    <li class="nav-item align-self-center">
                                        <Link className="link" to="/register">
                                            <a href="#share-head-section" class="nav-link p-0">REGISTER</a>
                                        </Link>
                                    </li>
                                    <li class="nav-item align-self-center ">
                                        <a href="" class="nav-link p-0">
                                            <i class="fas fa-search"></i>
                                        </a>
                                    </li>

                                </ul>
                            </div>
                        </div>
                    </nav>
                </div>
            )
        } else {
            return(
                <div class="navbarMenu">
                <Navbar color="transparent" light expand="md">
                <div className="container">
                    <NavbarBrand href="/"><img src={logobrand} alt=""/></NavbarBrand>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                            <li class="nav-item  align-self-center">
                                <Link className="link" to="/">
                                    <a href="#home" class="nav-link p-0">HOME</a>
                                </Link>
                            </li>
                            <li class="nav-item align-self-center">
                                <a href="#explore-head-section" class="nav-link p-0">SHOP</a>
                            </li>
                            <li class="nav-item align-self-center">
                                <a href="" class="nav-link p-0">
                                    <i class="fas fa-shopping-cart"></i>
                                    <span>(0)</span>
                                </a>
                            </li>
                            <UncontrolledDropdown nav inNavbar>
                                <DropdownToggle nav caret>
                                    Hallo, {user.username}
                                </DropdownToggle>
                                <DropdownMenu right>
                                <DropdownItem divider />
                                <Button className="dropdown-item">
                                    Profile
                                </Button>
                                <Button className="dropdown-item" onClick={this.props.onLogoutUser}>
                                    Log out
                                </Button>
                                </DropdownMenu>
                            </UncontrolledDropdown>
                            <li class="nav-item align-self-center ">
                                <a href="" class="nav-link p-0">
                                    <i class="fas fa-search"></i>
                                </a>
                            </li>
                        </Nav>
                    </Collapse>
                </div>
            </Navbar>
            </div>
            )
        }


        
    }
}

const mapStateToProps = state => {
    return {user : state.auth}
}

export default connect (mapStateToProps, {onLogoutUser})(Header) ;