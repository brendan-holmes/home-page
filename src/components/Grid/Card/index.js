import React from 'react';
import cn from 'classnames';

const Card = (props) =>
    (
        <div className={cn(
            'bg-blue-200',
            'rounded-md',
            'p-5 flex',
            'flex-col',
            'space-y-4',
            'items-center',
            'justify-start')}>
            <p className='text-lg'>{props.title}</p>
            <p className='rounded-lg bg-gray-800 text-white text-sm p-2'><h6>{props.subtitle}</h6></p>
            <p className='text-center text-md'><p>{props.text}</p></p>
            <a href={props.buttonHref} className='text-center px-4 py-2 text-sm text-red-500 font-semibold rounded-full hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 bg-purple-300 focus:ring-purple-600 focus:ring-offset-2'>{props.buttonText}</a>
        </div>
    )

export default Card;