import Image from 'next/image'
import React from 'react'

const Verify = () => {
  return (
    <div className='bg-white flex justify-center gap-20 mx-10 rounded-xl items-center px-10 py-10 mt-10'>

        <div>
        <h1 className='font-inter font-semibold text-4xl '>Claim Your Free Investement Account</h1>
        
        <button className=' mt-5 px-5 py-5  text-white font-inter font-semibold text-lg text-center rounded-lg bg-purple-300 bg-gradient-to-r from-[#492a81] from-50% to-[#2b427e] hover:scale-90 transition-all'>
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