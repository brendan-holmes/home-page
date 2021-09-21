import React from 'react';
import './style.css';

const Card = (props) =>
    (
        <div className="card">
            <div className="cardBody">
                <div className="cardTitle"><h5>{props.title}</h5></div>
                <div className="cardSubtitle"><h6>{props.subtitle}</h6></div>
                <div className="cardText"><p>{props.text}</p></div>
                <div className="cardButtonContainer"><a href={props.buttonHref} className="cardButton">{props.buttonText}</a></div>
            </div>
        </div>
    )

export default Card;