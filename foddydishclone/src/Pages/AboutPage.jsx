import logo from '/images/logo.png'
import About from '@/Components/About'
import healthy from '/images/healthy-food-png-image.png';
import { Link } from 'react-router-dom'
import Footer from '@/Components/Footer';
import { ShoppingCart } from 'lucide-react';

const AboutPage = () => {
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
          <li className="nav-item active">
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
              <Link className="nav-link" to="/cart"><ShoppingCart/></Link>
            </li>
        </ul>
      </div>
    </nav>

        <div className="header container text-center py-5">
          <h1 className="font-weight-bolder">About Us</h1>
          <p className="mt-4 ">Home / Pages /About</p>
        </div>
      </div>
      <About/>
      <div className="row mt-5">
            <div className="col-lg-4 col-sm-12">
                <img src={healthy} alt="" width="100%"/>
              </div>
            
          <div className="col-lg-1 col-sm-12"></div>
          <div className="col-lg-7 p-lg-5">
            <h2 className="mx-lg-5">Experiences That Leave a Lasting Impression</h2>
            <p className="mx-lg-5 mt-lg-5">At Foodydish, we are fueled by a passion for gastronomy and a commitment to delivering unforgettable moments for our valued clients. Our team of devoted professionals brings together a wealth of expertise and boundless creativity to create extraordinary experiences that leave a lasting impression.</p>
            <p className="mx-lg-5">With years of experience and an unwavering attention to detail, we have perfected the art of curating bespoke events and culinary journeys. Whether it's an intimate gathering or a grand celebration, we take immense pride in orchestrating every element with precision and elegance.</p>
            </div>
          </div>
          <Footer/>
    </div>
  )
}

export default AboutPage