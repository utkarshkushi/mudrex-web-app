import React from 'react'
import Navbar from './_components/Navbar'
import Verify from './_components/verify'
import Image from 'next/image'
import CardNews from './_components/CardNews'
import IdealInvestements from './_components/IdealInvestements'
import TopMovers from './_components/TopMovers'
import Returns from './_components/Returns'
import Footer from './_components/Footer'
const HomePage = () => {
  return (
    <div className='bg-gradient-to-b from-[#eddaea] via-[#cdd9f0]  to-[#f2f8fd] to-30% min-h-screen'>
      <Navbar />
      <Verify />

      <CardNews />

      <IdealInvestements />

      <TopMovers />

      <Returns />

      <Footer />
    </div>
  )
}

export default HomePage