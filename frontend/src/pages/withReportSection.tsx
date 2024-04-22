import * as React from 'react'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import PageBase from '../components/PageBase/PageBase'
import { Report, ReportState } from '../models/report'
import { BASE_URL } from '../config'
import CommonSection from '../components/Sections/CommonSection/CommonSection'
import VideoSection from '../components/Sections/VideoSection/VideoSection'
import TextbookSection from '../components/Sections/TextbookSection/TextbookSection'
import ProblemsSection from '../components/Sections/ProblemsSection/ProblemsSection'
import PagesSection from '../components/Sections/PagesSection/PagesSection'
import ForumSection from '../components/Sections/ForumSection/ForumSection'

interface ReportPageProps<T extends Report> {
    report: T;
}

function withReportSection<T extends Report>(SectionComponent: React.ComponentType<ReportPageProps<T>>, reportType: string) {
    return function ReportPage() {
        const { courseId } = useParams();
        const [report, setReport] = useState<T | null>(null);
        const [isLoading, setIsLoading] = useState(true);

        useEffect(() => {
            const fetchData = async () => {
                try {
                    const response = await fetch(`${BASE_URL}/courses/${courseId}/${reportType}`);
                    const jsonData = await response.json();
                    setReport(jsonData);
                    setIsLoading(false);
                } catch (error) {
                    console.error('Error fetching data:', error);
                }
            };

            fetchData().then();
        }, [courseId, reportType]);

        return (
            <PageBase>
                {!isLoading && report != null && report.report_state === ReportState.DONE && (
                    <SectionComponent report={report} />
                )}
            </PageBase>
        );
    };
}

export const CommonReportPage = withReportSection(CommonSection, 'common');
export const VideoReportPage = withReportSection(VideoSection, 'video');
export const TextbookReportPage = withReportSection(TextbookSection, 'textbook');
export const ProblemsReportPage = withReportSection(ProblemsSection, 'problems');
export const PagesReportPage = withReportSection(PagesSection, 'pages');
export const ForumReportPage = withReportSection(ForumSection, 'forum');
