import { collection, deleteDoc, doc, getDocs } from "firebase/firestore";
import { createContext, useEffect, useState } from "react";
import { db } from "../Firebase";

export const DataOfFireBase = createContext();

export const FirebaseDataProvider = ({ children }) => {
  const [prouctData, setprouctData] = useState([]);
  const GetData = () => {
    getDocs(collection(db, "products"))
      .then((res) => {
        const data = res.docs.map((el, idx) => ({ ...el.data(), id: el.id }));
        setprouctData(data);
      })
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    GetData();

  }, []);

  const DeleteProduct = (id) => {
    deleteDoc(doc(db, "products", id));
    alert("Product deleted");
    GetData()
  };
  return (
    <DataOfFireBase.Provider
      value={{ prouctData, setprouctData, GetData, DeleteProduct }}
    >
      {children}
    </DataOfFireBase.Provider>
  );
};
