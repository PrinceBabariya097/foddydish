import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ChefPage from './Pages/ChefPage'
import PackagesPage from './Pages/PackagesPage'
import ContactPage from './Pages/ContactPage'
import MainCatagories from './Pages/MainCatagories'
import SubCatagoryPage from './Pages/SubCatagoryPage'
import Loader from '@/components/Loader'

const HomePage = React.lazy(() => import('./Pages/HomePage'))
const AboutPage = React.lazy(() => import('./Pages/AboutPage'))
const ServicePage = React.lazy(() => import('./Pages/ServicePage'))


const App = () => {
  return (
    <BrowserRouter>
      <React.Suspense fallback={<Loader />}>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/about' element={<AboutPage />} />
          <Route path='/services' element={<ServicePage />} />
          <Route path='/chefs' element={<ChefPage />} />
          <Route path='/packages/All-Food' element={<PackagesPage />} />
          <Route path='/contact' element={<ContactPage />} />
          <Route path='/packages' element={<MainCatagories />} />
          <Route path='/catagory/:catagory' element={<SubCatagoryPage />} />
        </Routes>
      </React.Suspense>
    </BrowserRouter>
  )
}

export default App