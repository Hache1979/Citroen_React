import React from 'react'
import { Card as Card2, Container } from 'react-bootstrap';
import ItemCount from '../ItemCount/ItemCount';
import "./ItemDetail.css";
import { Link } from 'react-router-dom';

export default function ItemDetail({ item, onAdd, shopped}) {

    const {nombre, moneda, precio, TituloCarcteristicas, Carac1, Carac2, Carac3, Carac4, stock, imagenUrl} = item
   
    return (
        <Container  className="container-fluid">
        <div>
            <Card2 className='car-card-custom-carac' style={{ width: '18rem' }}>
                <Card2.Img className="car-detail-pic" variant="top" src={imagenUrl}/>
                <Card2.Body>
                    <Card2.Title className='font-custom-name'>{nombre}</Card2.Title>
                    <Card2.Title className='font-custom-name'>{moneda} {new Intl.NumberFormat('de-DE').format(precio)+ ".-"}</Card2.Title >
                    <Card2.Title className='font-custom-titleCarac'>{TituloCarcteristicas}</Card2.Title>
                    <ul>
                        <li className='font-custom-carac'>{Carac1}</li>
                        <li className='font-custom-carac'>{Carac2}</li>
                        <li className='font-custom-carac'>{Carac3}</li>
                        <li className='font-custom-carac'>{Carac4}</li>
                    </ul>
                    <Card2.Text className='font-custom-stock'key={"stock.id"}>Stock: {stock} </Card2.Text>
                    {shopped ? <Card2.Text className='font-custom-stock'key={"shop.id"}><Link className="go-cart" to={'/Cart'}>IR A CARRITO</Link></Card2.Text> : <ItemCount onAdd={onAdd} stockUnit={stock} />}
                </Card2.Body>
            </Card2>
        </div>
        </Container>
    )
}

