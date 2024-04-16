import PageBase from '../components/PageBase/PageBase'
import * as React from 'react'
import { useEffect, useState } from 'react'
import TextbookSection from '../components/Sections/TextbookSection/TextbookSection'
import { useParams } from 'react-router-dom'
import { ReportState, TextbookReport } from '../models/report'
import { BASE_URL } from '../config'


export default function TextbookSectionPage() {
    const { courseId } = useParams()

    const [report, setReport] = useState<TextbookReport | null>(null)
    const [loading, setLoading] = useState<boolean>(true)
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`${BASE_URL}/courses/${courseId}/textbook`)
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
                <TextbookSection
                    report={report}
                /> : null
            }
        </PageBase>
    )
}