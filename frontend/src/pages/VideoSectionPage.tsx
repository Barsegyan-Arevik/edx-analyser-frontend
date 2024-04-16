import * as React from 'react'
import { useEffect, useState } from 'react'
import PageBase from '../components/PageBase/PageBase'
import VideoSection from '../components/Sections/VideoSection/VideoSection'
import { useParams } from 'react-router-dom'
import { ReportState, VideoReport } from '../models/report'
import { BASE_URL } from '../config'

export default function VideoSectionPage() {
    const { courseId } = useParams()

    const [report, setReport] = useState<VideoReport | null>(null)
    const [loading, setLoading] = useState<boolean>(true)
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`${BASE_URL}/courses/${courseId}/video`)
                const jsonData = await response.json()
                setReport(jsonData)
                console.log(jsonData)
                setLoading(false)
            } catch (error) {
                console.error('Error fetching data:', error)
            }
        }

        fetchData().then()
        return () => {
            //
        }
    }, [])

    return (
        <PageBase>
            {report != null && report.report_state == ReportState.DONE ?
                <VideoSection
                    report={report}
                /> : null
            }
        </PageBase>
    )
}