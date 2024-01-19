// components/Navbar.js
import Link from 'next/link';
import React from 'react';
import Image from 'next/image';

const Navbar = () => {
  return (
    <nav>
    <div className='items-center justify-center flex flex-row space-x-36  h-12'>
    <div className='flex flex-row items-center justify-center'>
    <Image src='/icons/coins.png' width={35} height={35} quality={100} color='black' />        
          <Link href="/coins">Coins</Link>
          </div>
          <div className='flex flex-row items-center justify-center'>
          <Image src='/icons/vault.png' width={35} height={35} quality={100} color='black' /> 
          <Link href="/vault">Vault</Link>
          </div>
          <div className='flex flex-row items-center justify-center'>
          <Image src='/icons/learn.png' width={35} height={35} quality={100} color='black' /> 
          <Link href="/learn">Learn</Link>
          </div>
         <button className='bg-cyan-950 h-8 rounded-full px-2 font-medium text-slate-50 '>
            <Link href="/verify">Complete Verification</Link>
            </button>
        </div>
    </nav>
  );
};

export default Navbar;
