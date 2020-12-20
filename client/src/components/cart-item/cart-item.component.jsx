import React from 'react';
//import './cart-item.styles.scss';

import {CartItemContainer, CartItemImageStyles, CartItemImageDivStyle, CartItemDetails, CartItemName, CartItemMultiple} from './cart-item.styles';

const CartItem = ({item: {imageUrl, price, name, quantity} }) => (
    <CartItemContainer>
        <CartItemImageDivStyle>
            <CartItemImageStyles src={imageUrl} alt='item' />
        </CartItemImageDivStyle>
        <CartItemDetails>
            <CartItemName>{name}</CartItemName>
            <CartItemMultiple>{quantity} x ${price}</CartItemMultiple>
        </CartItemDetails>
    </CartItemContainer>
);
export default React.memo(CartItem);