import React from 'react'
import logo from '../images/logo.png'
import { Link } from 'react-router-dom'
import { ShoppingCart } from 'phosphor-react'
import Footer from '../Components/Footer'

const ContactPage = () => {
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
          <li class="nav-item">
            <Link class="nav-link" to="/about">About Us</Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link" to="/packages">Our Package</Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link" to="/chefs">Our Chef</Link>
          </li>
          <li class="nav-item active">
            <Link class="nav-link" to="/contact">Contact</Link>
          </li>
          <li class="nav-item">
              <Link class="nav-link" to="/cart"><ShoppingCart size={21}/></Link>
            </li>
        </ul>
      </div>
    </nav>

  <div class="header container text-center py-5">
    <h1 class="font-weight-bolder">Contact Us</h1>
    <p class="mt-4 ">Home / Pages /Contact</p>
  </div>
</div>
<div class="contact container mt-5">
        <h2 class="text-center">Let's Connect and Serve You Better!</h2>
        <div class="container">
          <div class="row mt-5">
            <div class="col-lg-4 bg-danger text-white p-5">
              
                <h5>Call Us</h5>
                <p class="mb-5"><i class="fa fa-phone" aria-hidden="true"> +0123 345 6789</i></p>
                <h5>Email Us</h5>
                <p class="mb-5"><i class="fa fa-envelope-o" aria-hidden="true"> info@Foodydish.com</i></p>
             
                <h5>Office Address</h5>
                <p class="mb-5"><i class="fa fa-location-arrow" aria-hidden="true"> Science City, Ahmedabad, Gujrat, India</i></p>
             
                <h5>Follow Us</h5>
                <div class="socials">
                  <i class="fa fa-facebook" aria-hidden="true"></i>
                  <i class="fa fa-twitter" aria-hidden="true"></i>
                  <i class="fa fa-linkedin" aria-hidden="true"></i>
                  <i class="fa fa-instagram" aria-hidden="true"></i>         
              </div>
          </div>
          <div class="col-lg-8 col-md-12">
            <p class="mb-4">We value your feedback, inquiries, and suggestions. Please feel free to get in touch with us through the following channels</p>
            <form>
                <div class="row g-3">
                    <div class="col-md-6">
                        <div class="form-floating">
                            <input type="text" class="form-control" id="name" placeholder="Your Name"/>
                            <label for="name"></label>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="form-floating">
                            <input type="email" class="form-control" id="email" placeholder="Your Email"/>
                            <label for="email"></label>
                        </div>
                    </div>
                    <div class="col-12">
                        <div class="form-floating">
                            <input type="text" class="form-control" id="subject" placeholder="Subject"/>
                            <label for="subject"></label>
                        </div>
                    </div>
                    <div class="col-12">
                        <div class="form-floating">
                            <textarea class="form-control" placeholder="Leave a message here" id="message" style={{ height: "200px" }}></textarea>
                            <label for="message"></label>
                        </div>
                    </div>
                    <div class="col-12">
                        <button class="btn btn-danger rounded-pill" type="submit">Send Message</button>
                    </div>
                </div>
            </form>
        </div>
        </div>
      </div>
      </div>
      <Footer/>
    </div>
  )
}

export default ContactPage