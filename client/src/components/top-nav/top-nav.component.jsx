import React, {useState, useEffect, useRef} from 'react';
import './top-nav.styles.css';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {selectCartHidden} from '../../redux/cart/cart.selectors';
import ReactCountryFlag from "react-country-flag";
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';

const TopNav = ({hidden}) => {



return(
    <div className="topNav">
        <div className="container-fluid">
            <div className="row">


                <div className="col-6 col-sm-6 col-md-4 col-lg-3 ml-lg-auto col-xl-3 text-right email"> 
                    <i className="fas fa-envelope"></i> testemail@gmail.com
                </div>


                <div className="col-4 col-sm-4 col-md-3 mr-md-auto col-lg-3 mr-lg-auto col-xl-3 mr-xl-auto text-left telephone"> 
                    <i className="fas fa-phone-volume"></i><a className="telephoneLink" href="tel:123-456-7890">+1234567890</a>
                </div>


                <div className="col-md-2 col-lg-2 col-xl-3 text-right social-media"> 
                    <a href="https://www.facebook.com/"><i className="fab fa-facebook-square"></i></a> 
                    <a href="https://www.instagram.com/"><i className="fab fa-instagram"></i></a>
                    <a href="https://www.linkedin.com/"><i className="fab fa-linkedin"></i></a>
                    <a href="https://pinterest.com/"><i className="fab fa-pinterest"></i></a>
                </div>


                <div className="col-md-2 col-lg-2 col-xl-2 text-left language"> 
                    <div className="dropdown">
                        <a className="nav-link dropdown-toggle" href="https://flag-sprites.com" id="dropdown09" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <ReactCountryFlag countryCode="US" svg /> English</a>
                        <div className="dropdown-menu" aria-labelledby="dropdown09">
                            <a className="dropdown-item" href="#fr"><ReactCountryFlag countryCode="FR" svg /> French</a>
                        </div>
                    </div>
                </div>

                <div className="col-1 col-sm-2 col-md-1 col-lg-1 col-xl-1 text-left cart-icon" >
                    <CartIcon />   

                    {
                        hidden ? null : <CartDropdown />
                    }
                </div>

            </div>
        </div>
    </div>

);
};

const mapStateToProps = createStructuredSelector({
    hidden: selectCartHidden
});

export default connect(mapStateToProps)(TopNav);