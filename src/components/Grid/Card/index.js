import React from 'react';

const Card = (props) =>
    (
        <div className='bg-blue-200 rounded-lg p-5 flex flex-col space-y-4 items-center justify-start'>
            <p className='text-xl'>{props.title}</p>
            <p className='rounded-lg bg-gray-800 text-white p-2 self-start'><h6>{props.subtitle}</h6></p>
            <p className='cardText'><p>{props.text}</p></p>
            <a href={props.buttonHref} className='text-center px-4 py-2 text-sm text-red-500 font-semibold rounded-full hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 bg-purple-300 focus:ring-purple-600 focus:ring-offset-2'>{props.buttonText}</a>
        </div>
    )

export default Card;