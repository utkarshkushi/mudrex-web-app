'use client'
import { ChevronDown, TrendingDownIcon, TrendingUp } from 'lucide-react';
import React, { useRef, useState } from 'react'

const Returns = () => {
    const [input, setInput] = useState(10);
    const sliderRef = useRef(null);
    const [period, setPeriod] = useState(1);
    const [tab1, setTab1] = useState(true);

    const handleInput = () => {
        setInput(sliderRef.current.value)
    }

    const handleTab1Change = () => {
        setTab1(true);
    }

    const handleTab2Change = () => {
        setTab1(false);
    }

    return (
        <div className='bg-white mt-10 px-10 py-10'>

            <div className='flex gap-5'>
                <h1 className='text-lg font-semibold font-inter '>Calculate your returns</h1>
            </div>

            <div className='flex gap-5 mt-16'>
                <h1 onClick={handleTab1Change} className={`cursor-pointer font-inter font-light text-lg px-3 py-2 rounded-[20px] ${tab1 ? (`bg-gradient-to-r from-[#ab94d8]  to-[#93a7d9] text-white`) : (`text-[#c1c1da] border-[#c1c1da] border-2`)}`}>Crypto Blue Chip - 5</h1>
                <h1 onClick={handleTab2Change} className={`cursor-pointer font-inter font-light text-lg px-3 py-2 rounded-[20px] ${!tab1 ? (`bg-gradient-to-r from-[#ab94d8]  to-[#93a7d9] text-white`) : (`text-[#c1c1da] border-[#c1c1da] border-2`)}`}>BTC 50 :: ETH 50</h1>
            </div>

            <div className='bg-gradient-to-r from-[#f9f2fd]  to-[#ecf0fa] mt-10 py-5 rounded-xl px-5 mx-20'>
            <h1 className='text-lg font-inter font-bold mb-3'>${input} <span className='text-sm ml-1 text-gray-700 font-inter font-light'>invested</span></h1>
            <input type="range" max={1000} min={10} value={input} onInput={handleInput} step={2} ref={sliderRef} className='slider mb-8' />
            <h1 className='text-sm ml-1 text-gray-700 font-inter font-light mb-3'>Over the past</h1>
            <div className='flex items-center gap-5'>
                <h1 onClick={() => setPeriod(1)} className={`px-3 py-2 text-md font-inter font-normal cursor-pointer text-[#afa9d3] border-2 border-[#afa9d3] rounded-[20px] ${period == 1 && (`bg-gradient-to-r from-[#ab94d8]  to-[#93a7d9] text-white`)}`}>1M</h1>
                <h1 onClick={() => setPeriod(2)} className={`px-3 py-2 text-md font-inter font-normal cursor-pointer text-[#afa9d3] border-2 border-[#afa9d3] rounded-[20px] ${period == 2 && (`bg-gradient-to-r from-[#ab94d8]  to-[#93a7d9] text-white`)}`}>3M</h1>
                <h1 onClick={() => setPeriod(3)} className={`px-3 py-2 text-md font-inter font-normal cursor-pointer text-[#afa9d3] border-2 border-[#afa9d3] rounded-[20px] ${period == 3 && (`bg-gradient-to-r from-[#ab94d8]  to-[#93a7d9] text-white`)}`}>5M</h1>
                <h1 onClick={() => setPeriod(4)} className={`px-3 py-2 text-md font-inter font-normal cursor-pointer text-[#afa9d3] border-2 border-[#afa9d3] rounded-[20px] ${period == 4 && (`bg-gradient-to-r from-[#ab94d8]  to-[#93a7d9] text-white`)}`}>12M</h1>
                
            </div>
                <div className='flex justify-center mt-5'>
                <div className='bg-gray-200 w-[80%] h-[1px]'></div>
                </div>
                <h1 className='text-sm ml-1 text-gray-700 font-inter font-light mb-3 mt-5'>Would have become</h1>
                
                {tab1 ? (
                    <div>
                        <h1 className='text-2xl font-inter font-bold mb-3 flex  gap-2'>${input * period * 10} </h1>
                <div className='flex relative top-2 gap-1'><h1 className='text-sm ml-1 text-green-700 font-inter font-semibold'>{input + 0.34}</h1><TrendingUp className='relative bottom-0.5' color='green' /> </div>
                    </div>
                ) : (
                    <div>
                        <h1 className='text-2xl font-inter font-bold mb-3 flex  gap-2'>${input * (period + 7) * 10} </h1>
                <div className='flex relative top-2 gap-1'><h1 className='text-sm ml-1 text-green-700 font-inter font-semibold'>{input + 0.46}</h1><TrendingUp className='relative bottom-0.5' color='green' /> </div>
                    </div>
                )}
                
            </div>
            
        </div>
    )
}

export default Returns


