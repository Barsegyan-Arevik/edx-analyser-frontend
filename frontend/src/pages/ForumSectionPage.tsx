import PageBase from '../components/PageBase/PageBase'
import * as React from 'react'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { ForumReport, ReportState } from '../models/report'
import { BASE_URL } from '../config'
import ForumSection from '../components/Sections/ForumSection'


export default function ForumSectionPage() {
    const { courseId } = useParams()

    const [report, setReport] = useState<ForumReport | null>(null)
    const [loading, setLoading] = useState<boolean>(true)
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`${BASE_URL}/courses/${courseId}/forum`)
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
                <ForumSection
                    report={report}
                /> : null
            }
        </PageBase>
    )
}