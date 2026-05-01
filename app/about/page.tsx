import GlobalPresence from '@/Components/AboutGlobalPresence'
import AboutHero from '@/Components/AboutHero'
import Initiatives from '@/Components/AboutInitiatives'
import OurValues from '@/Components/AboutOurValues'
import MissionVision from '@/Components/MissionVision'
import React from 'react'

function page() {
    return (
        <div>
            <AboutHero />
            <MissionVision />
            <OurValues />
            <GlobalPresence />
            <Initiatives />

        </div>
    )
}

export default page
