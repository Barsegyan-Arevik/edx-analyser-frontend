import * as React from 'react'
import SectionHeader from '../SectionHeader/SectionHeader'
import ForumActivityChart from '../../Charts/ForumActivityChart/ForumActivityChart'
import { ForumReport } from '../../../models/report'


export type ForumSectionProps = {
    report: ForumReport;
}

export default function ForumSection(props: ForumSectionProps) {
    return (
        <div>
            <SectionHeader text="Активность на форуме" />
            <ForumActivityChart questions={props.report.forum_question_chart.items} />
        </div>
    )
}
