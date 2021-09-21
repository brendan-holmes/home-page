import React from 'react';
import './style.css';

const Grid = (props) => {
    const items = props.items;
    
    return (
        <div className="grid">
            {items.map(item => {
                return (
                    <div key={item.key}>{item}</div>
                );
            })}
        </div>
    );
};
    
export default Grid;