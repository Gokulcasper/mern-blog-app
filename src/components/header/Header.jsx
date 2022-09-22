import React from "react";
import "./header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="headerTitles">
        <span className="headerTitleSm">MERN-STACK APPLICATION</span>
        <span className="headerTitleLg">BLOG</span>
      </div>
      <img
        className="headerImg"
        src="https://www.accademia.me/site/uploads/2021/07/web-develop.jpg"
        alt=""
      />
    </div>
  );
};

export default Header;
