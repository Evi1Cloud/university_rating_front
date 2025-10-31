import React from 'react';

const YearSelector = ({ selectedYear, onSelect }) => {
  const year = '2025';

  return (
    <div className="year-selector">
      <button
        className={`year-btn ${selectedYear === year ? 'active' : ''}`}
        onClick={() => onSelect(year)}
      >
        {year}
      </button>
    </div>
  );
};

export default YearSelector;
