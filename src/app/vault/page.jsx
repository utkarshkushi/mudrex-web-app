import React from 'react'
import Navbar from '../home/_components/Navbar'
import VaultHero from './_components/VaultHero'

const page = () => {
    return (
        <div>
            <div className='bg-[#f3f3fc]'>
                <Navbar />
                    
                <VaultHero />
            </div>
        </div>
    )
}

export default page