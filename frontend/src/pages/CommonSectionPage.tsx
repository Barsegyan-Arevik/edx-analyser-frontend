import * as React from 'react'
import { useEffect, useState } from 'react'
import PageBase from '../components/PageBase/PageBase'
import CommonSection from '../components/Sections/CommonSection/CommonSection'
import { activeNumberOfStudents, dailyVideoAmount, numberOfStudents } from './CourseInfoPage/CourseInfoPageData'
import { CommonReport, ReportState } from '../models/report'
import { useParams } from 'react-router-dom'
import { BASE_URL } from '../config'


export default function CommonSectionPage() {
    const { courseId } = useParams()

    const [report, setReport] = useState<CommonReport | null>(null)
    const [loading, setLoading] = useState<boolean>(true)
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`${BASE_URL}/courses/${courseId}/common`)
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
                <CommonSection
                    courseId={report.course_id}
                    numberOfStudents={numberOfStudents}
                    activeNumberOfStudents = {activeNumberOfStudents}
                    sectionActivityChart={report.section_activity_chart.items}
                    weeklyActivityChart={dailyVideoAmount}
                /> : null
            }
        </PageBase>
    )
}
