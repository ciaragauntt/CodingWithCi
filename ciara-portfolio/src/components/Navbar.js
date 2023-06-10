import React from "react";
import "./Navbar.css";

const Navbar = () =>{
    return (
        <nav class="navbar">
            <ul className="font-link">
            <li id="about">
                <a>ABOUT</a>
            </li>
            <li id="skills">
                <a>SKILLS</a>
            </li>
            <li id="work">
                <a>WORK</a>
            </li>
            <li id="contact">
                <a>CONTACT</a>
            </li>
            <li id="blog">
                <a>BLOG</a>
            </li>
            </ul>
        </nav>
    )
}

export default Navbar;