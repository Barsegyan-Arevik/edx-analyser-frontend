import * as React from 'react'
import PageBase from '../components/PageBase/PageBase'
import { studentSearchPageProps } from '../mockdata/StudentsPageData'
import StudentsCommonTable from '../components/Charts/Table/StudentsCommonTable'
import SectionHeader from '../components/Sections/SectionHeader'
import { Grid } from '@mui/material'

export default function StudentsPage() {

    return (
        <PageBase>
            <Grid container>
                <Grid item xs={12} md={12} paddingTop={'30px'} paddingLeft={'30px'}>
                    <SectionHeader text='Студенты' />
                </Grid>
                <Grid container justifyContent={'center'} paddingTop={'30px'}>
                    <Grid item xs={12} md={10}>
                        <StudentsCommonTable {...studentSearchPageProps} />
                    </Grid>
                </Grid>
            </Grid>
        </PageBase>
    )
}
