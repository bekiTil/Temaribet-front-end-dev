import React from 'react'
import Header from '../components/ProfileComponents/Header'
import Body from '../components/ProfileComponents/Body'
import Footer from '../components/ProfileComponents/Footer'
const profile = () => {
  return (
    <div className='px-20 xl:px-16 bg-[#f2f2f2] font-minionPro min-h-screen'>
        <Header />
        <Body />
        <Footer />
    </div>
  )
}

export default profile