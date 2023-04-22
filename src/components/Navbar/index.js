import React from 'react';

const Navbar = (props) => {
    return (
        <div className='bg-yellow-300 text-2xl text-purple-700 p-5 flex justify-center items-center'>{props.children}</div>
    )};

export default Navbar;