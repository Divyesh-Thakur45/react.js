import React, { useContext, useEffect, useState } from 'react'
import { DataOfFireBase } from '../ContextAPI/Context';
import { doc, getDoc, setDoc } from 'firebase/firestore';
import { useParams } from 'react-router-dom';
import { db } from '../Firebase';

export default function EditProduct() {
    const {GetData} = useContext(DataOfFireBase)
    const EditObj = {
        imageUrl: "",
        brand: "",
        price: "",
        sizeCollection: "",
      };
      const { id } = useParams();
      const [editData, setEditData] = useState(EditObj);
      const { imageUrl, brand, price, sizeCollection } = editData;
      const getDataForEdit = async () => {
        getDoc(doc(db, "products", id))
          .then((res) => {
            console.log(res.data())
            setEditData(res.data());
          })
          .catch((err) => console.log(err));
      };
      useEffect(() => {
        getDataForEdit();
      }, []);
      const EditInputChange = (e) => {
        setEditData({ ...editData, [e.target.name]: e.target.value });
      };
      const submitEditForm = async (e) => {
        e.preventDefault();
        try {
          setDoc(doc(db, "products", id), editData)
            .then((res) => {
              alert("Product has been Edited.");
              GetData();
              editData.imageUrl = "";
              editData.brand = "";
              editData.price = "";
              editData.sizeCollection = "";
            })
            .catch((err) => console.log(err));
        } catch (err) {
          console.log(err);
        }
      };
  return (
    
    <div className="mx-4 mt-8 lg:mx-auto py-5 px-4 sm:px-6 md:px-10 border-2 border-gray-300 max-w-md sm:max-w-lg md:max-w-xl">
      <h1 className="text-xl sm:text-2xl font-medium mb-5 text-center">
        Edit Product
      </h1>
      <form
        className="grid grid-cols-1 gap-4"
        onSubmit={(e) => submitEditForm(e)}
      >
        <input
          type="text"
          className="border border-slate-400 rounded-md px-3 py-2"
          placeholder="Enter Image URL"
          name="imageUrl"
          value={imageUrl}
          onChange={(e) => EditInputChange(e)}
          required
        />
        <input
          type="text"
          className="border border-slate-400 rounded-md px-3 py-2"
          placeholder="Enter brand"
          name="brand"
          value={brand}
          onChange={(e) => EditInputChange(e)}
          required
        />
        <input
          type="text"
          className="border border-slate-400 rounded-md px-3 py-2"
          placeholder="Enter Price"
          name="price"
          value={price}
          onChange={(e) => EditInputChange(e)}
          required
        />
        <input
          type="text"
          className="border border-slate-400 rounded-md px-3 py-2"
          placeholder="Enter sizeCollection"
          name="sizeCollection"
          value={sizeCollection}
          onChange={(e) => EditInputChange(e)}
          required
        />
        <button className="bg-blue-600 w-full sm:w-40 h-10 text-white mt-5 rounded-3xl m-auto">
          Edit Product
        </button>
      </form>
    </div>
  )
}
