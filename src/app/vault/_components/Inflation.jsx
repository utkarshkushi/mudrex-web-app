'use client'
import { DollarSign, Euro, IndianRupee, PoundSterling, TrendingUp } from 'lucide-react'
import Image from 'next/image'
import React, { useRef, useState } from 'react'

const Inflation = () => {
    const [input, setInput] = useState(10)
    const sliderRef = useRef(null);
    const [currency, setcurrency] = useState(1)

    const handleInput = () => {
        setInput(sliderRef.current.value)
    }

  return (
    <div className='mt-10 bg-white px-10 py-10'>
        <div>
            <Image src="/icons/ufo.jpg" height={70} width={80} />
        </div>
        <h1 className='text-xl font-inter font-bold mt-3 '>Beat Inflation</h1>
        <h1 className='text-md font-inter font-semibold mt-3 mb-5'>with USD Gains, you can earn <span className='text-purple-400'> Upto 10% </span> on your investments</h1>

        <div className='mx-20'>
            <div className='flex justify-between items-center px-10 py-5 bg-gradient-to-r from-[#f9f2fd]  to-[#eef3fa] rounded-t-lg'>
                <h1>Currency</h1>
                <div className='flex items-center gap-5'>
                <h1 onClick={() => setcurrency(1)} className={`px-3 py-2 text-md font-inter font-normal cursor-pointer text-[#afa9d3] border-2 border-[#afa9d3] rounded-[20px] ${currency == 1 && (`bg-gradient-to-r from-[#ab94d8]  to-[#93a7d9] text-white`)}`}> <DollarSign /> </h1>
                <h1 onClick={() => setcurrency(2)} className={`px-3 py-2 text-md font-inter font-normal cursor-pointer text-[#afa9d3] border-2 border-[#afa9d3] rounded-[20px] ${currency == 2 && (`bg-gradient-to-r from-[#ab94d8]  to-[#93a7d9] text-white`)}`}> <Euro /> </h1>
                <h1 onClick={() => setcurrency(3)} className={`px-3 py-2 text-md font-inter font-normal cursor-pointer text-[#afa9d3] border-2 border-[#afa9d3] rounded-[20px] ${currency == 3 && (`bg-gradient-to-r from-[#ab94d8]  to-[#93a7d9] text-white`)}`}> <IndianRupee /> </h1>
                <h1 onClick={() => setcurrency(4)} className={`px-3 py-2 text-md font-inter font-normal cursor-pointer text-[#afa9d3] border-2 border-[#afa9d3] rounded-[20px] ${currency == 4 && (`bg-gradient-to-r from-[#ab94d8]  to-[#93a7d9] text-white`)}`}> <PoundSterling /> </h1>
            </div>
                
            </div>
            <div className='bg-gradient-to-r from-[#fcf8fc]  to-[#f3f7fc] px-10 py-10'>
            <h1 className='text-lg font-inter font-bold mb-3'>${input}</h1>
            <h1 className='text-sm  text-gray-700 font-inter font-light mb-3'>invested year ago</h1>
            <input type="range" max={1000} min={10} value={input} onInput={handleInput} step={2} ref={sliderRef} className='slider mb-8' />
            <h1 className='text-sm ml-1 text-gray-700 font-inter font-light mb-3 mt-5'>Would have become</h1>
            <div className='flex gap-2'>
                        <h1 className='text-2xl font-inter font-bold mb-3 flex  gap-2'>${input * (currency + 10) * 10} </h1>
                <div className='flex relative top-2 gap-1'><h1 className='text-sm ml-1 text-green-700 font-inter font-semibold'>{input + 0.46}</h1><TrendingUp className='relative bottom-0.5' color='green' /> </div>
                    </div>
                    
            </div>
            <div className='px-10 py-10 mx-20'>
            <h1 className='text-sm ml-1 text-gray-700 font-inter font-light mb-3 mt-5'>Returns Breakdowm</h1>
            <div className='flex gap-36 items-center justify-between'>
            <h1 className='text-sm ml-1 text-gray-700 font-inter font-semibold mb-3 mt-5'>Vault retruns</h1>
            <div className='flex relative top-1.5 gap-1'><h1 className='text-sm ml-1 text-green-700 font-inter font-semibold'>10</h1><TrendingUp className='relative bottom-0.5' color='green' /> </div>
            </div>
            <div className='flex gap-36 items-center justify-between '>
            <h1 className='text-sm ml-1 text-gray-700 font-inter font-semibold mb-3 mt-5'>Net Returns</h1>
            <div className='flex relative top-1.5 gap-1'><h1 className='text-sm ml-1 text-green-700 font-inter font-semibold'>10</h1><TrendingUp className='relative bottom-0.5' color='green' /> </div>
            </div>
            <h1 className='font-inter font-semibold bg-gradient-to-r from-[#4f2e90]  to-[#55629c] inline-block text-transparent bg-clip-text'>Whats This?</h1>
            <div className='px-20 py-3 flex justify-center items-center w-[200px]  mt-5 m-auto bg-gradient-to-r from-[#462b81] to-[#2c4280] rounded-lg'>
            <h1 className='font-inter text-white font-semibold text-lg'>Invest</h1>
        </div>
            </div>
        </div>
    </div>
  )
}

export default Inflation