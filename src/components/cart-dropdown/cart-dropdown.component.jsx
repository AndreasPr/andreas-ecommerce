import React from 'react';
//import './cart-dropdown.styles.scss';
//import CustomButton from '../custom-button/custom-button.component';
import CartItem from '../cart-item/cart-item.component';
import {connect} from 'react-redux';
import {selectCartItems} from '../../redux/cart/cart.selectors';
import {createStructuredSelector} from 'reselect';
import {withRouter} from 'react-router-dom';
import {toggleCartHidden} from '../../redux/cart/cart.actions';
import {CartdropdownContainer, CartitemsStyles, EmptymessageStyles, CheckoutButtonStyles} from './cart-dropdown.styles';

const CartDropdown = ({cartItems, history, dispatch}) => (
    <CartdropdownContainer>
        <CartitemsStyles>
            {
                cartItems.length 
                ?
                cartItems.map(cartItem => (
                    <CartItem key={cartItem.id} item={cartItem} />
                ))
                :
                <EmptymessageStyles>Your cart is empty</EmptymessageStyles>
            }
        </CartitemsStyles>
        <CheckoutButtonStyles onClick={() => {history.push('/checkout'); dispatch(toggleCartHidden());}}>
            GO TO CHECKOUT</CheckoutButtonStyles>
    </CartdropdownContainer>
);

const mapStateToProps = createStructuredSelector ({
    cartItems: selectCartItems
});

export default withRouter(connect(mapStateToProps)(CartDropdown));