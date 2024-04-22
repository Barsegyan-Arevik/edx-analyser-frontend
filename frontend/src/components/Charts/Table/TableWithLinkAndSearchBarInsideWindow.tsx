import * as React from 'react'
import { Box } from '@mui/material'
import TableWithLinkAndSearchBar from './TableWithLinkAndSearchBar'
import { ChartSize } from '../../../utils/utils'
import { AggregateBoxes } from './AggregateBoxes'

export interface RowData {
    value: string;
    count: number;
}

interface Chart {
    items: RowData[];
}

export type TableWithLinkAndSearchBarInsideWindowProps = {
    rows: Chart;
    boxTitle: string;
    columnName: string;
    columnCount: string;
    labelText: string;
    baseTableSize: ChartSize;
    modalTableSize: ChartSize;
}

export default function TableWithLinkAndSearchBarInsideWindow(props: TableWithLinkAndSearchBarInsideWindowProps) {
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
                        <TableWithLinkAndSearchBar
                            rows={props.rows}
                            columnName={props.columnName}
                            columnCount={props.columnCount}
                            labelText={props.labelText}
                            size={props.baseTableSize}
                        />
                    </Box>
                    {
                        props.rows.items.length > 0 ?
                            <AggregateBoxes numbersArray={props.rows.items.map(row => row.count)} />
                            : null
                    }
                </Box>
            </Box>
        </div>
    )
}
