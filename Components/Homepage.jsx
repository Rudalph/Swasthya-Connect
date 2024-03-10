import React from 'react'
import Navbar from './navbar'
import Hero from './Hero'
import Footer from './Footer'

const Homepage = () => {
  return (
    <div>
        <div className="flex h-screen overflow-hidden">
          {/* Sidebar */}
          <Navbar />

          {/* Content */}
          <div className="flex-1 overflow-x-hidden overflow-y-auto">
            {/* Your Hero Section */}
            <Hero />
            {/* Add other components/content as needed */}
          </div>
        </div>
        <Footer/>
    </div>
  )
}

export default Homepage