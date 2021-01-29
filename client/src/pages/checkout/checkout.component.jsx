import React, {useState, useCallback, useEffect, lazy} from 'react';
import './checkout.styles.css';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {selectCartItems, selectCartTotal} from '../../redux/cart/cart.selectors';
import CheckoutItem from '../../components/checkout-item/checkout-item.component';
import StripeCheckoutButton from '../../components/stripe-button/stripe-button.component';
// import PaypalButton from '../../components/paypal-button/paypal-button.component';
import SuccessfulMessage from '../../components/successful-message/successful-message.component';
import {useTranslation} from 'react-i18next';
const PaypalButton = lazy(() => import('../../components/paypal-button/paypal-button.component'));

const CheckoutPage = ({cartItems, total}) => {
    const [visibility, setVisibility] = useState(false);

    const onSuccessPayment = useCallback(() => {
        setVisibility(true);
    },[]);

    useEffect(() => {
        setTimeout(() => {
            setVisibility(false);
        }, 10000);
    }, [visibility]);

    const [t] = useTranslation('common');
    return(
    <div className="container-fluid containerCheckout">
        <div className="row headerCheckout">
            <div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4">{t('checkout.product')}</div>
            <div className="col-12 col-sm-12 col-md-3 col-lg-3 col-xl-3">{t('checkout.description')}</div>
            <div className="col-12 col-sm-12 col-md-2 col-lg-2 col-xl-2">{t('checkout.quantity')}</div>
            <div className="col-12 col-sm-12 col-md-2 col-lg-2 col-xl-2">{t('checkout.price')}</div>
            <div className="col-12 col-sm-12 col-md-1 col-lg-1 col-xl-1">{t('checkout.remove')}</div>
        </div>
            {
                cartItems.map(cartItem => 
                (
                    <CheckoutItem key={cartItem.id} cartItem={cartItem} />
                ))
            }
            
        <div className="row">
            <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 text-center">
                {
                    visibility ? <SuccessfulMessage content="Successful Payment! Thank you very much!"/> : null
                }
            </div>
        </div>
        <div className="row">
            <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 text-right totalPrice">
                <span>Total: </span>
                <span>${total}</span>
            </div>
        </div>
        <div className="row">
            <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 text-right stripeButton">
                <StripeCheckoutButton price={total} onSuccessPayment={onSuccessPayment}/>
            </div>
        </div>
        <div className="row">
            <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 paypalButton">
                <div className="paypalContainer">
                <PaypalButton price={total} />
                </div>
            </div>
        </div>
        <div className="row">
            <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 text-center infoCard">
                {t('checkout.content_payment_credit_card')}
            </div>
        </div>
        <div className="row">
            <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 text-center infoCard">
                {t('checkout.content_payment_paypal')}
            </div>
        </div>
    </div>
); 
};

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    total: selectCartTotal
});

export default connect(mapStateToProps)(CheckoutPage);