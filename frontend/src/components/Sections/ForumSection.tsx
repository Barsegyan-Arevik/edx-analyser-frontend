import * as React from 'react'
import ForumActivityChart from '../Charts/ForumActivityChart'
import { ForumReport } from '../../models/report'


export type ForumSectionProps = {
    report: ForumReport;
}

export default function ForumSection(props: ForumSectionProps) {
    return (
        <ForumActivityChart questions={props.report.forum_question_chart.items} />
    )
}
