import * as React from 'react'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import PageBase from '../components/PageBase/PageBase'
import { Report, ReportState } from '../models/report'
import { BASE_URL } from '../config'
import CommonSection from '../components/Sections/CommonSection'
import VideoSection from '../components/Sections/VideoSection'
import TextbookSection from '../components/Sections/TextbookSection'
import ProblemsSection from '../components/Sections/ProblemsSection'
import PagesSection from '../components/Sections/PagesSection'
import ForumSection from '../components/Sections/ForumSection'
import { Grid, Typography } from '@mui/material'
import SectionHeader from '../components/Sections/SectionHeader'
import LastUpdateStatus from '../components/LastUpdateStatus'
import { useQuery } from 'react-query'

interface ReportPageProps<T extends Report> {
    report: T;
}

function getHeaderTextByReportType(reportType: string): string {
    switch (reportType) {
    case 'common':
        return 'Аналитика по курсу'
    case 'video':
        return 'Просмотр видеоматериалов'
    case 'textbook':
        return 'Работа с учебником'
    case 'problems':
        return 'Решение задач'
    case 'pages':
        return 'Взаимодействие со страницами курса'
    case 'forum':
        return 'Активность на форуме'
    default:
        return 'Unknown Report'
    }
}


function withReportSection<T extends Report>(SectionComponent: React.ComponentType<ReportPageProps<T>>, reportType: string) {
    return function ReportPage() {
        const { courseId } = useParams()

        const { data: report, isLoading, isError, error, refetch } = useQuery<T, Error>(
            ['report', courseId, reportType],
            async () => {
                const response = await fetch(`${BASE_URL}/courses/${courseId}/${reportType}`)
                if (!response.ok) {
                    throw new Error('Error fetching data')
                }
                return response.json()
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
                        <SectionHeader text={getHeaderTextByReportType(reportType)} />
                    </Grid>
                    <Grid item>
                        {
                            isLoading ?
                                (<Typography color={'#405479'} variant="body2">
                                    Данные загружаются...
                                </Typography>) :
                                isError ?
                                    (<Typography color={'#405479'} variant="body2">Ошибка при загрузке данных: {error.message}</Typography>) :
                                    (<LastUpdateStatus
                                        lastTimeUpdated={new Date(report.last_time_updated)}
                                        onUpdateClick={() => {
                                            // fetchData(true).then()
                                        }}
                                    />)
                        }

                    </Grid>
                </Grid>
                {!isLoading && !isError && report != null && report.report_state === ReportState.DONE && (
                    <SectionComponent report={report} />
                )}
            </PageBase>
        )
    }
}

export const CommonReportPage = withReportSection(CommonSection, 'common')
export const VideoReportPage = withReportSection(VideoSection, 'video')
export const TextbookReportPage = withReportSection(TextbookSection, 'textbook')
export const ProblemsReportPage = withReportSection(ProblemsSection, 'problems')
export const PagesReportPage = withReportSection(PagesSection, 'pages')
export const ForumReportPage = withReportSection(ForumSection, 'forum')
