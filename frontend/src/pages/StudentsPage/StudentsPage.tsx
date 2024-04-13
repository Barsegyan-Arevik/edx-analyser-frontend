import * as React from 'react';
import PageBase from '../../components/PageBase/PageBase';
import './StudentsPage.css';
import {studentSearchPageProps} from '../../mockdata/StudentsPageData';
import StudentsCommonTable from '../../components/Charts/Table/StudentsCommonTable';

export default function StudentsPage() {

    return (
        <PageBase>
            <div className={'student_page'}>
                <StudentsCommonTable {...studentSearchPageProps} />
            </div>
        </PageBase>
    );
}
