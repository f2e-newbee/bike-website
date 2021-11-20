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
    <div className="w-full lg:flex block items-center justify-start text-center">
      <div className="bg-gray-50 bg-opacity-25 w-full lg:max-w-xs	py-2 px-2 rounded-3xl flex items-center text-white lg:mb-0 mb-5">
        <SearchIcon className="inline-block mr-2 w-5 h-auto" />
        <input
          type="text"
          placeholder="關鍵字搜尋"
          className="font-semibold outline-none bg-transparent placeholder-current"
          value={keyWord}
          onChange={(e) => setKeyWord(e.target.value)}
        />
      </div>
      <div>
          <button
            className="bg-pink-custom hover:bg-primary-dark px-6 py-2 rounded-3xl text-white font-bold ml-4 w-24"
            onClick={() => handleSearch(keyWord)}
          >
            搜尋
          </button>
      </div>
    </div>
  );
};

export default SearchBar;
