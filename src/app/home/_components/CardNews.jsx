import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const CardNews = () => {
  return (
    <div className='bg-white px-10 py-10 mt-10 flex gap-20 overflow-x-scroll no-scrollbar  cards-section'>

        <div className='min-w-[250px]'>
            <Link href='https://mudrex.com/blog/binance-ban-update/'>
                <Image src='/icons/card1.png' height={250} width={250} />
            </Link>
        </div>
        <div className='min-w-[250px]'>
            <Link href='https://mudrex.com/blog/bitcoin-etf-approved-what-lies-ahead-for-you-as-an-investor/'>
                <Image src='/icons/card2.png' height={250} width={250} />
            </Link>
        </div>
        <div className='min-w-[250px]'>
            <Link href='https://mudrex.com/blog/how-to-transfer-btc-from-binance-to-mudrex/'>
                <Image src='/icons/card3.png' height={250} width={250} />
            </Link>
        </div>
        <div className='min-w-[250px] cursor-pointer'>
            
                <Image src='/icons/card4.png' height={250} width={250} />
            
        </div>
        <div className='min-w-[250px] cursor-pointer'>
            
                <Image src='/icons/card5.png' height={250} width={250} />
            
        </div>
        <div className='min-w-[250px] cursor-pointer'>
            
                <Image src='/icons/card6.png' height={250} width={250} />
            
        </div>
        

    </div>
  )
}

export default CardNews