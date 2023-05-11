//@flow

import React from 'react';
import PageBase from './common/PageBase';

export default function App() {
  return (
    <div className="app">
        <PageBase showBackButton={true} showContinueButton={true}/>
    </div>
  );
}
