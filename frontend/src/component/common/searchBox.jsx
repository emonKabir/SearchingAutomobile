import React from "react";

const SearchBox = ({ value, onChange }) => {
  return (
    <div className="search">
      <input
        type="text"
        className="searchTerm"
        value={value}
        onChange={(e) => onChange(e.currentTarget.value)}
        placeholder="What are you looking for?"
      />
    </div>
  );
};

export default SearchBox;
