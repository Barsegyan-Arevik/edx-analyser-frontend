import * as React from 'react'
import {useEffect} from 'react'
import {useParams} from 'react-router-dom'
import PageBase from '../components/PageBase/PageBase'
import {Report, ReportState} from '../models/report'
import {BASE_URL} from '../config'
import CommonSection from '../components/Sections/CommonSection'
import VideoSection from '../components/Sections/VideoSection'
import TextbookSection from '../components/Sections/TextbookSection'
import ProblemsSection from '../components/Sections/ProblemsSection'
import PagesSection from '../components/Sections/PagesSection'
import ForumSection from '../components/Sections/ForumSection'
import {Grid, Typography} from '@mui/material'
import SectionHeader from '../components/Sections/SectionHeader'
import LastUpdateStatus from '../components/LastUpdateStatus'
import {useQuery} from 'react-query'
import {SectionType} from '../models/common'
import LoadingSectionSkeleton from '../components/LoadingSectionSkeleton'
import {axiosApiInstance} from '../interceptors'
import StudentsSection from '../components/Sections/StudentsSection'

interface ReportPageProps<T extends Report> {
    report: T;
}

function getHeaderTextByReportType(sectionType: SectionType): string {
    switch (sectionType) {
    case SectionType.PAGES:
        return 'Взаимодействие со страницами курса'
    case SectionType.COMMON:
        return 'Аналитика по курсу'
    case SectionType.FORUM:
        return 'Активность на форуме'
    case SectionType.PROBLEMS:
        return 'Решение задач'
    case SectionType.TEXTBOOK:
        return 'Работа с учебником'
    case SectionType.VIDEO:
        return 'Просмотр видеоматериалов'
    case SectionType.STUDENTS:
        return 'Студенты'
    }
}

function getUrlBySectionType(sectionType: SectionType): string {
    switch (sectionType) {
    case SectionType.PAGES:
        return 'pages'
    case SectionType.COMMON:
        return 'common'
    case SectionType.FORUM:
        return 'forum'
    case SectionType.PROBLEMS:
        return 'problems'
    case SectionType.TEXTBOOK:
        return 'textbook'
    case SectionType.VIDEO:
        return 'video'
    case SectionType.STUDENTS:
        return 'students'
    }
}


function withReportSection<T extends Report>(SectionComponent: React.ComponentType<ReportPageProps<T>>, sectionType: SectionType) {
    return function ReportPage() {
        const {courseId} = useParams()

        const {data: report, isLoading, isError, error, refetch} = useQuery<T, Error>(
            ['report', courseId, sectionType],
            async () => {
                const response = await axiosApiInstance.get(`${BASE_URL}/courses/${courseId}/${getUrlBySectionType(sectionType)}?force-update=true`)
                return response.data
            },
            {
                staleTime: 0
            }
        )

        useEffect(() => {
            let interval: NodeJS.Timeout | null = null

            if (!isError && report && report.report_state === ReportState.IN_PROGRESS) {
                interval = setInterval(() => {
                    refetch()
                }, 5000)
            }

            return () => {
                if (interval) {
                    clearInterval(interval)
                }
            }
        }, [report, isError, refetch])
        return (
            <PageBase>
                <Grid container justifyContent={'space-between'} direction={'row'} paddingTop="30px" paddingLeft="30px"
                      paddingBottom="20px">
                    <Grid item>
                        {/*{sectionType === SectionType.COMMON ? <SectionHeader text={getHeaderTextByReportType(sectionType) + ' ' + report.course_id}/> : <SectionHeader text={getHeaderTextByReportType(sectionType)}/>}*/}
                        <SectionHeader text={getHeaderTextByReportType(sectionType)}/>
                    </Grid>
                    <Grid item>
                        {
                            isLoading || report == null || report.report_state == ReportState.IN_PROGRESS ?
                                (<Typography color={'#405479'} variant="body2">
                                    Данные загружаются...
                                </Typography>) :
                                isError ?
                                    (<Typography color={'#405479'} variant="body2">Ошибка при загрузке
                                        данных: {error.message}</Typography>) :
                                    (<LastUpdateStatus
                                        lastTimeUpdated={new Date(report.last_time_updated)}
                                        onUpdateClick={() => {
                                            // fetchData(true).then()
                                        }}
                                    />)
                        }

                    </Grid>
                </Grid>
                {
                    isLoading || report == null || report.report_state == ReportState.IN_PROGRESS ? (
                        <LoadingSectionSkeleton/>
                    ) : isError ? null : (
                        <SectionComponent report={report}/>
                    )
                }
            </PageBase>
        )
    }
}

export const CommonReportPage = withReportSection(CommonSection, SectionType.COMMON)
export const VideoReportPage = withReportSection(VideoSection, SectionType.VIDEO)
export const TextbookReportPage = withReportSection(TextbookSection, SectionType.TEXTBOOK)
export const ProblemsReportPage = withReportSection(ProblemsSection, SectionType.PROBLEMS)
export const PagesReportPage = withReportSection(PagesSection, SectionType.PAGES)
export const ForumReportPage = withReportSection(ForumSection, SectionType.FORUM)

export const StudentsReportPage = withReportSection(StudentsSection, SectionType.STUDENTS)