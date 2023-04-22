import React from 'react';

const NavbarItem = (props) => {
    return (
        <button className='p-5 m-5 bg-pink-300 hover:bg-pink-400 rounded-lg' onClick={props.onClickHandler}>{props.children}</button>
    )
}

export default NavbarItem;