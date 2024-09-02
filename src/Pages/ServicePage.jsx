import logo from '/images/logo.png'
import Services from '@/Components/Services'
import blog from '/images/WA-Blog-Thumbnails-Feb.png'
import menu from '/images/menu-sideimage.webp'
import project from '/images/New-Project-95.jpg'
import { Link } from 'react-router-dom'
import Footer from '@/Components/Footer'
import { ShoppingCart } from 'lucide-react'

const ServicePage = () => {
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
          <li className="nav-item active">
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
          <li className="nav-item ">
            <Link className="nav-link" to="/contact">Contact</Link>
          </li>
          <li className="nav-item">
              <Link className="nav-link" to="/cart"><ShoppingCart size={21}/></Link>
            </li>
        </ul>
      </div>
    </nav>

        <div className="header container text-center py-5">
          <h1 className="font-weight-bolder">Services</h1>
          <p className="mt-4 ">Home / Pages /Services</p>
        </div>
      </div>

      <Services/>
      <div classNameName="container text-center">
      <div className="row">
            <div className="col-lg-4 col-sm-12">
              <div className="card mt-3">
                <div className="card-body">
                  <div className="card-img">
                  <img src={blog} alt="" style={{ borderRadius: "50%" }}/>
                </div>
                  <h4 className="card-title mt-3">Event Planning</h4>
                  <p className="card-text">From venue selection to menu planning, we ensure a seamless and unforgettable experience for corporate events</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-sm-12 ">
              <div className="card mt-3">
                <div className="card-body">
                  <div className="card-img">
                  <img src={menu} alt="" style={{ borderRadius: "50%" }}/>
                </div>
                  <h4 className="card-title mt-3">Customized Menu </h4>
                  <p className="card-text"> Our experts collaborate to create unique menus that align with your brand and cater to your target audience.</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-sm-12 ">
              <div className="card mt-3">
                <div className="card-body">
                  <div className="card-img">
                  <img src={project} alt="" style={{ borderRadius: "50%" }}/>
                </div>
                  <h4 className="card-title mt-3">Food Consulting</h4>
                  <p className="card-text">Our team provides valuable insights and guidance in menu development and enhancing the overall experience.</p>
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