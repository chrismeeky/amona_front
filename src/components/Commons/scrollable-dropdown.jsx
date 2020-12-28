import React, { useState, useEffect } from "react";

const ScrollableDropdown = ({ list, identifier, callBack }) => {
  const [selectedItem, setSelectedItem] = useState("All Categories");
  const [checked, setChecked] = useState(false);
  const onItemClick = (item) => {
    callBack(item);
    setSelectedItem(item[identifier]);
  };

  useEffect(() => {
   
  }, [checked]);
  return (
    <div className="scrollable-dropdown">
      <input
        type="checkbox"
        className=""
        id="scrollable-dropdown"
        checked={checked}
      />
      <label htmlFor="scrollable-dropdown" onClick={() => setChecked(!checked)}>
        <div className="scrollable-dropdown__display">{selectedItem}</div>
        <i className="scrollable-dropdown__icon fa fa-sort-down"></i>
        <ul className="scrollable-dropdown__list" htmlFor="scrollable-dropdown">
          {list.map((item, index) => (
            <li
              key={index}
              className="scrollable-dropdown__item"
              onClick={() => {
                onItemClick(item);
              }}
            >
              {item[identifier]}
            </li>
          ))}
        </ul>
      </label>
    </div>
  );
};

export default ScrollableDropdown;
