import Image from 'next/image'
import React from 'react'

const KeyBenefits = () => {
    return (
        <div className='bg-white py-10 px-10'>
            <h1 className='text-2xl font-inter font-bold '>Key Benefits</h1>
            <div className='flex flex-col mt-10 gap-5'>
                <div className='flex items-center gap-6'>
                    <Image src="/icons/kb1.jpg" height={30} width={30} />
                    <h1>
                        10% anual percentage yield
                    </h1>
                </div>
                <div className='flex justify-center'>
                    <div className='bg-gray-200 w-[80%] h-[1px]'></div>
                </div>
                <div className='flex items-center gap-6'>
                    <Image src="/icons/kb2.jpg" height={30} width={30} />
                    <h1>
                        No lock in withdraw any time
                    </h1>
                </div>
                <div className='flex justify-center'>
                    <div className='bg-gray-200 w-[80%] h-[1px]'></div>
                </div>
                <div className='flex items-center gap-6'>
                    <Image src="/icons/kb3.jpg" height={30} width={30} />
                    <h1>
                        Industry leading security
                    </h1>
                </div>
                <div className='flex justify-center'>
                    <div className='bg-gray-200 w-[80%] h-[1px]'></div>
                </div>
                <div className='flex items-center gap-6'>
                    <Image src="/icons/kb2.jpg" height={30} width={30} />
                    <h1>
                        Interest credited daily
                    </h1>
                </div>

            </div>
        </div>
    )
}

export default KeyBenefits