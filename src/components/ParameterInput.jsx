import React from 'react';

const ParameterInput = ({ label, value, onChange }) => {
  return (
    <div className="param-input">
      <label>{label}</label>
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Введите значения через запятую"
      />
    </div>
  );
};

export default ParameterInput;
