import React from "react";
import CheckoutProduct from "../5CheckoutProduct_Comps/CheckoutProduct";
import Subtotal from "../6Subtotal_Comps/Subtotal";
import "./Checkout.css"

function Checkout() {
  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
          className="checkout__ad" alt = ""
        ></img>
        <div>
          <h2 className="checkout__title">Your Shopping Basket</h2>
          <CheckoutProduct />
        </div>
      </div>

      
      <div className="checkout__right">
        <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;
