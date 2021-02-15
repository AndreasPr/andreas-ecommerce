import React from "react";
import { PayPalButton } from "react-paypal-button-v2";

const paypalstyle = {
  height: 40,
  layout: 'vertical',
  color: 'gold',
  shape: 'rect'
};

const PaypalButton = ({price, onSuccessPayment}) => {
  const createOrder = (data, actions) =>{
    return actions.order.create({
      intent: "CAPTURE",
      purchase_units: [
        {
          description: "Testing description",
          amount: {
            currency_code: "USD",
            value: price,
          },
        },
      ],
    });
  };

  const onApprove = (data, actions) => {
    return actions.order.capture().then(function(details){
      onSuccessPayment();
    });
  };

  return (
    <PayPalButton style={paypalstyle}
      createOrder={(data, actions) => createOrder(data, actions)}
      onApprove={(data, actions) => onApprove(data, actions)}
      options={{
        clientId:  "AVOqdzLHxwCAZLYa_qGOIXmy2ihOE-zB4j7r7upRhqZX-OyNWRZQOEQH6kJ1mc644aoMc8QC015hdl_u",
        currency: "USD",
        disableFunding: "credit,card"
      }}
    />
  );

};
export default PaypalButton;