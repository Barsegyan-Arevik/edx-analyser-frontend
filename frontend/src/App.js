//@flow

import React from 'react';
import PageBase from './common/PageBase';
import MetricExtractor from "./metrics/MetricExtractor";

export default function App() {
    return (
        <div className="app">
            <PageBase
                showBackButton={true}
                showContinueButton={true}
                content={MetricExtractor()}
            />
        </div>
    );
}
