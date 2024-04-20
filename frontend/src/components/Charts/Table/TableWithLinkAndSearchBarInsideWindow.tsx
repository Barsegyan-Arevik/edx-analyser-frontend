import * as React from 'react';
import { useMemo } from 'react';
import { Box } from '@mui/material';
import './TableHeatMap.css';
import AggregateMeasureBox from '../Box/AggregateMeasureBox';
import TableWithLinkAndSearchBar from './TableWithLinkAndSearchBar';
import {ChartSize} from '../../../utils/utils';

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

const generateUniqueId = (): number => {
    return Math.floor(Math.random() * Date.now());
};

export default function TableWithLinkAndSearchBarInsideWindow(props: TableWithLinkAndSearchBarInsideWindowProps) {

    // Generate unique ids for rows without id
    const rowsWithIds = useMemo(() => {
        return props.rows.items.map(row => ({
            ...row,
            id: generateUniqueId()
        }));
    }, [props.rows]);

    // Calculate statistics
    const timeSecArray = rowsWithIds.map(row => row.count);
    const minTime = useMemo(() => Math.min(...timeSecArray), [timeSecArray]);
    const maxTime = useMemo(() => Math.max(...timeSecArray), [timeSecArray]);
    const meanTime = useMemo(() => Math.round(timeSecArray.reduce((acc, val) => acc + val, 0) / timeSecArray.length), [timeSecArray]);
    const medianTime = useMemo(() => {
        const sortedArray = [...timeSecArray].sort((a, b) => a - b);
        return timeSecArray.length % 2 === 0
            ? Math.round((sortedArray[sortedArray.length / 2 - 1] + sortedArray[sortedArray.length / 2]) / 2)
            : Math.round(sortedArray[(sortedArray.length - 1) / 2]);
    }, [timeSecArray]);

    return (
        <div className={'modal-window-content'}>
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
                    <Box
                        sx={{
                            borderRadius: 2,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'flex-start',
                            marginLeft: '20px',
                            justifyContent: 'space-between'
                        }}
                    >
                        <div className={'one-box'}>
                            <AggregateMeasureBox measure={'Минимум'} value={minTime} />
                        </div>

                        <div className={'one-box'}>
                            <AggregateMeasureBox measure={'Maксимум'} value={maxTime} />
                        </div>

                        <div className={'one-box'}>
                            <AggregateMeasureBox measure={'Среднее значение'} value={meanTime} />
                        </div>

                        <div className={'one-box'}>
                            <AggregateMeasureBox measure={'Медиана'} value={medianTime} />
                        </div>
                    </Box>
                </Box>
            </Box>
        </div>
    );
}
