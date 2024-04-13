import PageBase from '../components/PageBase/PageBase'
import * as React from 'react'
import { useEffect, useState } from 'react'
import { BASE_URL } from '../config'


export type ReportPageBaseProps = {
    courseId: string,
    section: string,
    children: React.JSX.Element
}


export default function ReportPageBase(
    props: ReportPageBaseProps
) {
    const [report, setReport] = useState<Report | null>(null)
    const [loading, setLoading] = useState<boolean>(true)
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`${BASE_URL}/courses/${props.courseId}/${props.section}`)
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

        </PageBase>
    )
}