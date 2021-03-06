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
import {useTranslation} from 'react-i18next';

const Header = ({currentUser, hidden, signOutStart}) => {

    const [t] = useTranslation('common');

    return (
        <nav className="navbar navbar-expand-md navbar-dark" >
            <Link to="/" className="navbar-brand"><img src={mainLogo} alt="logo" width="200px" height="80px"/></Link>
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