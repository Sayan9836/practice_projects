import React, { useState } from "react";
import photo from "../assests/Photograph1.jpg";
import "./sidebar.css";
const Sidebar = () => {
  const [isClicked, setIsClicked] = useState(false);
  return (
    <div>
      <div className={isClicked ? `sidebar active` : `sidebar`}>
        <div className="header">
          <div className={isClicked ? "header_text" : ""}>WELCOME</div>
          <div
            className={isClicked ? `slider_button active` : `slider_button`}
            onClick={() => setIsClicked(!isClicked)}
          >
            {isClicked ? (
              <i class="fa-solid fa-burger"></i>
            ) : (
              <i class="fa-solid fa-bars"></i>
            )}
          </div>
        </div>
        <div className="middle">
          <ul>
            <div className={isClicked ? "elements" : ""}>
              <i class="fa-solid fa-house"></i>
              <li>HOME</li>
            </div>
            <div className={isClicked ? "elements" : ""}>
              <i class="fa-solid fa-folder"></i>
              <li>ABOUT</li>
            </div>
            <div className={isClicked ? "elements" : ""}>
              <i class="fa-solid fa-taxi"></i>
              <li>SERVICES</li>
            </div>
            <div className={isClicked ? "elements" : ""}>
              <i class="fa-solid fa-star"></i>
              <li>PRODUCTS</li>
            </div>
            <div className={isClicked ? "elements" : ""}>
              <i class="fa-solid fa-mug-hot"></i>
              <li>CLIENTS</li>
            </div>
            <div className={isClicked ? "elements" : ""}>
              <i class="fa-solid fa-address-card"></i>
              <li>CONTACT</li>
            </div>
          </ul>
        </div>
        <div className={isClicked ? "footer active" : "footer"}>
          <img src={photo} alt="" width={70} height={70} />
          <div>
            <span>Logout</span>
            <i class="fa-solid fa-right-from-bracket"></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
