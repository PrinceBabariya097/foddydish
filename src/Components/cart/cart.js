import React , { useContext } from 'react'
import logo from '../../images/logo.png'
import { Link } from 'react-router-dom'
import { ShoppingCart } from 'phosphor-react'
import { ShopContext } from "../../context/shop-context";
import { PRODUCTS } from "../../Pages/products";
import { CartItem } from "./cart-item";
import { useNavigate } from "react-router-dom";
import './cart.css'

export const Cart = () => {
  const {cartItems, getTotalCartAmount, checkout} = useContext(ShopContext);
  const totalAmount = getTotalCartAmount();
  const navigate = useNavigate();
  const amount = []


  return (
    <div>
      <div class="container-fluid navbar-bg">
      
      <nav class="navbar navbar-expand-lg navbar-dark bg-transparent container-fluid p-3">
        <Link class="navbar-brand" to="/" >
      
          <div class="logo">
        <img src={logo} alt=""/>
          </div>
        </Link>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ml-auto text-center">
            <li class="nav-item active">
              <Link class="nav-link" to="/">Home <span class="sr-only">(current)</span></Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/services">Services</Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/about">About Us</Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/packages">Our Package</Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/chefs">Our Chef</Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/contact">Contact</Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/cart"><ShoppingCart size={21}/></Link>
            </li>
          </ul>
        </div>
      </nav>

    <div class="header container text-center py-5">
      
    <h1>Yout menu</h1>
    </div>

      </div>

              <div className='cart'>
              <div className='item-name'>
                {PRODUCTS.map((product) => {
                if (cartItems[product.id] !== 0){
                  return<CartItem data={product}></CartItem>
                }
              })}
              </div>
            </div>
      

      {totalAmount > 0 ? (
        <div className="checkout">
          <p> Subtotal: INR {totalAmount} </p>
          <button onClick={() => navigate("/packages")}> Continue  </button>
          <button onClick={() => { checkout(); navigate("/PayPal"); }}> {" "} Checkout {" "} </button>
        </div>
      ) : (
        <h1 className='emptytitle'> Your Menu is Empty</h1>
      )}
    </div>
    
  )
}
