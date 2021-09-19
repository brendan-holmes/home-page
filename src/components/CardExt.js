import React from 'react';

const CardExt = (props) => 
    (
        <>
            <style type="text/css">
                {`
                .card-ext {
                    border-style: solid;
                    border-color: gray;
                    border-width: 1px;
                    border-radius: 0.4em;
                    padding: 1em;
                }
                .card-ext, .card-ext-body {
                    position: relative;
                    height: 100%;
                }

                .h1, .h2, .h3, .h4, .h5, .h6 {
                    margin-bottom: .5rem;
                    font-weight: 500;
                    line-height: 1.2;
                }
                h6 {
                    color: gray;
                }
                .card-ext-button {
                    width: 100%;
                    text-align: center;
                }
                button {
                    border: none;
                    background-color: rgb(242, 242, 242);
                }
                button:hover {
                    background-color: rgb(200, 200, 200);
                }
                `}
            </style>
            <div className="card-ext">
                <div className="card-ext-body">
                    <div className="card-ext-title"><h5>{props.title}</h5></div>
                    <div className="card-ext-subtitle"><h6>{props.subtitle}</h6></div>
                    <div className="card-ext-text"><p>{props.text}</p></div>
                    <div className="card-ext-button"><button href={props.buttonHref}>{props.buttonText}</button></div>
                </div>
            </div>
        </>
    )

export default CardExt;