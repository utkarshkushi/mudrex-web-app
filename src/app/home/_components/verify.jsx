import Image from 'next/image'
import React from 'react'

const Verify = () => {
  return (
    <div className='bg-white flex justify-around items-center px-10 py-10 mt-10'>

        <div>
        <h1 className='font-inter font-semibold text-4xl '>Claim Your Free Investement Account</h1>
        
        <button className='px-5 py-5 text-white font-inter font-semibold text-xl text-center'>
            Complete Verification
        </button>
        </div>

        <div>
            <Image src='/icons/pan-verify.jpg' width={150} height={150} />
        </div>


    </div>
  )
}

export default Verify