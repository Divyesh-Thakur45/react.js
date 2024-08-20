import { createContext, useState } from "react";

export const mode = createContext();

export default function TheemChanger({ children }) {
  const [Theem, setTheem] = useState(true);

  const [searchData, setsearchData] = useState("");

  // search
  const Search = () => {
    setsearchData(searchData);
  };

  const getSearchData = (e) => {
    setsearchData(e.target.value);
  };

  //   TheemChanger

  const ChangeTheemFun = () => {
    setTheem(!Theem);
  };

  return (
    <mode.Provider value={{ Theem, ChangeTheemFun , searchData , Search , getSearchData}}>{children}</mode.Provider>
  );
}
