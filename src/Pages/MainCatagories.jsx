import Loader from '@/components/Loader'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import useFetch from '@/hooks/useFetch'
import { Link } from 'react-router-dom'
import logo from '/images/logo.png'
import { ShoppingCart } from 'lucide-react'
import Footer from '@/components/Footer'


const MainCatagories = () => {
  const { data, isLoading, error } = useFetch({
    url: 'api/pagination',
  })  

  if (isLoading) {
    return <Loader />
  }

  if (error) {
    return <div>{error}</div>
  }

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
      <div className='grid grid-cols-4 gap-5 mt-7 mx-5 '>
        {
          data?.map((item) => (
            <Card key={item._id}>
              <CardHeader>
                <img src={item.image} alt={item.name} className='object-cover w-full h-[270px]' />
                <CardTitle className='mt-3'>{item.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>{item.desc}</CardDescription>
              </CardContent>
              <CardFooter>
                <Button>
                  <Link to={`/catagory/${item.name}`} className='text-white no-underline'>View More</Link>
                </Button>
              </CardFooter>
            </Card>
          ))
        }
      </div>
      <Footer/>
    </div>
  )
}

export default MainCatagories