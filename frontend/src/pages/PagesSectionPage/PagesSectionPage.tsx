import * as React from 'react';
import PageBase from '../../components/PageBase/PageBase';
import './PagesSectionPage.css'
import PagesSection from '../../components/Sections/PagesSection/PagesSection'
import { tablePages } from '../../mockdata/CourseInfoPageData'

export default function PagesSectionPage() {

    return (
        <PageBase>
            <PagesSection
                headerText={'Взаимодействие со страницами курса'}
                tableSearchedTermsData={tablePages}
            />
        </PageBase>
    );
}
