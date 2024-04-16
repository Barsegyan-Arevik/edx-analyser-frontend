import SectionHeader from '../SectionHeader/SectionHeader'
import ChartWrapper from '../../Charts/ChartWrapper'
import TableWithLink from '../../Charts/Table/TableWithLink'
import * as React from 'react'
import { PagesReport } from '../../../models/report'
import { tablePages } from '../../../mockdata/CourseInfoPageData'

export type PagesSectionProps = {
    report: PagesReport
}


export default function PagesSection(
    props: PagesSectionProps
) {
    return (
        <div>
            <SectionHeader text='Взаимодействие со страницами курса' style={{ marginTop: '20px' }} />
            <div className="document_interaction_container">
                <div className="item_doc_2">
                    <ChartWrapper
                        chartTitle={'Популярность страниц курса'}
                        chart={
                            <TableWithLink
                                {...tablePages}
                            />
                        }
                    />
                </div>
            </div>
        </div>
    )
}
