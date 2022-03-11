import React from "react";
import '../Admin/admin.css';
import Navbar1 from '../navbar/Navbar1';

let nav = document.querySelector(".nav");
function toggle(){
    nav.classList.toggle("active");
}
const Admin = () => {
    return (
        <header>



            <div class="logo">
        <h3>ICTAK</h3>
    </div>
    <div class="adm">
        <ul>
            
            <li><a href="#">Add BatchManagers</a></li>
            <li><a href="#">Add Courses</a></li>
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




export default Admin;