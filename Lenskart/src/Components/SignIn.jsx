import React, { useState } from "react";
import '../Style/SignIn.css';
const SignIn = () => {
    const [close , setclose] = useState(false);
  return ( 

    <div>
      <div className="sign-in-container" style={{display:close ? "none" : "block" }}>
        <div className="sign-in-card">
          <button className="close-btn" onClick={()=>setclose(!close)}>&times;</button>
          <div className="image-container">
            <img src="https://static1.lenskart.com/media/desktop/img/DesignStudioIcons/DesktopLoginImage.svg" alt="Sign In" />
          </div>
          <div className="form-container">
            <h2>Sign In</h2>
            <input type="text" placeholder="Mobile / Email" />
            <div className="checkbox-container">
              <input type="checkbox" id="whatsapp-updates" />
              <label htmlFor="whatsapp-updates">Get updates on WhatsApp</label>
              <span className="whatsapp-icon">📱</span>
            </div>
            <button className="sign-in-btn">Sign In</button>
            <p>
              New member? <a href="#">Create an Account</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
