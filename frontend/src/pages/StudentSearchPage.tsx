import * as React from 'react';
import PageBase from "../components/PageBase/PageBase";
import CustomTable from "../components/Charts/Table/SimpleTable";
import CustomBox from "../components/Charts/CustomBox";
import CustomTableRealData from '../components/Charts/UnusedFiles/TableHeatMapRealData';
import './StudentSearchPage.css';
import { studentSearchPageProps } from './StudentSearchPageData';


export default function StudentSearchPage() {

    return (
        <PageBase>
            <div className={"student_page"}>
                <div className={"content_inside"}>
                    <CustomTable {...studentSearchPageProps} />
                </div>
            </div>
            {/*<CustomBox />*/}
            <footer className="footer">
                {/* Содержимое вашего футера */}
            </footer>
        </PageBase>
    );
};
