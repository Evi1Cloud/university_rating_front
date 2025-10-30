import React, { useState } from 'react';

const YearSelector = ({ selectedYear, onSelect }) => {
  const [years, setYears] = useState(['2025']);
  const [isAdding, setIsAdding] = useState(false);
  const [newYear, setNewYear] = useState('');

  const handleAddClick = () => {
    setIsAdding(true);
  };

  const handleYearSubmit = (e) => {
    e.preventDefault();
    if (newYear && !years.includes(newYear)) {
      setYears([...years, newYear]);
      onSelect(newYear);
    }
    setNewYear('');
    setIsAdding(false);
  };

  const handleDeleteYear = (yearToDelete) => {
    const updatedYears = years.filter((y) => y !== yearToDelete);
    setYears(updatedYears);

    // если удалили выбранный год — сбрасываем выбор
    if (selectedYear === yearToDelete && updatedYears.length > 0) {
      onSelect(updatedYears[0]);
    } else if (updatedYears.length === 0) {
      onSelect('');
    }
  };

  return (
    <div className="year-selector">
      {years.map((year) => (
        <div key={year} className="year-item">
          <button
            className={`year-btn ${selectedYear === year ? 'active' : ''}`}
            onClick={() => onSelect(year)}
          >
            {year}
          </button>
          <button
            className="delete-btn"
            onClick={() => handleDeleteYear(year)}
            title="Удалить год"
          >
            ✖
          </button>
        </div>
      ))}

      {isAdding ? (
        <form onSubmit={handleYearSubmit} className="add-year-form">
          <input
            type="text"
            value={newYear}
            onChange={(e) => setNewYear(e.target.value)}
            placeholder="Введите год"
            className="year-input"
            autoFocus
          />
          <button type="submit" className="year-btn confirm-btn">
            ✅
          </button>
        </form>
      ) : (
        <button className="year-btn add-btn" onClick={handleAddClick}>
          +
        </button>
      )}
    </div>
  );
};

export default YearSelector;
