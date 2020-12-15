import React, {useRef, useEffect} from 'react';
import './paypal-button.styles.css';

const PaypalButton = ({price}) => {
    const paypal = useRef();
    const pricePaypal = price; 
    console.log(pricePaypal);
    useEffect(() => {
      window.paypal.Buttons({
          createOrder: (data, actions, err) => {
            return actions.order.create({
              intent: "CAPTURE",
              purchase_units: [
                {
                  description: "Testing description",
                  amount: {
                    currency_code: "USD",
                    value: pricePaypal,
                  },
                },
              ],
            });
          },
          onApprove: async (data, actions) => {
            const order = await actions.order.capture();
            alert("You have successfully completed the transaction.")
            console.log(order);
          },
          onError: (err) => {
            console.log(err);
          },
          style: {
            height: 45,
            layout: 'vertical',
            color: 'gold',
            shape: 'pill'
          }
        })
        .render(paypal.current);
    }, []);
  
    return(
        <div className="paypalButton" ref={paypal}></div>
    );
};
export default PaypalButton;