import React from 'react';
import {fallDown as Menu} from 'react-burger-menu';
import './Sidebar.css';

export default props => {
    return (
        <Menu right>
            <a className = "menu-item" id="font-style" href = "/">
                Home
            </a>
            <a className = "menu-item" id="font-style" href ="/About">
                About
            </a>
            <a className = "menu=item" id="font-style" href = "/Skills">
                Skills
            </a>
            <a className = "menu-item" id="font-style" href = "/Projects">
                Projects
            </a>
            <a className = "menu-item" id="font-style" href = "/Contact">
                Contact
            </a>
        </Menu>
    );
};