import React from "react";
import { Card as Card1 } from 'react-bootstrap';
import { Link } from "react-router-dom";
import './Card.css';

function Card(props) {

    return (
        <div className="card-container">
            <Card1 className="card-style" style={{ width: '18rem' }}>
                <Card1.Img variant="top" src={props.carDetails.imagenUrl} />
                <Card1.Body>
                    <Card1.Title key={"nombre.id"}>{props.carDetails.nombre}</Card1.Title>
                    <Card1.Text key={"moneda.id"}>{props.carDetails.moneda} {new Intl.NumberFormat('de-DE').format(props.carDetails.precio)+ ".-"}</Card1.Text>
                    <Card1.Text key={"stock.id"}>Stock: {props.carDetails.stock}</Card1.Text>
                    <Link className="see-more" to={`/Ofertas/Unidad/${props.carDetails.id}`}>CONOCÉ MAS</Link>
                </Card1.Body>
            </Card1>
        </div>
    )
}

export default Card; 