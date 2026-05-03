import ConferenceHighlight from '@/Components/ConferenceHighlight'
import FakeDegreeRisk from '@/Components/FakeDegreeRisk'
import FraudReportSection from '@/Components/FraudReportSection'
import CaseStudies from '@/Components/ICaseStudies'
import ManualRisks from '@/Components/ManualRisks'
import NewsHighlight from '@/Components/NewsHighlight'
import RegionGuide from '@/Components/RegionGuide'
import ResourceGuide from '@/Components/ResourceGuide'
import ResourcesHero from '@/Components/ResourcesHero'
import React from 'react'

function page() {
    return (
        <div>
            <ResourcesHero />
            <ResourceGuide />
            <RegionGuide />
            <FakeDegreeRisk />
        </div>
    )
}

export default page
