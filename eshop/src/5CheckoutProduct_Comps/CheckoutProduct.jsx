import React from "react";
import "./CheckoutProduct.css";

function CheckoutProduct() {
  return (
    
      <div className="checkoutproduct">
        <img src = "https://images-na.ssl-images-amazon.com/images/I/71mEsHyzSCL._SL1000_.jpg" alt
        className="checkoutPage__image" ClassName="checkout__ad" />

        <div className="product__info">
          <p className="checkProduct__title">Bennett Mystic 15.6 inch Laptop Shoulder Messenger Sling Office Bag, Water Repellent Fabric for Men and Women (Blue)
          </p>
          <p className="checkoutProduct__price">
            <small>$</small>
            <strong>20</strong>
          </p>
          <div className="checkoutProduct__rating">
            ⭐⭐
          </div>
          <div>
            <button>Remove from Basket</button>
          </div>
        </div>       
       </div>
      
    
  );
}

export default CheckoutProduct;
