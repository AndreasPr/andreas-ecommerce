import React from 'react';
import './checkout-item.styles.scss';
import {connect} from 'react-redux';
import {clearItemFromCart, addItem, removeItem} from '../../redux/cart/cart.actions';
import {CheckoutItemContainer, CheckoutItemImageStylesContainer, CheckoutItemImageStyles, 
    CheckoutItemNameStyles, CheckoutItemQuantityStyles, 
    CheckoutItemArrowStyles, CheckoutItemValueStyles, CheckoutItemPriceStyles, 
    CheckoutItemRemoveButtonStyles} from './checkout-item.styles';

const CheckoutItem = ({cartItem, clearItem, addItem, removeItem}) => {
    const {name, imageUrl, price, quantity} = cartItem;
    return(
    <CheckoutItemContainer>
        <CheckoutItemImageStylesContainer>
            <CheckoutItemImageStyles src={imageUrl} alt='item'/>
        </CheckoutItemImageStylesContainer>
            <CheckoutItemNameStyles>{name}</CheckoutItemNameStyles>
            <CheckoutItemQuantityStyles>
                <CheckoutItemArrowStyles onClick = {() => removeItem(cartItem)}>&#10094;</CheckoutItemArrowStyles>
                    <CheckoutItemValueStyles>{quantity}</CheckoutItemValueStyles>
                <CheckoutItemArrowStyles onClick={() => addItem(cartItem)}>&#10095;</CheckoutItemArrowStyles>
            </CheckoutItemQuantityStyles>
            <CheckoutItemPriceStyles>{price}</CheckoutItemPriceStyles>
        <CheckoutItemRemoveButtonStyles onClick={() => clearItem(cartItem)}>&#10005;</CheckoutItemRemoveButtonStyles>
    </CheckoutItemContainer>
)};

const mapDispatchToProps = dispatch => ({
    clearItem: (item) => dispatch(clearItemFromCart(item)),
    addItem: (item) => dispatch(addItem(item)),
    removeItem: (item) => dispatch(removeItem(item))
});

export default connect(null, mapDispatchToProps)(CheckoutItem);