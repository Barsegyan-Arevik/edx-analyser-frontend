import * as React from 'react';
import PageBase from '../../components/PageBase/PageBase';
import CommonSection , {CommonSectionProps} from '../../components/Sections/CommonSection/CommonSection';
import TextbookSection, {TextbookSectionProps} from '../../components/Sections/TextbookSection/TextbookSection';
import VideoSection, {VideoSectionProps} from '../../components/Sections/VideoSection/VideoSection';
import './CourseInfoPage.css'


export type CourseInfoPageProps = {
    commonSectionProps: CommonSectionProps;
    videoSectionProps: VideoSectionProps;
    documentSectionProps: TextbookSectionProps;
}

export default function CourseInfoPage(props: CourseInfoPageProps) {
    return (
        <PageBase>
            <div style={{justifyContent: 'center'}}>
                <div style={{height: '85vh', color: '#405479'}}>
                    <CommonSection {...props.commonSectionProps} />
                </div>
                <div className='wrapper'>
                    <VideoSection {...props.videoSectionProps} />
                </div>
                <div className='wrapper' style={{height: '85vh'}}>
                    <TextbookSection {...props.documentSectionProps} />
                </div>
            </div>
        </PageBase>
    );
}
