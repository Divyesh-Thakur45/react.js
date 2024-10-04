import React, { useEffect, useState } from "react";
import "../Style/AddToCard.css";
import { useParams } from "react-router-dom";
import axios from "axios";

const AddToCard = () => {
  // const { id } = useParams();
  // console.log(id);
  const [card, setcard] = useState([]);
  // console.log(id);
  const deleteData = (id) =>{
    axios.delete(`https://all-json-server-osax.onrender.com/AddToCard/${id}`)
    .then((res)=>(
      alert("Delete Data Success"),
      addTOCard()
    )
    )
    .catch((errr)=>console.error(errr));
  }

  const addTOCard = () =>{
    axios
      .get(`https://all-json-server-osax.onrender.com/AddToCard`)
      .then((res) => setcard(res.data))
      .catch((err) => console.log(err));

  }
  useEffect(() => {
    addTOCard();
      deleteData();
  }, []);
  return (
    <div>
      <div className="cart-page">
        <header className="header">
          <div className="logo">
            <img
              src="https://static.lenskart.com/media/desktop/img/site-images/main_logo.svg"
              alt="Lenskart Logo"
            />
          </div>
          <div className="secure">
            <span>100% safe and secure</span>
          </div>
        </header>
        <div className="cart-header">
          <span className="cart-title">Cart (1 item)</span>
        </div>
        <div className="CardBothSide">
          <div className="CardMap">
            {card.map((obj) => {
              console.log(obj);
              return (
                <div key={obj.id}>
                  <div className="content">
                    <div className="cart-section">
                      <div className="cart-item">
                        <img
                          src={obj.imageUrl}
                          alt="Blue Block Screen Glasses"
                        />
                        <div className="item-details">
                          <span className="item-title">
                            {obj.brand}: {obj.sizeCollection} <br />{" "}
                            {obj.reviews} , {obj.rating}
                          </span>
                          <span className="item-price">₹{obj.price}</span>
                          <span className="final-price">
                            Final Price ₹{obj.price}
                          </span>
                          <div className="item-actions">
                            <a href="#" onClick={()=>deleteData(obj.id)}>Remove |</a>
                            <a href="#">Repeat</a>
                          </div>
                        </div>
                      </div>
                      <div className="login-reminder">
                        <span>
                          Login to see items from your existing bag and wishlist
                        </span>
                        <button>→</button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="cardBillSide">
            <div className="bill-details">
              <div className="bill-header">
                <span>Bill Details</span>
              </div>
              <div className="bill-item">
                <span>Total item price</span>
                <span>₹1500</span>
              </div>
              <div className="bill-item">
                <span>Total discount</span>
                <span>-₹1000</span>
              </div>
              <div className="bill-total">
                <span>Total payable</span>
                <span>₹500</span>
              </div>
              <div className="discount-code">
                <span>LKFLASH applied</span>
                <span>You are saving ₹1000</span>
                <a href="#">REMOVE</a>
              </div>
              <button className="checkout-btn">Proceed To Checkout</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddToCard;
