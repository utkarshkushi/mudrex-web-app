import React from 'react'
import Navbar from '../home/_components/Navbar'
import VaultHero from './_components/VaultHero'
import KeyBenefits from './_components/KeyBenefits'

const page = () => {
    return (
        <div className='bg-[#f3f3fc]'>
                <Navbar />
                    
                <VaultHero />
            
            <KeyBenefits />

            
        </div>
    )
}

export default page