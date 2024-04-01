import React from 'react'
import logo from '../images/logo.png'
import About from '../Components/About'
import healthy from '../images/healthy-food-png-image.png';
import { Link } from 'react-router-dom'
import { ShoppingCart } from 'phosphor-react'
import Footer from '../Components/Footer';

const AboutPage = () => {
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
          <li class="nav-item">
            <Link class="nav-link" to="/services">Services</Link>
          </li>
          <li class="nav-item active">
            <Link class="nav-link" to="/about">About Us</Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link" to="/packages">Our Package</Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link" to="/chefs">Our Chef</Link>
          </li>
          <li class="nav-item ">
            <Link class="nav-link" to="/contact">Contact</Link>
          </li>
          <li class="nav-item">
              <Link class="nav-link" to="/cart"><ShoppingCart size={21}/></Link>
            </li>
        </ul>
      </div>
    </nav>

        <div class="header container text-center py-5">
          <h1 class="font-weight-bolder">About Us</h1>
          <p class="mt-4 ">Home / Pages /About</p>
        </div>
      </div>
      <About/>
      <div class="row mt-5">
            <div class="col-lg-4 col-sm-12">
                <img src={healthy} alt="" width="100%"/>
              </div>
            
          <div class="col-lg-1 col-sm-12"></div>
          <div class="col-lg-7 p-lg-5">
            <h2 class="mx-lg-5">Experiences That Leave a Lasting Impression</h2>
            <p class="mx-lg-5 mt-lg-5">At Foodydish, we are fueled by a passion for gastronomy and a commitment to delivering unforgettable moments for our valued clients. Our team of devoted professionals brings together a wealth of expertise and boundless creativity to create extraordinary experiences that leave a lasting impression.</p>
            <p class="mx-lg-5">With years of experience and an unwavering attention to detail, we have perfected the art of curating bespoke events and culinary journeys. Whether it's an intimate gathering or a grand celebration, we take immense pride in orchestrating every element with precision and elegance.</p>
            </div>
          </div>
          <Footer/>
    </div>
  )
}

export default AboutPage