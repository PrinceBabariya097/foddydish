import React from 'react'
import logo from '../images/logo.png'
import { Link } from 'react-router-dom'
import { ShoppingCart } from 'phosphor-react'

const Navbar = () => {
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
      <h1 class="font-weight-bolder">Excellence Taste In Every Bite</h1>
      <p class="mt-4 ">Get ready to embark on a flavorful adventure as we bring you the best of the culinary world right to your screen. At PixBuy, we're passionate about food and committed to providing you with an exceptional culinary experience. Whether you're a seasoned chef or a novice home cook, our diverse collection of recipes, expert tips, and fascinating articles will leave you inspired and hungry for more.</p>
      <button type="button" class="btn btn-danger mt-3 px-4">Read More</button>
    </div>

  </div>
    </div>
  )
}

export default Navbar