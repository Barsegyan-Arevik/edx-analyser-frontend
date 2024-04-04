import * as React from 'react';
import PageBase from '../../components/PageBase/PageBase';
import './StudentSearchPage.css';
import {studentSearchPageProps} from './StudentSearchPageData';
import BigTable from '../../components/Charts/Table/BigTableForStudents';

export default function StudentSearchPage() {

    return (
        <PageBase>
            <div className={'student_page'}>
                <div className={'content_inside'}>
                    <BigTable {...studentSearchPageProps} />
                </div>
            </div>
            {/*<CustomBox />*/}
            <footer className="footer">
                {/* Содержимое вашего футера */}
            </footer>
        </PageBase>
    );
}
