import PageBase from '../components/PageBase/PageBase'
import * as React from 'react'
import { useEffect, useState } from 'react'
import ProblemsSection from '../components/Sections/ProblemsSection/ProblemsSection'
import { useParams } from 'react-router-dom'
import { ProblemsReport, ReportState } from '../models/report'
import { BASE_URL } from '../config'


export default function ProblemSectionPage() {
    const { courseId } = useParams()

    const [report, setReport] = useState<ProblemsReport | null>(null)
    const [loading, setLoading] = useState<boolean>(true)
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`${BASE_URL}/courses/${courseId}/problems`)
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
                <ProblemsSection
                    report={report}
                /> : null
            }
        </PageBase>
    )
}