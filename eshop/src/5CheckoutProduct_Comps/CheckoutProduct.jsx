import React from "react";
import "./CheckoutProduct.css";
import { useStateValue } from "../StateProvider";

function CheckoutProduct({ id, image, title, price, rating }) {
  const[{basket}, dispatch] = useStateValue();
  const removeFromBasket = () => {
    dispatch ({
      type: "REMOVE_FROM_BASKET",
      id:id,
    })
  }
  return (

    <div className="checkoutProduct">
      <img src={image} alt=""
        className="checkoutProduct__image" />

      <div className="checkoutProduct__info">
        <p className="checkoutProduct__title">{title}
        </p>
        <p className="checkoutProduct__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="checkoutProduct__rating">
          {Array(rating)
            .fill()
            .map((i) => (                      //can also be written without the (_,i)
              <p key={i}>⭐</p> // win + ; to use emojis 
            ))}
        </div>

        <button onClick={removeFromBasket} className="checkoutproduct_btn">Remove from Basket</button>

      </div>
    </div>


  );
}

export default CheckoutProduct;
