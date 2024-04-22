import * as React from 'react';
import PageBase from '../../components/PageBase/PageBase';
// import './StudentsPage.css';
import {studentSearchPageProps} from '../../mockdata/StudentsPageData';
import StudentsCommonTable from '../../components/Charts/Table/StudentsCommonTable';
import SectionHeader from '../../components/Sections/SectionHeader/SectionHeader';
import {Grid} from '@mui/material'

export default function StudentsPage() {

    return (
        <PageBase>
            <Grid container>
                <Grid item xs={12} md={12}>
                    <SectionHeader text={'Студенты'}/>
                </Grid>
                <Grid container justifyContent={'center'}>
                    <Grid item xs={12} md={10}>
                        <StudentsCommonTable {...studentSearchPageProps} />
                    </Grid>
                </Grid>
            </Grid>
        </PageBase>
    );
}
