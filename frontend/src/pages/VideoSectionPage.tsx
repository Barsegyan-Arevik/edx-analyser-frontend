import * as React from 'react'
import PageBase from '../components/PageBase/PageBase'
import VideoSection from '../components/Sections/VideoSection/VideoSection'
import {videoSectionProps} from './CourseInfoPage/CourseInfoPageData'

export default function VideoSectionPage() {
    return (
        <PageBase>
            <VideoSection {...videoSectionProps}/>
        </PageBase>
    )
}