import SectionHeader from '../SectionHeader/SectionHeader'
import ChartWrapper from '../../Charts/ChartWrapper'
import TableWithLink from '../../Charts/Table/TableWithLink'
import * as React from 'react'
import { TableData } from '../TextbookSection/TextbookSection'

export type PagesSectionProps = {
    headerText: string;
    tableSearchedTermsData: TableData
}


export default function PagesSection(
    props: PagesSectionProps
) {
    return (
        <div>
            <SectionHeader text={props.headerText} style={{ marginTop: '20px' }} />
            <div className="document_interaction_container">
                <div className="item_doc_2">
                    <ChartWrapper
                        chartTitle={'Популярность страниц курса'}
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
