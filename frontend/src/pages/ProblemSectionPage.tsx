import PageBase from '../components/PageBase/PageBase'
import * as React from 'react'
import ProblemsSection from '../components/Sections/ProblemsSection/ProblemsSection'

import {chartDonutProblems} from './CourseInfoPage/CourseInfoPageData'


export default function ProblemSectionPage() {
    return (
        <PageBase>
            <ProblemsSection
                problemsComplexity={[]}
                problemsSummary={chartDonutProblems}
            />
        </PageBase>
    )
}