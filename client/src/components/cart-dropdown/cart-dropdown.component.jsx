import React from 'react';
import CartItem from '../cart-item/cart-item.component';
import {connect} from 'react-redux';
import {selectCartItems, selectCartTotal} from '../../redux/cart/cart.selectors';
import {createStructuredSelector} from 'reselect';
import {withRouter} from 'react-router-dom';
import {toggleCartHidden} from '../../redux/cart/cart.actions';
import {CartdropdownContainer, CartitemsStyles, EmptymessageStyles, CheckoutButtonStyles, CheckoutPageTotal, CheckoutTotal, CheckoutTotalPrice} from './cart-dropdown.styles';
import {useTranslation} from 'react-i18next';

const CartDropdown = ({cartItems, history, dispatch, total}) => {
 
    const [t] = useTranslation('common');
    return (
        <CartdropdownContainer>
            <CartitemsStyles>
                {
                    cartItems.length 
                    ?
                    cartItems.map(cartItem => (
                        <CartItem key={cartItem.id} item={cartItem} />
                    ))
                    :
                    <EmptymessageStyles>{t('cart_dropdown.empty_message')}</EmptymessageStyles>
                }
            </CartitemsStyles>
            <CheckoutPageTotal>
                <CheckoutTotal>{t('cart_dropdown.total')}:</CheckoutTotal>  <CheckoutTotalPrice>${total}</CheckoutTotalPrice>
            </CheckoutPageTotal>
            <CheckoutButtonStyles onClick={() => {history.push('/checkout'); dispatch(toggleCartHidden());}}>
            {t('cart_dropdown.checkout_button')}</CheckoutButtonStyles>
        </CartdropdownContainer>
    );
};

const mapStateToProps = createStructuredSelector ({
    cartItems: selectCartItems,
    total: selectCartTotal
});

export default withRouter(connect(mapStateToProps)(CartDropdown));