import * as React from 'react';
import PageBase from "../../components/PageBase/PageBase";
import CourseAnalytics, {CourseAnalyticsProps} from "../../components/unionParts/CourseAnalytics/CourseAnalytics";
import DocumentSection, {DocumentSectionProps} from "../../components/unionParts/DocumentSection/DocumentSection";
import VideoSection, {VideoSectionProps} from "../../components/unionParts/VideoSection/VideoSection";
import './CourseInfoPage.css'


export type CourseInfoPageProps = {
    courseAnalyticsProps: CourseAnalyticsProps;
    videoSectionProps: VideoSectionProps;
    documentSectionProps: DocumentSectionProps;
}

export default function CourseInfoPage(props: CourseInfoPageProps) {

    const windowHeight = window.innerHeight;
    return (
        <PageBase>
            <div className={"layout"}>
                {/* <div className={"content"} style={{height: '77vh', color: '#405479'}}> */}
                <div style={{justifyContent: 'center'}}>
                    <div style={{height: '85vh', color: '#405479'}}>
                        <CourseAnalytics {...props.courseAnalyticsProps} />
                    </div>
                    <div className={"spikes"}>
                        <div className='wrapper'>
                            <VideoSection {...props.videoSectionProps} />
                        </div>
                    </div>
                    <div style={{height: '85vh'}}>
                        <DocumentSection {...props.documentSectionProps} />
                    </div>
                </div>
            </div>
        </PageBase>
    );
};
