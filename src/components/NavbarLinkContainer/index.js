import React from 'react';
import './style.css';

const NavbarItemContainer = (props) => {
    return (
        <span className="navbarItemContainer">{props.children}</span>
    )
}

export default NavbarItemContainer;