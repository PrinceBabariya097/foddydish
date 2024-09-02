import { useState } from 'react'
import logo from '/images/logo.png'
import { MoveLeftIcon, ShoppingCart } from 'lucide-react'
import Footer from '@/components/Footer'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import useFetch from '@/hooks/useFetch'
import Loader from '@/components/Loader'
import Product from '@/components/Product'
import PaginationButton from '@/components/PaginationButton'
import useThrottel from '@/hooks/useThrottel'
// import './navbar.css'

const SubCatagoryPage = () => {

    const [currentPage, setCurrentPage] = useState(1);
    const itemPerPage = 12;

    const params = useParams()

    const { data, isLoading, error } = useFetch({
        url: `api/pagination/${params.catagory}`,
        limit: itemPerPage,
        currentPage
    })

    const throttelNextPage = useThrottel(() => {
        if (data && currentPage < data.totalPage) {
            setCurrentPage(currentPage + 1);
        }
    }, 1000);

    const throttelPriviousPage = useThrottel(() => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    }, 1000)

    if (isLoading) return <Loader />

    if (error) return <div>{error}</div>

    return (
        <div>
            <div className="container-fluid navbar-bg bg-[url('/images/header.webp')] bg-cover relative" >
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
            <div className='flex items-center mx-5'>
                <h1><Link className='text-black no-underline' to={'/packages'}><MoveLeftIcon className='h-10 w-10' /></Link></h1>
                <h1 className="m-5 font-bold">{params.catagory.toUpperCase()} : </h1>
            </div>
            <div className='grid grid-cols-4 gap-5 mt-7 mx-5 '>
                {
                    data?.items?.map((item) => (
                        <Product
                            key={item._id}
                            src={item.img}
                            title={item.name}
                            rating={item.rate}
                            discription={item.dsc}
                            price={item.price}
                        />
                    ))
                }
            </div>
            <div className='w-full flex justify-center items-center mt-8'>
                <PaginationButton
                    currentPage={currentPage}
                    onNext={throttelNextPage}
                    onPrevious={throttelPriviousPage}
                    totalPage={data.totalPage}
                />
            </div>
            <Footer />
        </div>
    )
}

export default SubCatagoryPage