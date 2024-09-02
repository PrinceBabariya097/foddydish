import React from 'react'
import logo from '../images/logo.png'
import { Link } from 'react-router-dom'
import { ShoppingCart } from 'phosphor-react'
import {PRODUCTS} from './products'
import  Product  from './Product'
import './product.css'
import Footer from '../Components/Footer'
import productDatas from '../data/data.json'

export const PackagesPage = () => {
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
        <div class=" navbar-collapse" id="navbarNav">
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
      <h1 class="text-center">Our Packages</h1>
        <p class="text-center">Discover our thoughtfully curated packages designed to suit a variety of occasions and budgets.</p>
      </div>

      </div>
      <div className='products'>
        {
          productDatas.map((product) => (
            <Product/>
          ))
        }
      </div>
      <Footer/>
    </div>
  )
}
