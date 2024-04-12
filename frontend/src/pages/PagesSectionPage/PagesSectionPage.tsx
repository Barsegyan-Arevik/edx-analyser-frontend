import * as React from 'react';
import PageBase from '../../components/PageBase/PageBase';
import './PagesSectionPage.css'
import PagesSection from '../../components/Sections/PagesSection/PagesSection'

export default function PagesSectionPage() {

    return (
        <PageBase>
            <PagesSection
                headerText={'Взаимодействие со страницами курса'}
            />
        </PageBase>
    );
}
