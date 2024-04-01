import React from 'react'
import logo from '../images/logo.png'
import Services from '../Components/Services'
import blog from '../images/WA-Blog-Thumbnails-Feb.png'
import menu from '../images/menu-sideimage.webp'
import project from '../images/New-Project-95.jpg'
import { ShoppingCart } from 'phosphor-react'
import { Link } from 'react-router-dom'
import Footer from '../Components/Footer'

const ServicePage = () => {
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
          <h1 class="font-weight-bolder">Services</h1>
          <p class="mt-4 ">Home / Pages /Services</p>
        </div>
      </div>

      <Services/>
      <div className="container text-center">
      <div class="row">
            <div class="col-lg-4 col-sm-12">
              <div class="card mt-3">
                <div class="card-body">
                  <div class="card-img">
                  <img src={blog} alt="" style={{ borderRadius: "50%" }}/>
                </div>
                  <h4 class="card-title mt-3">Event Planning</h4>
                  <p class="card-text">From venue selection to menu planning, we ensure a seamless and unforgettable experience for corporate events</p>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-sm-12 ">
              <div class="card mt-3">
                <div class="card-body">
                  <div class="card-img">
                  <img src={menu} alt="" style={{ borderRadius: "50%" }}/>
                </div>
                  <h4 class="card-title mt-3">Customized Menu </h4>
                  <p class="card-text"> Our experts collaborate to create unique menus that align with your brand and cater to your target audience.</p>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-sm-12 ">
              <div class="card mt-3">
                <div class="card-body">
                  <div class="card-img">
                  <img src={project} alt="" style={{ borderRadius: "50%" }}/>
                </div>
                  <h4 class="card-title mt-3">Food Consulting</h4>
                  <p class="card-text">Our team provides valuable insights and guidance in menu development and enhancing the overall experience.</p>
                </div>
              </div>
            </div>
            </div>
          </div>
          <Footer/>
    </div>
  )
}

export default ServicePage