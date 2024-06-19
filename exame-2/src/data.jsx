import { useEffect, useState } from "react";
import Box from "./Box";
import "./styles.css";

export default function DataFetch() {
  const [data, setdata] = useState([]);
  function fetchData() {
    console.log(data);
    fetch(
      "https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-groceries"
    )
      .then((res) => res.json())
      .then((data) => setdata(data.data))
      .catch((error) => console.log(error));
  }

  useEffect(() => {
    fetchData();
  });

  return (
    <div className="App">
      {data.map((e) => (
        <Box id={e.id} image={e.image} price={e.price} name={e.name} />
      ))}
    </div>
  );
}
