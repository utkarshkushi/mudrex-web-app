import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const videoUrls = ['https://www.youtube.com/embed/1x_kQshZJFs?si=Ii1nTQZssCRyNseh',
'https://www.youtube.com/embed/Lr5wMN53Zs0?si=Bpy4SKj7nwN6YRqE',
'https://www.youtube.com/embed/eHalAWELUHo?si=J8kXhqd-Gva6hZ74',
'https://www.youtube.com/embed/QMWfs1sh2og?si=SK7IF388a7dCpZek'
]

const blogUrls = [
'https://mudrex.com/blog/mudrex-crypto-market-outlook-january-09-january-15-2024/'
]
 

function Page() {
  return (
        
    <div className=' bg-gradient-to-b from-[#eddaea] via-[#cdd9f0] to-[#f2f8fd] to-30% min-h-screen'>
    <div className='flex justify-between'>
    <h1 className='font-inter text-[22px] font-bold bg-gradient-to-r from-[#84b8da]  to-[#4db0a9] inline-block text-transparent bg-clip-text py-4 px-4'>Learn Crypto</h1>
    <Image className='flex mx-4 ' src='/icons/questionMark.png' width={48} height={24}/>
    </div>
  <div className='flex justify-center align-center mx-4 py-8 '>
    <Image className="rounded-lg" src='/icons/quiz.jpg' width={380} height={450}  />  
</div>
 <hr class="h-[10px] h-px my-8 bg-[#cdcbe8] border-0 "></hr>
      <div className='flex mx-4'>
        <h1 className='font-inter font-semibold text-3xl my-4 py-4 mx-8 py-[2px] text-left'>
          Understand your investment options at Mudrex!
        </h1>
        <Image className="flex justify-right align-right"src='/icons/mudrex-logo-learn.png' width={90} height={60} />
      </div>
      <div className='flex mx-8 my-6 overflow-x-scroll cards-section'>
      {videoUrls.map((videoUrls, index) => (
          <iframe
            key={index}
            className="rounded-xl mx-6"
            width="360"
            height="165"
            src={videoUrls}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        ))}
      </div>
      <hr class="h-[10px] h-px my-12 bg-[#cdcbe8] border-0 "></hr>
      <div className='flex mx-4 '>
        <h1 className='font-inter font-bold text-[22px] text-left mx-8 py-[2px]'>
          Financial literacy over anything
        </h1>
        {/* <Image src='/icons/mudrex-logo-learn.png' width={75} height={60} /> */}
      </div>
     
    
      <div className='flex mx-8 my-8 overflow-x-scroll cards-section'>
      <div className='min-w-[350px] mx-4'>
            <Link href='https://mudrex.com/blog/binance-ban-update/'>
                <Image  className="rounded-lg" src='/icons/fin4.jpg' height={115} width={230} />
            </Link>
        </div>
        <div className='min-w-[350px] mx-4'>
            <Link href='https://mudrex.com/blog/binance-ban-update/'>
                <Image  className="rounded-lg" src='/icons/fin3.jpg' height={115} width={230} />
            </Link>
        </div>
        <div className='min-w-[350px] mx-4'>
            <Link href='https://mudrex.com/blog/binance-ban-update/'>
                <Image  className="rounded-lg" src='/icons/fin2.jpg' height={115} width={230} />
            </Link>
        </div>
        <div className='min-w-[350px] mx-4'>
            <Link href='https://mudrex.com/blog/binance-ban-update/'>
                <Image className="rounded-lg" src='/icons/fin3.jpg' height={115} width={230} />
            </Link>
        </div>
        

        </div>
        <hr class="h-[10px] h-px my-12 bg-[#cdcbe8] border-0 "></hr>
      <div className='flex mx-4 '>
        <h1 className='font-inter font-bold text-[22px] text-left mx-8 py-[2px]'>
          Top news for you!
        </h1>
        {/* <Image src='/icons/mudrex-logo-news1.jpg' width={75} height={60} /> */}
      </div>
     
    
      <div className='flex mx-8 my-8 overflow-x-scroll cards-section'>
      <div className='min-w-[350px] mx-4'>
            <Link href='https://mudrex.com/blog/binance-ban-update/'>
                <Image  className="rounded-lg" src='/icons/news1.jpg' height={115} width={230} />
            </Link>
        </div>
        <div className='min-w-[350px] mx-4'>
            <Link href='https://mudrex.com/blog/binance-ban-update/'>
                <Image  className="rounded-lg" src='/icons/news4.jpg' height={115} width={230} />
            </Link>
        </div>
        <div className='min-w-[350px] mx-4'>
            <Link href='https://mudrex.com/blog/binance-ban-update/'>
                <Image  className="rounded-lg" src='/icons/news1.jpg' height={115} width={230} />
            </Link>
        </div>
        <div className='min-w-[350px] mx-4 mb-4'>
            <Link href='https://mudrex.com/blog/binance-ban-update/'>
                <Image className="rounded-lg" src='/icons/news4.jpg' height={115} width={230} />
            </Link>
        </div>
        

        </div>
    </div>
  );
}

export default Page;
