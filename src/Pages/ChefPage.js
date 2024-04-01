import React from 'react'
import logo from '../images/logo.png'
import Chef from '../Components/Chef'
import {Link} from 'react-router-dom';
import { ShoppingCart } from 'phosphor-react'
import Footer from '../Components/Footer';

const ChefPage = () => {
  return (
    <div>
       <div class="container-fluid navbar-bg">
  <nav class="navbar navbar-expand-lg navbar-dark bg-transparent container-fluid p-3">
      <Link class="navbar-brand" to="/" >
       
        <div class="logo">
      <img src={logo} alt="" />
        </div>
      </Link>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ml-auto text-center">
          <li class="nav-item">
            <Link class="nav-link" to="/">Home <span class="sr-only">(current)</span></Link>
          </li>
          <li class="nav-item active">
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
    <h1 class="font-weight-bolder">Our Chefs</h1>
    <p class="mt-4 ">Home / Pages /Chefs</p>
  </div>
</div>
    <Chef/>
    <Footer/>
    </div>
  )
}

export default ChefPage