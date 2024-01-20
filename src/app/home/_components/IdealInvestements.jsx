import { TrendingUp, ChevronUp } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

const IdealInvestements = () => {
  return (
    <div className='bg-white px-10 py-10'>
        
        <div className='flex gap-5'>
            <div>
                <Image src='/icons/mob-icon.png' height={50} width={50} />
            </div>
            <h1 className='text-lg font-semibold font-inter '>Ideal for new investors</h1>
        </div>

        <div className='flex justify-center gap-32 items-center mt-20'>

        <div className='drop-shadow max-w-[200px]'>
            <div>
            <div className='pl-5 flex gap-3 items-center py-5 bg-[#fdead4] rounded-t-2xl'>
                <Image src="/icons/bitcoin.png" height={30} width={30}  />
                <h1 className=' text-gray-800 font-inter font-normal'>Bitcoin</h1>
            </div>
            </div>
            <div className='pl-5 pr-5 py-5 flex flex-col gap-3'>
                <h1 className=' text-black font-inter font-semibold'>
                    $41,501.11
                </h1>
                <h1 className='text-xs text-gray-500 font-inter font-light'>
                    Highest market dominance
                </h1>
            </div>
            <div className='bg-gradient-to-r from-[#f9f2fd]  to-[#ecf0fa] pl-5 py-5 flex flex-col gap-2'>
                <h1 className='text-xs font-inter font-light text-gray-500'>
                    1y Returns
                </h1>
                <h1 className='flex items-center gap-3 text-green-700 font-inter font-semibold'>
                    <span> <TrendingUp color='green' />  </span> 82.19%
                </h1>
            </div>
        </div>

        <div className='drop-shadow max-w-[200px]'>
            <div>
            <div className='pl-5 flex gap-3 items-center py-5 bg-[#e8ecee] rounded-t-2xl'>
                <Image src="/icons/ethereum.png" height={30} width={30}  />
                <h1 className=' text-gray-800 font-inter font-normal'>Ethereum</h1>
            </div>
            </div>
            <div className='pl-5 pr-5 py-5 flex flex-col gap-3'>
                <h1 className=' text-black font-inter font-semibold'>
                    $2,467.17
                </h1>
                <h1 className='text-xs text-gray-500 font-inter font-light'>
                    Pioneer in smart contracts
                </h1>
            </div>
            <div className='bg-gradient-to-r from-[#f9f2fd]  to-[#ecf0fa] pl-5 py-5 flex flex-col gap-2'>
                <h1 className='text-xs font-inter font-light text-gray-500'>
                    1y Returns
                </h1>
                <h1 className='flex items-center gap-3 text-green-700 font-inter font-semibold'>
                    <span> <TrendingUp color='green' />  </span> 51.67%
                </h1>
            </div>
        </div>

        </div>

        <div className='flex mt-20 justify-center gap-32 items-center'>


        <div className='drop-shadow max-w-[200px]'>
            <div>
            <div className='pl-5 flex gap-3 items-center py-5 rounded-t-2xl'>
                <h1 className=' text-gray-800 font-inter font-semibold'>Crypto Blue Chip - 5</h1>
            </div>
            </div>
            <div className='pl-5 pr-5 py-5 flex flex-col gap-3'>
                <div className='flex'>
                <Image src="/icons/bitcoin.png" height={20} width={20}  />
                <Image src="/icons/ethereum.png" className='relative right-2' height={20} width={20}  />
                <Image src="/icons/binance.png" className='relative right-4' height={20} width={20}  />
                <Image src="/icons/solana.png" className='relative right-6' height={20} width={20}  />
                <Image src="/icons/xrp.png" className='relative right-8' height={20} width={20}  />
                </div>
                <h1 className='text-xs text-gray-500 font-inter font-light'>
                    Out performed BTC by 9 times
                </h1>
            </div>
            <div className='bg-gradient-to-r from-[#f9f2fd]  to-[#ecf0fa] pl-5 py-5 flex flex-col gap-2'>
                <h1 className='text-xs font-inter font-light text-gray-500'>
                    All time Returns
                </h1>
                <h1 className='flex items-center gap-3 text-green-700 font-inter font-semibold'>
                    <span> <TrendingUp color='green' />  </span> 1400.23%
                </h1>
            </div>
        </div>

        <div className='drop-shadow max-w-[200px]'>
            <div>
            <div className='pl-5 flex gap-3 items-center py-5 rounded-t-2xl'>
                <h1 className=' text-gray-800 font-inter font-semibold'>50 BTC :: 50 ETH</h1>
            </div>
            </div>
            <div className='pl-5 pr-5 py-5 flex flex-col gap-3'>
                <div className='flex'>
                <Image src="/icons/bitcoin.png" height={20} width={20}  />
                <Image src="/icons/ethereum.png" className='relative right-2' height={20} width={20}  />
                </div>
                <h1 className='text-xs text-gray-500 font-inter font-light'>
                    Popular among new investors
                </h1>
            </div>
            <div className='bg-gradient-to-r from-[#f9f2fd]  to-[#ecf0fa] pl-5 py-5 flex flex-col gap-2'>
                <h1 className='text-xs font-inter font-light text-gray-500'>
                    All time Returns
                </h1>
                <h1 className='flex items-center gap-3 text-green-700 font-inter font-semibold'>
                    <span> <TrendingUp color='green' />  </span> 1255.23%
                </h1>
            </div>
        </div>

        </div>

    </div>
  )
}

export default IdealInvestements