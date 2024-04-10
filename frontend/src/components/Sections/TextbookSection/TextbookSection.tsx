import * as React from 'react'
import './TextbookSection.css'
import Header from '../SectionHeader/SectionHeader'
import TableWithLink from '../../Charts/Table/TableWithLink'
import ChartWrapper from '../../Charts/ChartWrapper'

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
            <Header text={props.headerText} style={{ marginTop: '20px' }} />
            <div className="document_interaction_container">
                <div className="item_doc_2">
                    <ChartWrapper
                        chartTitle={'Популярность страниц'}
                        chart={
                            <TableWithLink
                                {...props.tableSearchedTermsData}
                            />
                        }
                    />
                </div>
            </div>
        </div>
    )
}
