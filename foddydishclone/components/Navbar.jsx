import logo from '/images/logo.png'
import { Link } from 'react-router-dom'
import { ShoppingCart } from 'lucide-react'

const Navbar = () => {
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
              <li className="nav-item active">
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
              <li className="nav-item">
                <Link className="nav-link" to="/contact">Contact</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/cart"><ShoppingCart /></Link>
              </li>
            </ul>
          </div>
        </nav>

        <div className="header container text-center py-5">
          <h1 className="font-weight-bolder">Excellence Taste In Every Bite</h1>
          <p className="mt-4 ">Get ready to embark on a flavorful adventure as we bring you the best of the culinary world right to your screen. At PixBuy, we're passionate about food and committed to providing you with an exceptional culinary experience. Whether you're a seasoned chef or a novice home cook, our diverse collection of recipes, expert tips, and fascinating articles will leave you inspired and hungry for more.</p>
          <button type="button" className="btn btn-danger mt-3 px-4">Read More</button>
        </div>

      </div>
    </div>
  )
}

export default Navbar