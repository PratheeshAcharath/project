import React from "react";
import { Link } from "react-router-dom";
import "./batchnav.css";

let nav = document.querySelector(".nav");
function toggle(){
    nav.classList.toggle("active");
}
const Batchnav = () => {
    return (
        <header>
            <div class="logo">
        <h3>ICTAK</h3>
    </div>
    <div class="nav">
        <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Batchmangers List</a> </li>
            <li><a href="#">Course List</a></li>
            
            <li><a href="#">Logout</a></li>
        </ul>
        <i class="fas fa-times" onClick="toggle()"></i>
    </div>
    <div class="toggle">
        <i class="fas fa-bars" onClick="toggle()"></i>
    </div>
        </header>
   
   

    );
};   

export default Batchnav;