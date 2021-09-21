import React from 'react';
import './style.css';

const NavbarBrand = (props) => {
    return (
        <span className="navbarBrand" onClick={props.onClickHandler}><a href="#">{props.children}</a></span>
    )
}

export default NavbarBrand;