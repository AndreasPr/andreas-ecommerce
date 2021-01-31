import React from "react";
import ReactDOM from "react-dom";

const paypalstyle = {
  height: 40,
  layout: 'vertical',
  color: 'gold',
  shape: 'rect'
};

const PayPalButton = window.paypal.Buttons.driver("react", { React, ReactDOM });
const PaypalButton = ({price}) => {
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
    return actions.order.capture();
  };

  return (
    <PayPalButton style={paypalstyle}
      createOrder={(data, actions) => createOrder(data, actions)}
      onApprove={(data, actions) => onApprove(data, actions)}
    />
  );

};
export default PaypalButton;