import React from 'react';

const Grid = (props) => {
    const items = props.items;
    const numRows = 3;
    
    return (
        <>
            <style type="text/css">
                {`
                .grid {
                    display: grid;
                    grid-auto-rows: 1fr;
                    grid-column-gap: 2em;
                    grid-row-gap: 2em;
                    grid-template-columns: repeat(1, 1fr);
                    }
               
                @media (min-width: 481px) {
                    .grid {
                        grid-template-columns: repeat(2, 1fr);
                    }
                }

                @media (min-width: 769px) {
                    .grid {
                        grid-template-columns: repeat(3, 1fr);
                    }
                }

                @media (min-width: 1025px) {
                    .grid {
                        grid-template-columns: repeat(4, 1fr);
                    }
                }

                @media (min-width: 1201px) {
                    .grid {
                        grid-template-columns: repeat(5, 1fr);
                    }
                }
                `}
            </style>
            <div className="grid">
                {items.map(item => {
                    return (
                        <div key={item.key}>{item}</div>
                    );
                })}
            </div>
        </>
    );
};
    
export default Grid;