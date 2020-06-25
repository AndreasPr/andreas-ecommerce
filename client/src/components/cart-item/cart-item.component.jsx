import React from 'react';
//import './cart-item.styles.scss';

import {CartItemContainer, CartItemImageStyles, CartItemDetails, CartItemName} from './cart-item.styles';

const CartItem = ({item: {imageUrl, price, name, quantity} }) => (
    <CartItemContainer>
        <CartItemImageStyles src={imageUrl} alt='item' />
        <CartItemDetails>
            <CartItemName>{name}</CartItemName>
            <span>{quantity} x ${price}</span>
        </CartItemDetails>
    </CartItemContainer>
);
export default React.memo(CartItem);