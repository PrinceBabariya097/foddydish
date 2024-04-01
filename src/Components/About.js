import React from 'react'
import vegan from '../images/Vegan-Food-PNG-Free-Download.png'

const About = () => {
  return (
    <div>
       <div class="about-us mt-5" id="about">
        <h1 class="text-center mt-5">About Us</h1>
        <p class="text-center">Creating extraordinary moments through exceptional experiences and a passion for gastronomy.</p>
        <div class="row mt-5">
          <div class="col-lg-7 p-lg-5">
            <h2 class="mx-lg-5">Get 100% Satisfaction</h2>
            <p class="mx-lg-5 mt-lg-5">At our core, we are driven by a love for gastronomy and a desire to create memorable moments for our clients. Our team of dedicated professionals brings together a wealth of expertise and creativity to craft extraordinary experiences that leave a lasting impression.</p>
            <p class="mx-lg-5">With years of experience and a keen eye for detail, we have honed our skills in curating bespoke events and culinary journeys. From intimate gatherings to grand celebrations, we take pride in orchestrating every element with precision and elegance.</p>
            <button type="button" class="btn btn-danger btn-lg mx-lg-5">Get Started <i class="fa fa-arrow-right" aria-hidden="true"></i></button>
            </div>
        <div class="col-lg-1 col-sm-12"></div>
          <div class="col-lg-4 col-sm-12">
            <img src={vegan} alt="" width="100%"/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About