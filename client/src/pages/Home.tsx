import React from 'react'
import ActionBanner from '../components/ActionBanner'
import About from '../components/About'
import ContactUs from '../components/ContactUs'
import Footer from '../components/Footer'
import ProductsList from '../components/ProductsList'

const Home: React.FC = () => {
     return (
          <>
               <ActionBanner />
               <ProductsList />
               <About />
               <ContactUs />
               <Footer />
          </>
     )
}

export default Home