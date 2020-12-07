import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
export interface SearchProps {}

const Search: React.FC<SearchProps> = () => {
  const [Text, setText] = useState<string>("");
  const _handleOnChenge = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    setText(event.target.value);
    console.log(Text);
  };
  return (
    <>
      <div className="search">
        <input
          onChange={(event) => _handleOnChenge(event)}
          type="text"
          name="serach"
          placeholder="مثلا جاوا اسکریپت ..."
          className="search_input"
        />
        <FaSearch className="search_icon" />
      </div>
    </>
  );
};

export default Search;
