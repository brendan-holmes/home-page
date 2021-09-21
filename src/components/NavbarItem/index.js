import React from 'react';
import './style.css';

const NavbarItem = (props) => {
    return (
        <span className="navbarItem" onClick={props.onClickHandler}><a href="#">{props.children}</a></span>
    )
}

export default NavbarItem;