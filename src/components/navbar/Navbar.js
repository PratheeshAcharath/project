import React from "react";
import "./navbar.css";

const Navbar = () => {
  return (
    <div className="top">
      <div className="topLeft">
        <h1>ICTAK</h1>
      </div>

      <div className="topRight">
        <img
          className="topImg"
          src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
          alt="profile"
        />
        <ul className="topList">
          <li className="topListItem">LOGOUT</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
