import MissionVision from '@/Components/MissionVision'
import OurSolutions from '@/Components/OurSolutions'
import FAQSection from '@/Components/SolutionFAQSection'
import Solutions from '@/Components/Solutions'
import SectorsList from '@/Components/SolutionSectorList'
import SolutionsGlobalVerification from '@/Components/SolutionsGlobalVerification'
import SolutionsHero from '@/Components/SolutionsHero'
import TrustedBy from '@/Components/TrustedBy'
import React from 'react'

function page() {
    return (
        <div>
            <SolutionsHero />
            <TrustedBy />
            <Solutions />
            <OurSolutions />
            <MissionVision />
            <SectorsList />
            <SolutionsGlobalVerification />
            <FAQSection />


        </div>
    )
}

export default page
