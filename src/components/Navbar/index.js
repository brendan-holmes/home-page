import React from 'react';
import cn from 'classnames';

const Navbar = (props) => {
    return (
        <div className={cn(
            'bg-blue-900', 
            'p-2 flex', 
            'justify-center', 
            'items-center'
            )}>
            {props.children}
        </div>
    )};

export default Navbar;