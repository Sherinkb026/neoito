import React from "react";
import './Header.css'


function Header(){
    return(
        <div className="Container">
            <div className="header">
                <span className="heading-main">NEOITO</span>
                <ul className="nav-links">
                <li><a href="#services">SERVICES</a></li>
                <li><a href="#case studies">CASE STUDIES</a></li>
                <li><a href="#blog">BLOG</a></li>
                <li><a href="#company">COMPANY</a></li>
            </ul>

            <button className="btn">Lets Talk</button>
            </div>

           
        </div>
    );
}



export default Header