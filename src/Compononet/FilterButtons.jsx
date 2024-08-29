import React from 'react';

const FilterButtons = ({ setFilter }) => {
  return (
    <div className="filter-buttons">
      <button onClick={() => setFilter('all')}>Show all tasks</button>
      <button onClick={() => setFilter('active')}>Show Active tasks</button>
      <button onClick={() => setFilter('completed')}>Show Completed tasks</button>
    </div>
  );
};

export default FilterButtons;
