import React, { useRef, useEffect, useContext } from "react";
import { ShopContext } from "../context/shop-context";


export const Paypal = () => {

    const paypal = useRef();
    

  useEffect(() => {
    window.paypal
      .Buttons({
        createOrder: (data, actions, err) => {
          return actions.order.create({
            intent: "CAPTURE",
            purchase_units: [
              {
                description: "Cool looking table",
                amount: {
                  currency_code: "USD",
                  value: 200.00,
                },
              },
            ],
          });
        },
        onApprove: async (data, actions) => {
          const order = await actions.order.capture();
          console.log(order);
        },
        onError: (err) => {
          console.log(err);
        },
      })
      .render(paypal.current);
     }, []);
  return (
    <div>
        <div>
            <div ref={paypal}></div>
        </div>
    </div>
  )
}
