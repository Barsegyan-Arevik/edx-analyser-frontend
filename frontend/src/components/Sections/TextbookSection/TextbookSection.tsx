import * as React from 'react'
import './TextbookSection.css'

export type TableData = {
    columnName: string;
    additionalColumn?: string;
    columnCount: string;
    labelText: string;
    data: string;
}

export type TextbookSectionProps = {
    tableScrollingData: TableData;
    tableSearchedTermsData: TableData;
    headerText: string;
    // !!!graphData?  
}

export default function TextbookSection(props: TextbookSectionProps) {

    return (
        <div className={'document_interaction'}>
        </div>
    )
}
