import * as React from 'react';
import PageBase from '../../components/PageBase/PageBase';
import './PagesSectionPage.css'
import PagesSection from '../../components/Sections/PagesSection/PagesSection'
import { tablePages } from '../../mockdata/CourseInfoPageData'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { CommonReport, PagesReport, ReportState } from '../../models/report'
import { BASE_URL } from '../../config'
import CommonSection from '../../components/Sections/CommonSection/CommonSection'

export default function PagesSectionPage() {
    const { courseId } = useParams()

    const [report, setReport] = useState<PagesReport | null>(null)
    const [loading, setLoading] = useState<boolean>(true)
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`${BASE_URL}/courses/${courseId}/pages`)
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
                <PagesSection
                    report={report}
                /> : null
            }
        </PageBase>
    )
}
