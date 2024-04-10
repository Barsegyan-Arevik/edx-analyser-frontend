import * as React from 'react';
import PageBase from '../../components/PageBase/PageBase';
import './StudentSearchPage.css';
import {studentSearchPageProps} from './StudentSearchPageData';
import StudentsCommonTable from '../../components/Charts/Table/StudentsCommonTable';

export default function StudentSearchPage() {

    return (
        <PageBase>
            <div className={'student_page'}>
                <StudentsCommonTable {...studentSearchPageProps} />
            </div>
        </PageBase>
    );
}
