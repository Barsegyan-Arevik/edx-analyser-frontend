import PageBase from '../components/PageBase/PageBase'
import * as React from 'react'
import TextbookSection from '../components/Sections/TextbookSection/TextbookSection'
import {textbookSectionProps} from './CourseInfoPage/CourseInfoPageData'


export default function TextbookSectionPage() {
    return (
        <PageBase>
            <TextbookSection {...textbookSectionProps}/>
        </PageBase>
    )
}