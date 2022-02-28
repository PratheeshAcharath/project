import React from "react";
import "./sidebar.css";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="profile">
        <img
          className="profilepicture"
          src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
          alt="profielpic"
        />
        <h3 className="profilename">John Doe</h3>
      </div>
      <div className="dashboard">
        <ul className="dashboardlist">
          <li className="dashboardlistitem">Home</li>
          <li className="dashboardlistitem">Application</li>
          <li className="dashboardlistitem">Status</li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
