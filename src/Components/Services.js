import React from 'react'
import catering from '../images/catering.jpg'
import online from '../images/online-order.avif'
import delivery from  '../images/fast-delivery.png'

const Services = () => {
  return (
    <div>
      <div class="service container text-center mt-5" id="services"> 
        <h2>Our Services</h2>
        <p class="mt-2">Explore Our Services and Satisfy Your Culinary Cravings!</p>
        <div class="row">
          <div class="col-lg-4 col-sm-12">
            <div class="card mt-3">
              <div class="card-body">
                <div class="card-img">
                <img src={catering}alt="" style={{ borderRadius: "50%" }}/>
              </div>
                <h4 class="card-title mt-3">Catering Service</h4>
                <p class="card-text">Indulge in our exceptional catering service, where culinary artistry meets impeccable service. </p>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-sm-12 ">
            <div class="card mt-3">
              <div class="card-body">
                <div class="card-img">
                <img src={online} alt="" style={{ borderRadius: "50%" }}/>
              </div>
                <h4 class="card-title mt-3">Online Booking</h4>
                <p class="card-text">Experience the convenience of our online booking system, designed to make planning your next event a breeze.</p>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-sm-12 ">
            <div class="card mt-3">
              <div class="card-body">
                <div class="card-img">
                <img src={delivery} alt="" style={{ borderRadius: "50%" }}/>
              </div>
                <h4 class="card-title mt-3">Home Delivery</h4>
                <p class="card-text">Sit back, relax, and let us handle the rest, as we deliver a delightful culinary experience straight to your door.</p>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  )
}

export default Services