'use client'
import { TrendingDown, TrendingUp } from 'lucide-react'
import Image from 'next/image'
import React, { useState } from 'react'

const gainers = [
    {name: 'Bitcoin' , link: '/icons/bitcoin.png', id: 1, gain: 2.992, percentage: 88.92},
    {name: 'Ethereum' , link: '/icons/ethereum.png', id: 2, gain: 3.143, percentage: 79.43},
    {name: 'Solana' , link: '/icons/solana.png', id: 3, gain: 3.045, percentage: 78.90},
]

const loss = [
    {name: 'Ripple' , link: '/icons/xrp.png', id: 1, gain: 2.992, percentage: 14.92},
    {name: 'Binance' , link: '/icons/binance.png', id: 2, gain: 3.143, percentage: 13.43},
    {name: 'Solana' , link: '/icons/solana.png', id: 3, gain: 3.045, percentage: 10.90},
]

const TopMovers = () => {
    const [losers, setLosers] = useState(false)

    const openGainer = () => {
        setLosers(false)
    }

    const openLosers = () => {
        setLosers(true)
    }

    return (
        <div className='bg-white mt-10 px-10 py-10'>

            <div className='flex gap-5'>
                <h1 className='text-lg font-semibold font-inter '>Top Movers</h1>
                <div className='px-2 py-2 bg-gradient-to-r rounded-md from-[#e66658] animate-pulse to-[#e8966d]'>
                    <h1 className='text-xs font-inter font-semibold text-white'>In last 24 hours</h1>
                </div>
            </div>

            <div className='flex gap-5 mt-16'>
                <h1 onClick={openGainer} className={`font-inter font-normal text-md cursor-pointer ${(!losers ?  (`text-[#2b2053] underline`) : (`text-gray-500`))}`}>GAINERS</h1>
                <h1 onClick={openLosers} className={`font-inter font-normal text-md cursor-pointer ${(losers ?  (`text-[#2b2053] underline`) : (`text-gray-500`))}`}>LOSERS</h1>
            </div>

            {!losers ? (
                <div className='mt-10 mx-20 flex flex-col gap-5'>
                    {gainers.map((ele) => (
                        <div key={ele.id} className='flex items-center justify-between px-10 py-5 border-2 rounded-[30px] border-gray-100 drop-shadow-sm'>
                        <div className='flex items-center gap-10'>
                            <Image src={ele.link} height={30} width={30}/>
                            <h1 className='text-md text-gray-700 font-inter font-normal'>{ele.name}</h1>
                        </div>
                        <div className='flex items-center gap-20'>
                            <h1 className='font-inter font-lg font-bold'>${ele.gain}</h1>
                            <h1 className='font-inter font-lg font-bold font-green-700 flex gap-2'> <span> <TrendingUp color='green' /> </span> {ele.percentage}%</h1>
                        </div>
                    </div>
                    ))}
                    </div>
            ) : (
                <div>
                    <div className='mt-10 mx-20 flex flex-col gap-5'>
                    {loss.map((ele) => (
                        <div key={ele.id} className='flex items-center justify-between px-10 py-5 border-2 rounded-[30px] border-gray-100 drop-shadow-sm'>
                        <div className='flex items-center gap-10'>
                            <Image src={ele.link} height={30} width={30}/>
                            <h1 className='text-md text-gray-700 font-inter font-normal'>{ele.name}</h1>
                        </div>
                        <div className='flex items-center gap-20'>
                            <h1 className='font-inter font-lg font-bold'>${ele.gain}</h1>
                            <h1 className='font-inter font-lg font-bold font-red-700 flex gap-2'> <span> <TrendingDown color='red' /> </span> {ele.percentage}%</h1>
                        </div>
                    </div>
                    ))}
                    </div>
                    </div>
            )}

        </div>
    )
}

export default TopMovers