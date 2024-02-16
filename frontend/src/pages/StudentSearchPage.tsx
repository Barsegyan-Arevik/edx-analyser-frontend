import * as React from 'react';
import PageBase from "../components/PageBase/PageBase";
import CustomTable from "../components/Charts/CustomTable";
import CustomBox from "../components/Charts/CustomBox";


export default function StudentSearchPage() {
    return (
        <PageBase>
            <h1>Search for a student...</h1>
            <CustomTable />
            <div>Отступ</div>
            <CustomBox />
        </PageBase>
    );
};
