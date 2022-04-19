import React from 'react'
import { Card as Card2 } from 'react-bootstrap';
import ItemCount from '../ItemCount/ItemCount';
import "./ItemDetail.css";
import { Link } from 'react-router-dom';

export default function ItemDetail({ item, onAdd, shopped}) {
    const imageCar = require(`../../assets/images/${item.imagenUrl}`)

    const {nombre, moneda, precio, TituloCarcteristicas, Carac1, Carac2, Carac3, Carac4, stock} = item
   
    return (
        <div>
            <Card2 className='car-card-custom-carac' style={{ width: '18rem' }}>
                <Card2.Img className="car-detail-pic" variant="top" src={imageCar}/>
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

            {/* <div className='car-card-custom-carac' style={{ width: '18rem' }}>
                <img className="car-detail-pic"src={imageCar}/>
                <div>
                    <h2 className='font-custom-name'>{props.item.nombre}</h2>
                    <h2 className='font-custom-name'>{props.item.moneda} {new Intl.NumberFormat('de-DE').format(props.item.precio)+ ".-"}</h2>
                    <h2 className='font-custom-titleCarac'>{props.item.TituloCarcteristicas}</h2>
                    <ul>
                        <li className='font-custom-carac'>{props.item.Carac1}</li>
                        <li className='font-custom-carac'>{props.item.Carac2}</li>
                        <li className='font-custom-carac'>{props.item.Carac3}</li>
                        <li className='font-custom-carac'>{props.item.Carac4}</li>
                    </ul>
                    <p className='font-custom-stock'key={"stock.id"}>Stock: {props.item.stock}</p>
                    <ItemsCount/>
                </div>
            </div> */}

            {/* <Card2 className="car-card-custom-carac text-center" style={{flex: 1}}>
                <Card2.Header>{props.item.nombre}</Card2.Header>
                <Card2.Img className="car-detail-pic" variant="top" src={imageCar}/>    
                <Card2.Body>
                    <Card2.Title className='font-custom-titleCarac'>{props.item.TituloCarcteristicas}</Card2.Title>
                    <ul>
                        <li className='font-custom-carac'>{props.item.Carac1}</li>
                        <li className='font-custom-carac'>{props.item.Carac2}</li>
                        <li className='font-custom-carac'>{props.item.Carac3}</li>
                        <li className='font-custom-carac'>{props.item.Carac4}</li>
                    </ul> 
            <p className='font-custom-stock'key={"stock.id"}>Stock: {props.item.stock}</p>
                    <ItemsCount/>
                </Card2.Body>  
            </Card2> */}


        </div>
    )
}

