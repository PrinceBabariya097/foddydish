import React, { useContext } from "react";
import { ShopContext } from "../../context/shop-context";
import './cart.css'

export const CartItem = (props) => {
  const { id, productName, price, productImage } = props.data;
  const { cartItems, addToCart, removeFromCart, updateCartItemCount } =
    useContext(ShopContext);

  return (

    <div className="cartItem">
      <img src={productImage} />
      <div className="description">
        <p>
          <b>{productName}</b>
        </p>
        <p> Price: INR{price}</p>
        <div className="countHandler">
           <i class="fas fa-minus minus" onClick={() => removeFromCart(id)}></i> 
          <input className="number"
            value={cartItems[id]}
            onChange={(e) => updateCartItemCount(Number(e.target.value), id)}
          />
          <i class="fas fa-plus plus" onClick={() => addToCart(id)}></i>
        </div>
      </div>
    </div>
  );
};