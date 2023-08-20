// src/components/Filter.js
import React from 'react';

const Filter = ({ options, selected, onChange }) => {
  return (
    <select value={selected} onChange={onChange}>
      <option value="">All</option>
      {options.map((option, index) => (
        <option key={index} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
};

export default Filter;
