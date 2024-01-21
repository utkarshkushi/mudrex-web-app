import React from 'react'
import Navbar from '../home/_components/Navbar'
import VaultHero from './_components/VaultHero'
import KeyBenefits from './_components/KeyBenefits'
import Inflation from './_components/Inflation'

const page = () => {
    return (
        <div className='bg-[#f3f3fc]'>
                <Navbar />
                    
                <VaultHero />
            
            <KeyBenefits />

            <Inflation />
        </div>
    )
}

export default page