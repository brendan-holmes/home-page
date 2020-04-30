import React from 'react';

import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const ComponentCard = (props) => 
    (
        <>
            <style type="text/css">
                {`
                .card-custom {
                }

                .card:hover {
                    transform: scale(0.98)
                    }
                `}
            </style>
            <Card border='light rounded-lg' bg='light' text='dark' >
                <Card.Img className="img-fluid ml-auto mr-auto rounded-top card-custom" variant='top' data-src="holder.js/350x250"/>
                <Card.Body>
                    <Card.Title>{props.title}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">{props.subtitle}</Card.Subtitle>
                    <Card.Text>{props.text}</Card.Text>
                    <div className='buttons m-auto'>
                    <Button className='m-2' variant="dark" href={props.link}>View</Button>
                    <Button className='m-2' variant="dark" href={props.github}>GitHub</Button>
                    </div>
                </Card.Body>
            </Card>
        </>
    )

export default ComponentCard;