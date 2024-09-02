import About from '@/components/About'
import Chef from '@/components/Chef'
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import Package from '@/components/Package'
import Services from '@/components/Services'

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