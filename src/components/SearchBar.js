import React from 'react';

const SearchBar = ({ setSearchTerm }) => {
  return (
    <input
      type="text"
      placeholder="Search by email"
      className="mt-1 p-2 pl-4 border border-gray-300 rounded w-2/6 placeholder-gray-400 ml-5 mt-4"
      onChange={(e) => setSearchTerm(e.target.value)}
    />
  );
};

export default SearchBar;
