import * as React from 'react';
import {useEffect, useState} from 'react';
import PageBase from '../../components/PageBase/PageBase';
import './PagesSectionPage.css'
import PagesSection from '../../components/Sections/PagesSection/PagesSection'
import {useParams} from 'react-router-dom'
import {PagesReport, ReportState} from '../../models/report'
import {BASE_URL} from '../../config'

export default function PagesSectionPage() {
    const {courseId} = useParams()

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
