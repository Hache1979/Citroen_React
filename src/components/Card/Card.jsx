import React, { useState } from "react";
import { Card as Card1, Button } from 'react-bootstrap';
import ItemsCount from "../ItemsCounts/ItemsCount";
import './Card.css';

function Card(props) {
    const imageName = require (`../../assets/images/${props.carDetails.imagenUrl}`)

    return (
        <div className="card-container">
            <Card1 className="card-style" style={{ width: '18rem' }}>
                <Card1.Img variant="top" src={imageName} />
                <Card1.Body>
                    <Card1.Title>{props.carDetails.nombre}</Card1.Title>
                    <Card1.Text>{props.carDetails.moneda} {new Intl.NumberFormat().format(props.carDetails.precio)+ ".-"}</Card1.Text>
                    <Card1.Text>Stock: {props.carDetails.stock}</Card1.Text>
                    <ItemsCount stockUnits={props.carDetails.stock} />
                </Card1.Body>
            </Card1>
        </div>
    )
}

export default Card; 