import logo from '/images/logo.png'
import { Link } from 'react-router-dom'
import Footer from '@/Components/Footer'
import { ShoppingCart } from 'lucide-react'
const ContactPage = () => {
  return (
    <div>
       <div className="container-fluid navbar-bg">
  <nav className="navbar navbar-expand-lg navbar-dark bg-transparent container-fluid p-3">
      <Link className="navbar-brand" to="/" >
       
        <div className="logo">
      <img src={logo} alt="" />
        </div>
      </Link>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className=" navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ml-auto text-center">
          <li className="nav-item">
            <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/services">Services</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/about">About Us</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/packages">Our Package</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/chefs">Our Chef</Link>
          </li>
          <li className="nav-item active">
            <Link className="nav-link" to="/contact">Contact</Link>
          </li>
          <li className="nav-item">
              <Link className="nav-link" to="/cart"><ShoppingCart size={21}/></Link>
            </li>
        </ul>
      </div>
    </nav>

  <div className="header container text-center py-5">
    <h1 className="font-weight-bolder">Contact Us</h1>
    <p className="mt-4 ">Home / Pages /Contact</p>
  </div>
</div>
<div className="contact container mt-5">
        <h2 className="text-center">Let's Connect and Serve You Better!</h2>
        <div className="container">
          <div className="row mt-5">
            <div className="col-lg-4 bg-danger text-white p-5">
              
                <h5>Call Us</h5>
                <p className="mb-5"><i className="fa fa-phone" aria-hidden="true"> +0123 345 6789</i></p>
                <h5>Email Us</h5>
                <p className="mb-5"><i className="fa fa-envelope-o" aria-hidden="true"> info@Foodydish.com</i></p>
             
                <h5>Office Address</h5>
                <p className="mb-5"><i className="fa fa-location-arrow" aria-hidden="true"> Science City, Ahmedabad, Gujrat, India</i></p>
             
                <h5>Follow Us</h5>
                <div className="socials">
                  <i className="fa fa-facebook" aria-hidden="true"></i>
                  <i className="fa fa-twitter" aria-hidden="true"></i>
                  <i className="fa fa-linkedin" aria-hidden="true"></i>
                  <i className="fa fa-instagram" aria-hidden="true"></i>         
              </div>
          </div>
          <div className="col-lg-8 col-md-12">
            <p className="mb-4">We value your feedback, inquiries, and suggestions. Please feel free to get in touch with us through the following channels</p>
            <form>
                <div className="row g-3">
                    <div className="col-md-6">
                        <div className="form-floating">
                            <input type="text" className="form-control" id="name" placeholder="Your Name"/>
                            <label htmlFor="name"></label>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="form-floating">
                            <input type="email" className="form-control" id="email" placeholder="Your Email"/>
                            <label htmlFor="email"></label>
                        </div>
                    </div>
                    <div className="col-12">
                        <div className="form-floating">
                            <input type="text" className="form-control" id="subject" placeholder="Subject"/>
                            <label htmlFor="subject"></label>
                        </div>
                    </div>
                    <div className="col-12">
                        <div className="form-floating">
                            <textarea className="form-control" placeholder="Leave a message here" id="message" style={{ height: "200px" }}></textarea>
                            <label htmlFor="message"></label>
                        </div>
                    </div>
                    <div className="col-12">
                        <button className="btn btn-danger rounded-pill" type="submit">Send Message</button>
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