import "../../css/PackageFilter.css"
import React, { useState } from 'react';

const PackageFilter = () => {
  const [selectedFilter, setSelectedFilter] = useState('View All');

  const handleFilterChange = (filter) => {
    setSelectedFilter(filter);
  };

  return (
    <div className="package-filter">
      <div className="toggle-buttons">
        <button
          className={selectedFilter === 'View All' ? 'active' : ''}
          onClick={() => handleFilterChange('View All')}
        >
          View All
        </button>
        <button
          className={selectedFilter === 'Today' ? 'active' : ''}
          onClick={() => handleFilterChange('Today')}
        >
          Today
        </button>
        <button
          className={selectedFilter === 'Last 7 Days' ? 'active' : ''}
          onClick={() => handleFilterChange('Last 7 Days')}
        >
          Last 7 Days
        </button>
        <button
          className={selectedFilter === 'This Month' ? 'active' : ''}
          onClick={() => handleFilterChange('This Month')}
        >
          This Month
        </button>
      </div>

    </div>
  );
};

export default PackageFilter;
