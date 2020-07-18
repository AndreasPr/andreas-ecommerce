import React from 'react';
import {Link} from 'react-router-dom';
import './footer.styles.css';
import mainLogo  from '../../assets/andreas.png';
import {ReactComponent as ArmourLogo}  from '../../assets/armour-logo.svg';
import {ReactComponent as CoachLogo}  from '../../assets/coach-logo.svg';
import {ReactComponent as GapLogo}  from '../../assets/gap-logo.svg';
import {ReactComponent as HilfigerLogo}  from '../../assets/hilfiger-logo.svg';

const Footer = () => (
    <footer className="footer">
        <div className="container-fluid">
            <div className="row logoForFooter">
                <div className="col-6 col-sm-6 col-md-6 col-lg-4 col-xl-2 ml-xl-auto text-center armourLogo">
                    <ArmourLogo className="logo"/>
                </div>
                <div className="col-6 col-sm-6 col-md-6 col-lg-4 col-xl-3 text-center coachLogo">
                    <CoachLogo className="logo"/>
                </div>
                <div className="col-6 col-sm-6 col-md-6 col-lg-4 col-xl-3 text-center gapLogo">
                    <GapLogo className="logo"/>
                </div>
                <div className="col-6 col-sm-6 col-md-6 col-lg-4 col-xl-2 mr-xl-auto text-center hilfigerLogo">
                    <HilfigerLogo className="logo"/>
                </div>
            </div>
            <div className="row infoForFooter">
                <div className="col-sm-12 col-md-12 col-lg-6 col-xl-2 ml-xl-auto">
                    <img src={mainLogo} alt="logo" />
                    <p>Address: 12345, Test Road, New York</p>
                    <p>Phone: 1234567890</p>
                    <p>Email: testemail@gmail.com</p>
                </div>
                <div className="col-sm-12 col-md-12 col-lg-6 col-xl-2 ml-xl-auto">
                    <h3 className="headingFooter">Information</h3>
                    <ul className="listOfFooter">
                        <li><Link to='/about' className="linksOfFooter">About us</Link></li>
                        <li><Link to='/shop' className="linksOfFooter">Shop</Link></li>
                        <li><Link to='/checkout' className="linksOfFooter">Checkout</Link></li>
                    </ul>
                </div>
                <div className="col-sm-12 col-md-12 col-lg-6 col-xl-2 ml-xl-auto">
                    <h3 className="headingFooter">Account</h3>
                    <ul className="listOfFooter">
                        <li><Link to='/signin' className="linksOfFooter">Sign Up</Link></li>
                        <li><Link to='/signin' className="linksOfFooter">Login</Link></li>
                        <li><Link to='/contact' className="linksOfFooter">Contact Us</Link></li>
                    </ul>
                </div>
                <div className="col-sm-12 col-md-12 col-lg-6 col-xl-2 mr-xl-auto">
                    <h3 className="headingFooter">Join Our Newsletter</h3>
                    <p>Get E-mail updates about our latest shop and special offers.</p>               
                    <div className="input-group mb-3">
                        <input type="text" className="form-control shadow-none" placeholder="Enter your email" id="subscribeConnection"/>
                        <div className="input-group-prepend">
                            <button className="btn btn-outline-secondary btnOfSubscribe" type="button">Subscribe</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row copyright-reserved">
                <div className="col-sm-12 col-md-6 col-lg-12 col-xl-11 ml-xl-auto">
                    <p>Copyright @2020 All rights reserved</p>
                </div>
            </div>
        </div>
    </footer>
);
export default Footer;