import React from 'react';

const GroupSelector = ({ selectedGroup, onSelect }) => {
  const groups = ['Группа 1', 'Группа 2', 'Группа 3'];

  return (
    <div className="selector">
      {groups.map((group) => (
        <button
          key={group}
          className={`selector-btn ${selectedGroup === group ? 'active' : ''}`}
          onClick={() => onSelect(group)}
        >
          {group}
        </button>
      ))}
    </div>
  );
};

export default GroupSelector;
