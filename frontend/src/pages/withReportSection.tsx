import * as React from 'react'
import { useEffect, useState } from 'react'
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
import { Grid } from '@mui/material'
import SectionHeader from '../components/Sections/SectionHeader'
import LastUpdateStatus from '../components/Charts/LastUpdateStatus'

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
        const [report, setReport] = useState<T | null>(null)
        const [isLoading, setIsLoading] = useState<boolean>(true)
        const [error, setError] = useState<Error | null>(null)

        const fetchData = async (forceUpdate: boolean) => {
            try {
                let url = `${BASE_URL}/courses/${courseId}/${reportType}`
                if (forceUpdate) {
                    url += '?forceUpdate=true'
                }
                const response = await fetch(url)
                if (!response.ok) {
                    throw new Error('Error fetching data')
                }
                const report = await response.json()
                setReport(report)
                setIsLoading(false)
            } catch (error) {
                console.error('Error fetching data:', error)
                setError(error)
                setIsLoading(false)
            }
        }

        useEffect(() => {
            fetchData(false).then()
        }, [courseId, reportType])

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
                                (<div>
                                    Данные загружаются...
                                </div>) : error ?
                                    (<div>Ошибка при загрузке данных: {error.message}</div>) :
                                    (<LastUpdateStatus
                                        lastTimeUpdated={new Date(report.last_time_updated)}
                                        onUpdateClick={() => {
                                            fetchData(true).then()
                                        }}
                                    />)
                        }

                    </Grid>
                </Grid>
                {!isLoading && !error && report != null && report.report_state === ReportState.DONE && (
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
