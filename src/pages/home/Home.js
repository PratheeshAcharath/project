import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import "./home.css";
import ApplicationComponent from "../../Application";
import Login from "../../components/login/Login";

const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <Sidebar />
      <ApplicationComponent />
      <Login />
    </div>
  );
};



export default Home;
