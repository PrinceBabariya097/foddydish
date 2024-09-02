import chef1 from '/images/chef1.jpg'
import chef2 from '/images/chef2.jpg'
import chef3 from '/images/chef3.jpeg'

const Chef = () => {
  return (
    <div><div className="chefs container text-center mt-5" id="chefs">
        
    <h2 className='text-2xl font-bold'>Our Chefs</h2>
    <p className="mt-2 my-4">Explore Our Services and Satisfy Your Culinary Cravings!</p>
    <div className="row mx-auto">
      <div className="col-lg-4 col-sm-12 flex justify-center">
        <div className="card mt-3">
          <div className="card-body">
            <div className="card-img">
             <img src={chef1} alt="" style={{ borderRadius: "50%" }}/>
            </div>
            <h4 className="card-title mt-3">Mr Alif Emran</h4>
            <p className="card-text">Mid. Level Chef</p>
            <div className="socials">
              <i className="fa fa-facebook" aria-hidden="true"></i>
              <i className="fa fa-twitter" aria-hidden="true"></i>
              <i className="fa fa-linkedin" aria-hidden="true"></i>
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-4 col-sm-12 flex justify-center ">
        <div className="card mt-3">
          <div className="card-body">
            <div className="card-img">
            <img src={chef2} alt="" style={{ borderRadius: "50%" }}/>
          </div>
            <h4 className="card-title mt-3">Mr. Doller</h4>
            <p className="card-text">Senior. Level Chef</p>
            <div className="socials">
              <i className="fa fa-facebook" aria-hidden="true"></i>
              <i className="fa fa-twitter" aria-hidden="true"></i>
              <i className="fa fa-linkedin" aria-hidden="true"></i>
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-4 col-sm-12 flex justify-center ">
        <div className="card mt-3">
          <div className="card-body">
            <div className="card-img">
            <img src={chef3} alt="" style={{ borderRadius: "50%" }}/>
          </div>
            <h4 className="card-title mt-3">Mr Riyad Islam</h4>
            <p className="card-text">Mid. Level Chef</p>
            <div className="socials">
              <i className="fa fa-facebook" aria-hidden="true"></i>
              <i className="fa fa-twitter" aria-hidden="true"></i>
              <i className="fa fa-linkedin" aria-hidden="true"></i>
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