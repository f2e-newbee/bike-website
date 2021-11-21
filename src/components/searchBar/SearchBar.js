import React from "react";
import { ReactComponent as SearchIcon } from "../../assets/img/icons-search.svg";
// import Filter from "../filter/Filter";
/**
 * 關鍵字搜尋元件
 */

const SearchBar = ({
  keyWord,
  setKeyWord,
  handleSearch,
  city,
  setCity,
}) => {
  return (
    <div className="w-full items-center justify-start text-center flex ">
      <div className="bg-gray-50 bg-opacity-25 w-full  sm:px-6 px-2 sm:py-2 py-1 rounded-3xl flex items-center text-white lg:max-w-xs ">
        <SearchIcon className="inline-block mr-2 w-5 h-auto" />
        <input
          type="text"
          placeholder="關鍵字搜尋"
          className="font-semibold outline-none bg-transparent placeholder-current"
          value={keyWord}
          onChange={(e) => setKeyWord(e.target.value)}
        />
      </div>
      <button
        className="bg-pink-custom hover:bg-primary-dark sm:px-6 px-2 sm:py-2 py-1 rounded-3xl text-white font-bold sm:ml-4 ml-1 w-24"
        onClick={() => handleSearch(keyWord)}
      >
        搜尋
      </button>
    </div>
  );
};

export default SearchBar;
