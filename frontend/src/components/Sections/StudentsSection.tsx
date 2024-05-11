import * as React from 'react'
import StudentsCommonTable from '../Charts/Table/StudentsCommonTable'
import {Grid} from '@mui/material'
import {StudentsReport} from '../../models/report'

type StudentsSectionPageProps = {
    report: StudentsReport;
}

const columnNames = ['Имя пользователя', 'Дни активности', 'Часы активности', 'Просмотры видео', 'Главы учебника', 'Решённые задачи']
// , 'Вопросы на форуме'

export default function StudentsSection(
    props: StudentsSectionPageProps
) {

    return (
        <Grid container justifyContent={'center'} paddingTop={'30px'}>
            <Grid item xs={12} md={10}>
                <StudentsCommonTable
                    columnNames={columnNames}
                    students={props.report.students_chart.items}
                />
            </Grid>
        </Grid>
    )
}
