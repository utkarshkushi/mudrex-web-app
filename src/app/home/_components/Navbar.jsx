'use client'
import Link from 'next/link';
import React, { useState } from 'react';
import Image from 'next/image';
import { BadgePercent, Coins, Contact, Cross, Gift, HelpCircle, Star, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (

    <div className='flex items-center justify-between px-5 pt-5 pb-2 sticky top-0 z-[10] bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-5'>
      <div className=' flex justify-center items-center gap-5'>
        <div>
          <Image height={50} width={160} src='/logo/logo.png' />
        </div>
        <div className='flex gap-20'>
          <div className='flex flex-col items-center justify-center'>
            <Link className='text-sm font-inter ' href="/home">Home</Link>
          </div>
          <div className='flex flex-col items-center justify-center'>
            <Link className='text-sm font-inter ' href="/vault">Vault</Link>
          </div>
          <div className='flex flex-col items-center justify-center'>
            <Link className='text-sm font-inter ' href="/learn">Learn</Link>
          </div>
        </div>
      </div>
      <div className='flex gap-3'>
        <div className=' cursor-pointer'>
          <Image onClick={() => setIsOpen((prev) => !prev)} src="/icons/user-pf.png" height={40} width={40} />
        </div>
        <div className='cursor-pointer'>
          <h1 className='text-sm text-gray-700 font-inter'>Welcome</h1>
          <h1 className='text-sm text-black font-semibold font-inter'>Joel Machado</h1>
        </div>
        <div className='px-4 cursor-pointer flex justify-center items-center rounded-[30px]  py-2 text-center font-inter text-xs bg-black text-white font-semibold'>
          <p>Log out</p>
        </div>
        <div className='flex justify-center items-center border-2 rounded-[30px] ml-10 border-violet-300 px-4 py-2'>
          <pre>
            Bal: 0.000
            <span> USDT</span>
          </pre>
        </div>
      </div>
      {isOpen && (
        <div className='w-64 right-0 top-0 absolute bg-white py-5 pl-3'>
          <div> <X className='cursor-pointer' onClick={() => setIsOpen((prev) => !prev)} color='gray' /> </div>
          <div className='flex flex-col justify-center items-center'>
            <div className='cursor-pointer flex flex-col justify-center items-center'>
              <Image src="/icons/user-pf.png" height={40} width={40} />
              <h1 className='text-sm text-black font-semibold font-inter'>Joel Machado</h1>

            </div>
            <div className='bg-gray-200 w-[80%] h-[1px] my-5'></div>
          </div>
          <div className='flex flex-col gap-5'>
            <p className='text-md font-roboto cursor-pointer hover:text-[#4f2e90] hover:border-l-4 hover:border-[#4f2e90] pl-2 flex gap-2'> <Coins /> Payment Methods</p>
            <p className='text-md font-roboto cursor-pointer hover:text-[#4f2e90] hover:border-l-4 hover:border-[#4f2e90] pl-2 flex gap-2'> <Gift /> Gift Crypto</p>
            <p className='text-md font-roboto cursor-pointer hover:text-[#4f2e90] hover:border-l-4 hover:border-[#4f2e90] pl-2 flex gap-2'> <Contact /> Refer Your Friend</p>
            <p className='text-md font-roboto cursor-pointer hover:text-[#4f2e90] hover:border-l-4 hover:border-[#4f2e90] pl-2 flex gap-2'> <BadgePercent /> Apply coupon code</p>
            <p className='text-md font-roboto cursor-pointer hover:text-[#4f2e90] hover:border-l-4 hover:border-[#4f2e90] pl-2 flex gap-2'> <HelpCircle /> Help and Support</p>
            <p className='text-md font-roboto cursor-pointer hover:text-[#4f2e90] hover:border-l-4 hover:border-[#4f2e90] pl-2 flex gap-2'> <Star /> Give us Feedback</p>
          </div>
        </div>
      )}
    </div>

  );
};

export default Navbar;
