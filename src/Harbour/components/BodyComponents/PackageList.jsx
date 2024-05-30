import React from 'react';
import PackageTable from './PackageTable';
import "../../css/PackageList.css"

const PackageList = () => {
  const packageToday = [
    {
      id: '7XVFBBMGKLDMF',
      batchId: 'F24, F25',
      weight: '10 Kg',
      centraId: 'C67',
      date: '05/02/24',
    },
    {
      id: '8XVFBBMGKLDMF',
      batchId: 'F24, F25',
      weight: '10 Kg',
      centraId: 'C67',
      date: '05/02/24',
    },
  ];

  const packageYesterday = [
    {
      id: '9XVFBBMGKLDMF',
      batchId: 'F24, F25',
      weight: '10 Kg',
      centraId: 'C67',
      date: '05/02/24',
    },
    {
      id: '6XVFBBMGKLDMF',
      batchId: 'F24, F25',
      weight: '10 Kg',
      centraId: 'C67',
      date: '05/02/24',
    },
  ];

  return (
    <div className="package-list">
      <div className="section">
        <h2>Today</h2>
        {packageToday.map(order => <PackageTable key={order.id} order={order} />)}
      </div>
      <div className="section">
        <h2>Yesterday</h2>
        {packageToday.map(order => <PackageTable key={order.id} order={order} />)}
      </div>
    </div>
  );
};

export default PackageList;
