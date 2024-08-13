import React, { useContext, useEffect, useState } from "react";
import "../Style/Eyeglasses.css";
import { CiHeart } from "react-icons/ci";
import axios from "axios";
import { Link } from "react-router-dom";
import { search } from "./UseContext";

const Eyeglasses = () => {
  const [productFilter, setproductFilter] = useState(null);
  const [brand, setbrand] = useState(null);
  const [price, setprice] = useState(null);
  const [gender, setgender] = useState(null);
  const [page, setPage] = useState(1);
  const { GetDataOfSearch, SetDataOfSearch, searchData, setsearchData } =
    useContext(search);
  // console.log(productFilter);
  console.log(gender);
  // console.log(productFilter)
  const [GogglesData, setGogglesData] = useState([]);
  const fetchGogglesData = () => {
    axios
      .get("http://localhost:8080/products", {
        params: {
          _page: page,
          _limit: 6,
          frame: productFilter,
          brand: brand,
          gender: gender,
          _sort: "price",
          _order: price,
          q: searchData ? searchData :null,
        },
      })
      .then((res) => setGogglesData(res.data))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    fetchGogglesData();
  }, [productFilter, brand, price, gender,page,searchData]);

  return (
    <div>
      <img
        src="https://static5.lenskart.com/media/uploads/plp-free-lenses-desk.png"
        alt=""
      />
      <div className="EyeGlassesSection">
        <div className="EyeGlassesSection-Left">
          <div className="filter-section">
            <div className="filter-group">
              <h3>AGE GROUP</h3>
              <label>
                <input type="checkbox" />
                2-5 yrs(21)
              </label>
              <label>
                <input type="checkbox" />
                5-8 yrs(40)
              </label>
              <label>
                <input type="checkbox" />
                8-12 yrs(53)
              </label>
            </div>

            <div className="filter-group">
              <h3>FRAME TYPE</h3>
              <div className="frame-options">
                <div
                  className="frame-option"
                  onClick={() => setproductFilter("FullRim")}
                >
                  <img
                    src="https://static.lenskart.com/images/cust_mailer/Eyeglass/FullRim.png"
                    alt=""
                  />
                  <p>Full Rim</p>
                </div>
                <div
                  className="frame-option"
                  onClick={() => setproductFilter("RimLess")}
                >
                  <img
                    src="https://static.lenskart.com/images/cust_mailer/Eyeglass/Rimless.png"
                    alt=""
                  />
                  <p>Rimless</p>
                </div>
                <div
                  className="frame-option"
                  onClick={() => setproductFilter("HalfRim")}
                >
                  <img
                    src="https://static.lenskart.com/images/cust_mailer/Eyeglass/HalfRim.png"
                    alt=""
                  />
                  <p>Half Rim</p>
                </div>
              </div>
            </div>

            <div className="filter-group">
              <h3>FRAME SHAPE</h3>
              <div className="frame-options">
                <div
                  className="frame-option"
                  onClick={() => setproductFilter("Rectangle")}
                >
                  <img
                    src="https://static.lenskart.com/images/cust_mailer/Eyeglass/Rectangle.png"
                    alt=""
                  />
                  <p>Rectangle</p>
                </div>
                <div
                  className="frame-option"
                  onClick={() => setproductFilter("Square")}
                >
                  <img
                    src="https://static.lenskart.com/images/cust_mailer/Eyeglass/Square.png"
                    alt=""
                  />
                  <p>Square</p>
                </div>
                <div
                  className="frame-option"
                  onClick={() => setproductFilter("Round")}
                >
                  <img
                    src="https://static.lenskart.com/images/cust_mailer/Eyeglass/Round.png"
                    alt=""
                  />
                  <p>Round</p>
                </div>
                <div
                  className="frame-option"
                  onClick={() => setproductFilter("CatEye")}
                >
                  <img
                    src="https://static.lenskart.com/images/cust_mailer/Eyeglass/CatEye.png"
                    alt=""
                  />
                  <p>Cat Eye</p>
                </div>
                <div
                  className="frame-option"
                  onClick={() => setproductFilter("Geometric")}
                >
                  <img
                    src="https://static.lenskart.com/images/cust_mailer/Eyeglass/Geometric.png"
                    alt=""
                  />
                  <p>Geometric</p>
                </div>
                <div
                  className="frame-option"
                  onClick={() => setproductFilter("Aviator")}
                >
                  <img
                    src="https://static.lenskart.com/images/cust_mailer/Eyeglass/Aviator.png"
                    alt=""
                  />
                  <p>Aviator</p>
                </div>
                <div
                  className="frame-option"
                  onClick={() => setproductFilter("Wayfarer")}
                >
                  <img
                    src="https://static.lenskart.com/images/cust_mailer/Eyeglass/Wayfarer.png"
                    alt=""
                  />
                  <p>Wayfarer</p>
                </div>
                <div
                  className="frame-option"
                  onClick={() => setproductFilter("Hexagonal")}
                >
                  <img
                    src="https://static.lenskart.com/images/cust_mailer/Eyeglass/Hexagonal.png"
                    alt=""
                  />
                  <p>Hexagonal</p>
                </div>
                <div
                  className="frame-option"
                  onClick={() => setproductFilter("Oval")}
                >
                  <img
                    src="https://static.lenskart.com/images/cust_mailer/Eyeglass/Oval.png"
                    alt=""
                  />
                  <p>Oval</p>
                </div>
                <div
                  className="frame-option"
                  onClick={() => setproductFilter("Clubmaster")}
                >
                  <img
                    src="https://static.lenskart.com/images/cust_mailer/Eyeglass/Clubmaster.png"
                    alt=""
                  />
                  <p>Clubmaster</p>
                </div>
              </div>
            </div>
            <div className="filter-menu">
              <select
                className="filter-item"
                onClick={(e) => setbrand(e.target.value)}
              >
                <option>BRANDS</option>
                <option value="John Jacobs">John Jacobs(841)</option>
                <option value="Lenskart Air">Lenskart Air(516)</option>
                <option value="Vincent Chase">Vincent Chase(501)</option>
              </select>
              <select className="filter-item">
                <option>FRAME SIZE</option>
                <option value="1">Extra Narrow(123)</option>
                <option value="2">Narrow(524)</option>
                <option value="3">Extra Wide(244)</option>
              </select>
              <select
                className="filter-item"
                onChange={(e) => setprice(e.target.value)}
              >
                <option disabled selected>
                  PRICE
                </option>
                <option value="asc">Low To High</option>
                <option value="desc">High To Low</option>
              </select>
              <select
                className="filter-item"
                onClick={(e) => setgender(e.target.value)}
              >
                <option disabled selected>
                  GENDER
                </option>
                <option value="Kids">Kids</option>
                <option value="Mans">Mans</option>
                <option value="Females">Females</option>
              </select>
            </div>
          </div>
        </div>
        <div className="EyeGlassesSection-Right">
          {GogglesData.map((el, idx) => {
            return (
              <div className="card">
                <div key={idx}>
                  <div className="card-header">
                    <CiHeart className="HeartIcon" />
                    <Link to={`/description/${el.id}`}>
                      <img
                        src={el.imageUrl}
                        alt="Lenskart Air"
                        className="product-image1"
                      />
                      <img
                        src={el.imageUrl2}
                        alt="Lenskart Air"
                        className="product-image2"
                      />
                    </Link>
                  </div>
                  <div className="card-body">
                    <div className="rating">
                      <span className="rating-value">{el.rating}</span>
                      <span className="rating-count">{el.reviews}</span>
                    </div>
                    <h2 className="product-title">{el.brand}</h2>
                    <div className="ColorAndPrizeSize">
                      <div>
                        <p className="product-size">{el.sizeCollection}</p>
                        <p className="product-price">₹{el.price}</p>
                      </div>
                      <div>
                        <div className="color-options">
                          <span className="color-dot black"></span>
                          <span className="color-dot blue"></span>
                          <span className="color-dot gray"></span>
                          <span className="color-dot more">{el.discount}</span>
                        </div>
                      </div>
                    </div>
                    <p className="offer">Get FREE BLU Screen Lenses</p>
                  </div>
                </div>
              </div>
            );
          })}
          <div className="botton-page-button">
            <div className="pagination-container">
              <button
                onClick={() => page > 1 && setPage(page - 1)}
                className="pagination-button"
              >
                Previous
              </button>
              <span className="page-number">Page {page}</span>
              <button
                onClick={() => setPage(page + 1)}
                className="pagination-button"
              >
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Eyeglasses;
