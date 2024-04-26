import * as React from 'react'
import { Box } from '@mui/material'
import CoursePagePopularityTable from './CoursePagePopularityTable'
import { ChartSize } from '../../../utils/utils'
import { AggregateBoxes } from './AggregateBoxes'

export interface RowData {
    value: string;
    count: number;
}

export type TableWithLinkAndSearchBarInsideWindowProps = {
    rows: RowData[];
    boxTitle: string;
    columnName: string;
    columnCount: string;
    labelText: string;
    tableSize: ChartSize;
}

export default function CoursePagePopularityTableWithStatistics(props: TableWithLinkAndSearchBarInsideWindowProps) {
    return (
        <div>
            <Box
                sx={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    bgcolor: '#F0F3FB',
                    boxShadow: 24,
                    p: 2,
                    borderRadius: 2,
                    justifyContent: 'space-between'
                }}
            >
                <Box
                    sx={{
                        fontSize: 20,
                        p: 1,
                        color: '#405479',
                        alignItems: 'center',
                        fontWeight: 'normal'
                    }}
                >
                    {props.boxTitle}
                </Box>
                <Box
                    sx={{
                        display: 'flex'
                    }}
                >
                    <Box
                        sx={{
                            bgcolor: '#fff',
                            borderRadius: 2,
                            p: 2
                        }}
                    >
                        <CoursePagePopularityTable
                            rows={props.rows}
                            columnName={props.columnName}
                            columnCount={props.columnCount}
                            labelText={props.labelText}
                            tableSize={props.tableSize}
                        />
                    </Box>
                    {
                        props.rows.length > 0 ?
                            <AggregateBoxes numbersArray={props.rows.map(row => row.count)} />
                            : null
                    }
                </Box>
            </Box>
        </div>
    )
}
