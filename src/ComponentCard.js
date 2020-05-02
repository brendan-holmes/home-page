import React from 'react';

import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const ComponentCard = (props) => 
    (
        <>
            <style type="text/css">
                {`
                .card:hover {
                    opacity: 0.7;
                    }
                .button-container {
                    width: 100%;
                    text-align: center;
                    /* position: absolute; */
                    /* bottom: 0px; */
                }
                `}
            </style>
                <Card className='mb-4' border='light rounded-lg' bg='light' text='dark' >
                    <Card.Img className="img-fluid ml-auto mr-auto rounded-top card-custom" variant='top' data-src="holder.js/350x250"/>
                    <Card.Body>
                        <Card.Title>{props.title}</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">{props.subtitle}</Card.Subtitle>
                        <Card.Text>{props.text}</Card.Text>
                        <div className="button-container">
                            <Button variant="secondary" className="stretched-link mb-3" size="sm" href={props.github}>View on Github</Button>
                        </div>
                    </Card.Body>
                </Card>
                
        </>
    )

    //<a href={props.github} class="card-link"></a>

export default ComponentCard;