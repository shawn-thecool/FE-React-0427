import React from 'react';
import { useSelector } from 'react-redux';

import { Header, Footer } from '../layout';
import { Aside } from '../aside';
import { SERVICE_NAME, COMPANY_NAME, GNB } from '../../../constants';
import './app.css';

function App() {
  return (
    <div id="app" className="app">
      <Header serviceName={SERVICE_NAME} />
      <div className="tablist"></div>
      <div className="content">
        <Aside categories={GNB.categories} />
        <div className="main"></div>
      </div>
      <Footer companyName={COMPANY_NAME} />
    </div>
  );
}

export default App;
