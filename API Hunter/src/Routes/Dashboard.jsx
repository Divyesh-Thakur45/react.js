import axios from "axios";
import { useContext, useEffect, useState } from "react";
import ProductsTable from "../Components/ProductsTable";
import { AuthContext } from "../Context/AuthContext";
import Loader from "../Components/Loader";

function Dashboard() {
  const [data, setData] = useState([])
  const [loader, setLoader] = useState(false)
  const {login, logOutUser}= useContext(AuthContext)
  const getData = async () => {
    setLoader(true)
    try {
      let response = await axios.get('https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-tech-products')
      setLoader(false)
      setData(response.data.data)
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(()=>{
    getData()
  },[])
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h3 className="text-2xl font-bold text-center mb-6">Dashboard</h3>
      <div className="flex flex-col items-center space-y-4">
        <button
          data-testid="logout-btn"
          className="px-4 py-2 bg-red-600 text-white font-semibold rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50"
          onClick={logOutUser}
        >
          Logout
        </button>
        <p className="text-lg">
          Token: {login.token}
          <b data-testid="user-token" className="ml-2 text-indigo-600"></b>
        </p>
      </div>
      <div className="mt-8 flex justify-center">
        {/* Products table */}
        {loader ? <Loader /> : <ProductsTable data={data} />}
      </div>
    </div>
  );
}
export default Dashboard;