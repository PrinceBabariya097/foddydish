import React, { useContext } from 'react'
import { ShopContext } from '../context/shop-context'
import './product.css'
import Footer from '../Components/Footer';

const theme = {
  media: {mobile: "768px", tab: "998px"}
}

export const Product = (props) => {
  const { id, productName, price, productImage } = props.data;
  const { addToCart, cartItems } = useContext(ShopContext);

  const cartItemAmount = cartItems[id]


  return (
    <div className="card">
      <img src={productImage} className='card-image'/>
      <div className="card-content">
        <p className='card-title'>
          {productName}
        </p>
        <p card-subtitle> INR {price}</p>
      </div>
      <button className="addToCartBttn" onClick={() => addToCart(id)}>
        Add To Menu {cartItemAmount > 0 && <>({cartItemAmount})</>}
      </button>
    </div>
    
  );
  
};
