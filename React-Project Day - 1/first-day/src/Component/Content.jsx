import { useEffect, useState } from "react";
import "./Content.css";

export default function Content() {
  const [data, setdata] = useState([]);
  const [page , setpage] = useState(1)
  const [PageCount, setPageCount] = useState(0)
  const ShirtData = () => {
    fetch(`http://localhost:8080/shirts?_limit=6&_page=${page}`)
      .then((res) => {
        const pages = Math.ceil(res.headers.get('X-total-Count'))
        setPageCount(pages / 6)
        return res.json()
      })
      .then((data) => setdata(data))
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    ShirtData();
  }, [page])
  
  return (
    <div>
      <div className="content">
        {data.map((e, index) => (
          <div key={index} className="card">
            <div style={{ position: "relative" }}>
              <img src={e.imageUrl} alt="Casual Shirt" />
              <div className="rating">
                <span className="star">★ 4 | 1.1k</span>
              </div>
            </div>
            <div className="info">
              <div className="brand">{e.brand}</div>
              <div className="product">{e.title}</div>
              <div className="price">
                <span className="current-price">{e.mrp}</span>
                <span className="original-price">{e.price}</span>
                <span className="discount">{e.discount}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="btns">
        <div className="button-container">
          <button disabled={page == 1} className="prev-button" onClick={()=> setpage(page - 1)}>&lt; Previous</button>
          <span className="page-info">Page {page} </span>
          <button disabled={page >= PageCount} className="next-button" onClick={()=> setpage(page + 1)}>Next &gt;</button>
        </div>
      </div>
    </div>
  )
}
