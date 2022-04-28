import React from 'react';
import "./CartItem.css";
import {Button} from 'react-bootstrap'; 

const CartItem = ({ product, deleteItem }) => {

    return (
        
        <div className="shopping-cart-Container">
        <div className='shopping-cart'>
            <img className='shopping-cart-img'src={product.item.imagenUrl} width="80" height="auto" alt={product.item.nombre} />
            <p className="purchase">{product.item.nombre}</p>
            <p className="purchase">{product.count}</p>
            <p className="purchase">{product.item.moneda} {new Intl.NumberFormat('de-DE').format(product.item.precio * product.count) + ".-"}</p>
            <Button className="remove-button" variant="danger" onClick={() => deleteItem(product.item)}>REMOVER</Button>
        </div>
        </div>
    )
}

export default CartItem;