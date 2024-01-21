import { Check } from 'lucide-react'
import React from 'react'

const Footer = () => {
  return (
    <div className=' bg-gradient-to-b from-white via-[#daf0ee] to-[#dbf3ee]  mt-10 px-16 py-10'>
        <h1 className='font-inter text-4xl font-bold bg-gradient-to-r from-[#84b8da]  to-[#4db0a9] inline-block text-transparent bg-clip-text'>Reasons to Choose Mudrex</h1>
        <div className='mt-5 flex flex-col gap-3'>
            <div className='flex gap-3 items-center'>
                <Check color='green' size={25} />
                <h1 className='text-lg text-black font-inter font-normal'>Funds insured and government regulated</h1>
            </div>
            <div className='flex gap-3 items-center'>
                <Check color='green' size={25} />
                <h1 className='text-lg text-black font-inter font-normal'>Insightfull information about all things crypto</h1>
            </div>
            <div className='flex gap-3 items-center'>
                <Check color='green' size={25} />
                <h1 className='text-lg text-black font-inter font-normal'>Deposit and withdraw in both crypto and local currency with a variety of payment methods</h1>
            </div>
        </div>
        <div className='mt-10'>
            <img src="/icons/footer-img.png" alt="" />
        </div>
    </div>
  )
}

export default Footer