import React, { useEffect, useState } from "react";
import './EventHandler.css';
const HandleChange = () => {
  const [data, setdata] = useState([]);

  const ShowData = async () => {
    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/posts");
      const data = await res.json();
      setdata(data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect((e) => {
    ShowData();
  }, []);
  return (
    <div>
      {data.map((e) => (
        <div key={e.id}>
          <h1>{e.title}</h1>
          <h3>{e.body}</h3>
        </div>
      ))}
    </div>
  );
};

export default HandleChange;
