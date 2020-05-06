import React from 'react';

const SelectBox = (props) => {
  const { option, name, selectedValue, onChangeHandler } = props;
  return (
    <select
      className="box_select"
      name={name}
      value={selectedValue}
      onChange={(e) => onChangeHandler(e)}
    >
      {Object.keys(option).map((value) => (
        <option key={value} value={value}>
          {value}
        </option>
      ))}
    </select>
  );
};

export default SelectBox;
