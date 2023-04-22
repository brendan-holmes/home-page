import React from 'react';
import Card from './Card';

const Grid = (props) => {
    return (
        <div className='grid grid-cols-4 gap-8'>{props.children}</div>
    );
};
    
export default Grid;