import { useEffect, useState } from "react";
import LoadingIndicator from "./LoadingIndicator";
import CountriesCard from "./CountriesCard";
import Pagination from "./Pagination";

function Countries() { 
  const [data,setdata] = useState([])
  const [loading , setloading] = useState(false);
  const [page, setpage] = useState(1)
  useEffect(()=>{
    setloading(true)
    fetch('https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-countries?page=1&limit=10')
    .then((res)=>res.json())
    .then((data)=>{
      setloading(false)
      setdata(data.data)
    })
    .catch((err)=>console.log(err))
  },[])
  return loading ? <LoadingIndicator /> :  (
    <div>
      <h1 data-testid="countries-header">Countries List</h1>
      <div data-testid="countries-container">
        {/* Countries Card */}
        {data.map((e)=><CountriesCard 
          key={e.id}
          country={e.country}
          population={e.population}  // assuming population is a number
        />)}
      </div>
      <div>
        {/* Pagination */}
        <Pagination />
      </div>
    </div>
  );
}

export default Countries;
