import React from "react";
export interface SearchProps {}

const Search: React.FC<SearchProps> = () => {
  return (
    <>
      <div className="search">
        <input
          type="text"
          name="serach"
          placeholder="یه چی بنویس"
          className="search_input"
        />
      </div>
    </>
  );
};

export default Search;
