import AggregateMeasureBox from '../Box/AggregateMeasureBox'
import { Box } from '@mui/material'
import * as React from 'react'
import { useMemo } from 'react'
import './AggregateBoxes.css'

type AggregateBoxesProps = {
    numbersArray: Array<number>
}


export function AggregateBoxes(props: AggregateBoxesProps) {
    const minTime = useMemo(() => Math.min(...props.numbersArray), [props.numbersArray])
    const maxTime = useMemo(() => Math.max(...props.numbersArray), [props.numbersArray])
    const meanTime = useMemo(() => Math.round(props.numbersArray.reduce((acc, val) => acc + val, 0) / props.numbersArray.length), [props.numbersArray])
    const medianTime = useMemo(() => {
        const sortedArray = [...props.numbersArray].sort((a, b) => a - b)
        return props.numbersArray.length % 2 === 0
            ? Math.round((sortedArray[sortedArray.length / 2 - 1] + sortedArray[sortedArray.length / 2]) / 2)
            : Math.round(sortedArray[(sortedArray.length - 1) / 2])
    }, [props.numbersArray])

    return (
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
    )
}