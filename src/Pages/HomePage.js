import React from 'react'
import About from '../Components/About';
import Chef from '../Components/Chef';
import Package from '../Components/Package';
import Services from '../Components/Services';
import Navbar from '../Components/Navbar';
import {Cart} from '../Components/cart/cart';
import Footer from '../Components/Footer';

const HomePage = () => {
  return (
    <div>
      <Navbar/>
      <About/>
      <Package/>
      <Services/>
      <Chef/>
      <Footer/>
    </div>
  )
}

export default HomePage