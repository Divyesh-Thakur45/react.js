import "./Content.css";
import ShirtData from "../db.json";

export default function Content() {
    console.log(ShirtData.shirts)
  return (
    <div className="content">
      {ShirtData.shirts.map((e, index) => {
        
        return (
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
        );
      })}
    </div>
  );
}
