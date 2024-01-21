import Image from 'next/image'
import React from 'react'

const VaultHero = () => {
  return (
    <div className='flex mt-10 justify-center items-center flex-col pb-10 '>

        <Image src="/icons/banner-vault.png" height={150} width={250} />

        <div className='flex flex-col justify-center items-center mt-12'>
            <Image className='absolute z-[10]' src="/icons/Group 2.png" height={300} width={300} />
            <Image className='z-[100] animate-bounce-slow' src="/icons/valut.png" height={200} width={200} />
        </div>

        <div className='px-20 py-3 mt-16 bg-gradient-to-r from-[#462b81] to-[#2c4280] rounded-lg'>
            <h1 className='font-inter text-white font-semibold text-lg'>Start Investing</h1>
        </div>


        
    </div>
  )
}

export default VaultHero