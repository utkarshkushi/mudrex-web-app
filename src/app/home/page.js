import React from 'react'
import Navbar from './_components/Navbar'
import Verify from './_components/verify'
const HomePage = () => {
  return (
    <div className='bg-gradient-to-b from-[#eddaea] via-[#cdd9f0]  to-[#f2f8fd] to-30% min-h-screen'>
      <Navbar />
      <Verify />
    </div>
  )
}

export default HomePage