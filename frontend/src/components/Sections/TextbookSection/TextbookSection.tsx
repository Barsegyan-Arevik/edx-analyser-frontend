import * as React from 'react'
import './TextbookSection.css'
import { TextbookReport } from '../../../models/report'

export type TableData = {
    columnName: string;
    additionalColumn?: string;
    columnCount: string;
    labelText: string;
    data: string;
}

export type TextbookSectionProps = {
    report: TextbookReport
}

export default function TextbookSection(props: TextbookSectionProps) {

    return (
        <div className={'document_interaction'}>
            {props.report.course_id}
        </div>
    )
}
