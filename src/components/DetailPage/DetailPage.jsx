import React from 'react'
import { Card as Card2 } from 'react-bootstrap';
import ItemsCount from '../ItemsCounts/ItemsCount';
import "./DetailPage.css";


export default function DetailPage(props) {
    const imageCar = require(`../../assets/images/${props.item.imagenUrl}`)


    return (
        <div>
            <Card2 className='car-card-custom-carac' style={{ width: '18rem' }}>
                <Card2.Img className="car-detail-pic" variant="top" src={imageCar}/>
                <Card2.Body>
                    <Card2.Title className='font-custom-name'>{props.item.nombre}</Card2.Title>
                    <Card2.Title className='font-custom-name'>{props.item.moneda} {new Intl.NumberFormat('de-DE').format(props.item.precio)+ ".-"}</Card2.Title >
                    <Card2.Title className='font-custom-titleCarac'>{props.item.TituloCarcteristicas}</Card2.Title>
                    <ul>
                        <li className='font-custom-carac'>{props.item.Carac1}</li>
                        <li className='font-custom-carac'>{props.item.Carac2}</li>
                        <li className='font-custom-carac'>{props.item.Carac3}</li>
                        <li className='font-custom-carac'>{props.item.Carac4}</li>
                    </ul>
                    <Card2.Text className='font-custom-stock'key={"stock.id"}>Stock: {props.item.stock} </Card2.Text>
                    <ItemsCount stockUnits={props.item.stock}/>
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

