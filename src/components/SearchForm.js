import React, { useState } from 'react';

function SearchForm({ onSearch }) {
  const [keyword, setKeyword] = useState('');

  const handleSearch = () => {
    onSearch(keyword);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter a keyword..."
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
}

export default SearchForm;
