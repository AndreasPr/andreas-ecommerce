import React from 'react';
import {Link} from 'react-router-dom';
import mainLogo  from '../../assets/andreas.png';
import {connect} from 'react-redux';
// import CartIcon from '../cart-icon/cart-icon.component';
// import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import {createStructuredSelector} from 'reselect';
import {selectCurrentUser} from '../../redux/user/user.selectors';
import {selectCartHidden} from '../../redux/cart/cart.selectors';
import {signOutStart} from '../../redux/user/user.actions';
import './header.styles.css';
// import {HeaderContainer, LogoContainer, OptionsContainer, OptionLink} from './header.styles';

import {useTranslation} from 'react-i18next';

const Header = ({currentUser, hidden, signOutStart}) => {

    const [t, i18n] = useTranslation('common');

    return (
        <nav className="navbar navbar-expand-md navbar-dark" >
            <Link to="/" className="navbar-brand"><img src={mainLogo} alt="logo"/></Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsingNavbar" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="collapsingNavbar">
                <ul className="navbar-nav ml-auto listOfMenu">
                    <li className="nav-item">
                        <Link to="/shop" className="nav-link" data-toggle="collapse" data-target=".navbar-collapse.show">{t('header.nav1')}</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/contact" className="nav-link" data-toggle="collapse" data-target=".navbar-collapse.show">{t('header.nav2')}</Link>
                    </li>
                    <li className="nav-item">
                    {
                        currentUser 
                        ?
                        <Link to="/" onClick={signOutStart} className="nav-link" data-toggle="collapse" data-target=".navbar-collapse.show">{t('header.nav4')}</Link>
                        :
                        <Link to="/signin" className="nav-link" data-toggle="collapse" data-target=".navbar-collapse.show">{t('header.nav3')}</Link>
                    }  
                    </li>
                </ul>
            </div>
        </nav>

// <HeaderContainer>
//         <LogoContainer to='/'>
//             <Logo className='logo'/>
//         </LogoContainer>
//         <OptionsContainer>
//             <OptionLink to='/shop'>
//                 SHOP
//             </OptionLink>
//             <OptionLink to='/contact'>
//                 CONTACT
//             </OptionLink>
//             {
//                 currentUser 
//                 ?
//                 <OptionLink as='div' onClick={signOutStart}> SIGN OUT</OptionLink>
//                 :
//                 <OptionLink to='/signin'>SIGN IN</OptionLink>
//             }  
//             <CartIcon />    
//         </OptionsContainer>
//         {
//             hidden ? null : <CartDropdown />
//         }
//     </HeaderContainer>
    )
    };

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
});

const mapDispatchToProps = dispatch => ({
    signOutStart: () => dispatch(signOutStart())
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);