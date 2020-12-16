import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';
import {useTranslation} from 'react-i18next';

const StripeCheckoutButton = ({price}) => {
    const [t] = useTranslation('common');
    const priceForStripe = price * 100;
    const publishablekey = 'pk_test_6Jv1xPx0eczcDZMfmVVqipdN00dFQ2B4n7';

    const onToken = token => {
        axios({
            url: '/payment',
            method: 'post',
            data: {
                amount: priceForStripe,
                token
            }
        }).then(response => {
            alert("Payment success");
        }).catch(error => {
            // console.log('Payment error: ', JSON.parse(error));
            alert("Error with the payment. Please try again.");
        });
    };

    return (
        <StripeCheckout 
        label={t('stripe.paynowbut')}
        name='Andreas Ecommerce'
        billingAddress
        shippingAddress
        image='https://svgshare.com/i/CUz.svg'
        description={`Your total is $${price}`}
        amount={priceForStripe}
        panelLabel='Pay Now'
        token={onToken}
        stripeKey={publishablekey}
        />
    );
};
export default StripeCheckoutButton;