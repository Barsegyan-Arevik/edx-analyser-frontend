import * as React from 'react';
import PageBase from "../common/PageBase/PageBase";

const StudentSearch = () => {
    return (
        <div>
            <PageBase
                showBackButton={false}
                showContinueButton={false}
                content={
                    <h1>Specific student page</h1>
                }
            />
        </div>
    );
};

export default StudentSearch;