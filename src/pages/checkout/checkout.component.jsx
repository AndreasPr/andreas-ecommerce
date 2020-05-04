import React from 'react';
//import './checkout.styles.scss';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {selectCartItems, selectCartTotal} from '../../redux/cart/cart.selectors';
import CheckoutItem from '../../components/checkout-item/checkout-item.component';
import StripeCheckoutButton from '../../components/stripe-button/stripe-button.component';
import {CheckoutPageContainer, CheckoutPageHeader, CheckoutPageHeaderBlock, 
    CheckoutPageTotal, CheckoutPageTestWarning} from './checkout.styles';

const CheckoutPage = ({cartItems, total}) => (
    <CheckoutPageContainer>
         <CheckoutPageHeader>
             <CheckoutPageHeaderBlock>
                <span>Product</span>
             </CheckoutPageHeaderBlock>
             <CheckoutPageHeaderBlock>
                <span>Description</span>
             </CheckoutPageHeaderBlock>
             <CheckoutPageHeaderBlock>
                <span>Quantity</span>
             </CheckoutPageHeaderBlock>
             <CheckoutPageHeaderBlock>
                <span>Price</span>
             </CheckoutPageHeaderBlock>
             <CheckoutPageHeaderBlock>
                <span>Remove</span>
             </CheckoutPageHeaderBlock>
         </CheckoutPageHeader>
         {
             cartItems.map(cartItem => <CheckoutItem key={cartItem.id} cartItem={cartItem} />)
         }
         <CheckoutPageTotal>
             <span>Total: ${total}</span>
         </CheckoutPageTotal>
         <CheckoutPageTestWarning>
           The following is the test credit card for your payment 
           <br/>
           4242 4242 4242 4242 - Expiration date: 01/20 - CVV: 123
         </CheckoutPageTestWarning>
         <StripeCheckoutButton price={total} />
    </CheckoutPageContainer>
); 

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    total: selectCartTotal
});

export default connect(mapStateToProps)(CheckoutPage);