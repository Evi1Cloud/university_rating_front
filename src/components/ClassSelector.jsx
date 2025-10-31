import React from 'react';

const ClassSelector = ({ selectedClass, onSelect }) => {
  const classes = ['Класс Б'];

  return (
    <div className="selector">
      {classes.map((cls) => (
        <button
          key={cls}
          className={`selector-btn ${selectedClass === cls ? 'active' : ''}`}
          onClick={() => onSelect(cls)}
        >
          {cls}
        </button>
      ))}
    </div>
  );
};

export default ClassSelector;
