import AggregateMeasureBox from '../Box/AggregateMeasureBox'
import { Grid } from '@mui/material'
import * as React from 'react'
import { useMemo } from 'react'
// import './AggregateBoxes.css'

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
        <Grid container spacing={2} direction={'column'} justifyContent={'space-between'}>
            <Grid item xs={12} md={3}>
                <AggregateMeasureBox measure={'Минимум'} value={minTime} />
            </Grid>
            <Grid item xs={12} md={3}>
                <AggregateMeasureBox measure={'Максимум'} value={maxTime} />
            </Grid>
            <Grid item xs={12} md={3}>
                <AggregateMeasureBox measure={'Среднее значение'} value={meanTime} />
            </Grid>
            <Grid item xs={12} md={3}>
                <AggregateMeasureBox measure={'Медиана'} value={medianTime} />
            </Grid>
        </Grid>
    )
}
