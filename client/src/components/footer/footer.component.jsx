import React from 'react';
import {Link} from 'react-router-dom';
import './footer.styles.css';
import mainLogo  from '../../assets/andreas.png';
// import {ReactComponent as ArmourLogo}  from '../../assets/armour-logo.svg';
// import {ReactComponent as CoachLogo}  from '../../assets/coach-logo.svg';
// import {ReactComponent as GapLogo}  from '../../assets/gap-logo.svg';
// import {ReactComponent as HilfigerLogo}  from '../../assets/hilfiger-logo.svg';
import Subscription from '../subscription/subscription.component';
import {useTranslation} from 'react-i18next';

const Footer = () =>{ 
    const [t] = useTranslation('common');
return(
    <footer className="footer">
        <div className="container-fluid">
            <div className="row logoForFooter">
                <div className="col-6 col-sm-6 col-md-6 col-lg-4 col-xl-2 ml-xl-auto text-center armourLogo">
                     {/* <ArmourLogo className="logo"/> */}
                </div>
                <div className="col-6 col-sm-6 col-md-6 col-lg-4 col-xl-3 text-center coachLogo">
                    {/* <CoachLogo className="logo"/> */}
                </div>
                <div className="col-6 col-sm-6 col-md-6 col-lg-4 col-xl-3 text-center gapLogo">
                    {/* <GapLogo className="logo"/> */}
                </div>
                <div className="col-6 col-sm-6 col-md-6 col-lg-4 col-xl-2 mr-xl-auto text-center hilfigerLogo">
                    {/* <HilfigerLogo className="logo"/> */}
                </div>
            </div>
            <div className="row infoForFooter">
                <div className="col-sm-12 col-md-12 col-lg-6 col-xl-2 ml-xl-auto">
                    <img src={mainLogo} alt="logo" width="200px" height="80px"/>
                    <p>{t('footer.contact_details.address')}: 12345, Test Road, New York</p>
                    <p>{t('footer.contact_details.phone')}: 1234567890</p>
                    <p>{t('footer.contact_details.email')}: testemail@gmail.com</p>
                </div>
                <div className="col-sm-12 col-md-12 col-lg-6 col-xl-2 ml-xl-auto">
                    <h3 className="headingFooter">{t('footer.information.heading')}</h3>
                    <ul className="listOfFooter">
                        <li><Link to='/about' className="linksOfFooter">{t('footer.information.aboutus')}</Link></li>
                        <li><Link to='/shop' className="linksOfFooter">{t('footer.information.shop')}</Link></li>
                        <li><Link to='/checkout' className="linksOfFooter">{t('footer.information.checkout')}</Link></li>
                    </ul>
                </div>
                <div className="col-sm-12 col-md-12 col-lg-6 col-xl-2 ml-xl-auto">
                    <h3 className="headingFooter">{t('footer.account.heading')}</h3>
                    <ul className="listOfFooter">
                        <li><Link to='/signin' className="linksOfFooter">{t('footer.account.signup')}</Link></li>
                        <li><Link to='/signin' className="linksOfFooter">{t('footer.account.login')}</Link></li>
                        <li><Link to='/contact' className="linksOfFooter">{t('footer.account.contactus')}</Link></li>
                    </ul>
                </div>
                <div className="col-sm-12 col-md-12 col-lg-6 col-xl-2 mr-xl-auto">
                    <h3 className="headingFooter">{t('footer.newsletter.heading')}</h3>
                    <p>{t('footer.newsletter.content')}</p> 
                    <div className="input-group mb-3"> 
                    <Subscription/>     
                    </div>                
                </div>
            </div>
            <div className="row copyright-reserved">
                <div className="col-sm-12 col-md-6 col-lg-12 col-xl-11 ml-xl-auto">
                    <p>{t('footer.footer_bottom.copyrights')}</p>
                </div>
            </div>
        </div>
    </footer>
);
};
export default Footer;