import React from 'react';
import cn from 'classnames';

const NavbarItem = (props) => {
    return (
        <button className={cn(
            'p-2',
            'm-2', 
            'hover:bg-pink-400', 
            'rounded-md',
            'text-xl', 
            'text-blue-100', 
            )} onClick={props.onClickHandler}>{props.children}</button>
    )
}

export default NavbarItem;