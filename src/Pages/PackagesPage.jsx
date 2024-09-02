import logo from '/images/logo.png'
import { Link } from 'react-router-dom'
import Footer from '@/Components/Footer'
import { ShoppingCart } from 'lucide-react'
import SearchNav from '@/components/SearchNav'
import Pagination from '@/components/Pagination'

 const PackagesPage = () => {
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
                <Link className="nav-link" to="/cart"><ShoppingCart size={21} /></Link>
              </li>
            </ul>
          </div>
        </nav>
        <div className="header container text-center py-5">
          <h1 className="text-center">Our Packages</h1>
          <p className="text-center">Discover our thoughtfully curated packages designed to suit a variety of occasions and budgets.</p>
        </div>

      </div>
      <div>
        <SearchNav/>
        <Pagination/>
      </div>
      <Footer />
    </div>
  )
}

export default PackagesPage