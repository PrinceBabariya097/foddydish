import React from 'react'
import chef1 from '../images/chef1.jpg'
import chef2 from '../images/chef2.jpg'
import chef3 from '../images/chef3.jpeg'

const Chef = () => {
  return (
    <div><div class="chefs container text-center mt-5" id="chefs">
        
    <h2>Our Chefs</h2>
    <p class="mt-2">Explore Our Services and Satisfy Your Culinary Cravings!</p>
    <div class="row">
      <div class="col-lg-4 col-sm-12">
        <div class="card mt-3">
          <div class="card-body">
            <div class="card-img">
             <img src={chef1} alt="" style={{ borderRadius: "50%" }}/>
            </div>
            <h4 class="card-title mt-3">Mr Alif Emran</h4>
            <p class="card-text">Mid. Level Chef</p>
            <div class="socials">
              <i class="fa fa-facebook" aria-hidden="true"></i>
              <i class="fa fa-twitter" aria-hidden="true"></i>
              <i class="fa fa-linkedin" aria-hidden="true"></i>
            </div>
          </div>
        </div>
      </div>
      <div class="col-lg-4 col-sm-12 ">
        <div class="card mt-3">
          <div class="card-body">
            <div class="card-img">
            <img src={chef2} alt="" style={{ borderRadius: "50%" }}/>
          </div>
            <h4 class="card-title mt-3">Mr. Doller</h4>
            <p class="card-text">Senior. Level Chef</p>
            <div class="socials">
              <i class="fa fa-facebook" aria-hidden="true"></i>
              <i class="fa fa-twitter" aria-hidden="true"></i>
              <i class="fa fa-linkedin" aria-hidden="true"></i>
            </div>
          </div>
        </div>
      </div>
      <div class="col-lg-4 col-sm-12 ">
        <div class="card mt-3">
          <div class="card-body">
            <div class="card-img">
            <img src={chef3} alt="" style={{ borderRadius: "50%" }}/>
          </div>
            <h4 class="card-title mt-3">Mr Riyad Islam</h4>
            <p class="card-text">Mid. Level Chef</p>
            <div class="socials">
              <i class="fa fa-facebook" aria-hidden="true"></i>
              <i class="fa fa-twitter" aria-hidden="true"></i>
              <i class="fa fa-linkedin" aria-hidden="true"></i>
            </div>
          </div>
        </div>
      </div>  
    </div>
  </div>
  </div>
  )
}

export default Chef