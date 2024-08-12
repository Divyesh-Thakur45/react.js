import { createContext, useState } from "react";

export const search = createContext();

export const SearchProvider = ({ children }) => {
  const [searchData, setsearchData] = useState("");
  const GetDataOfSearch = (e) => {
    setsearchData(e.target.value);
  };
  const SetDataOfSearch = () => {
    setsearchData(searchData);
  };

  return (
    <search.Provider
      value={{ GetDataOfSearch, SetDataOfSearch, searchData, setsearchData }}
    >
      {children}
    </search.Provider>
  );
};
