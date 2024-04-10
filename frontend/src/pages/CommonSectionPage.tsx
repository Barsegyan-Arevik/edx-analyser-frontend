import * as React from 'react'
import PageBase from '../components/PageBase/PageBase'
import CommonSection from '../components/Sections/CommonSection/CommonSection'
import {commonSectionProps} from './CourseInfoPage/CourseInfoPageData'


export default function CommonSectionPage() {
    return (
        <PageBase>
            <CommonSection {...commonSectionProps}/>
        </PageBase>
    )
}
