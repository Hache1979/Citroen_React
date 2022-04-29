import React from 'react'
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import CartItem from '../CartItem/CartItem';
import { Link } from 'react-router-dom';
import EndPurchase from '../EndPurchase/EndPurchase';
import "./Cart.css";


export default function Cart() {
  const { cartArray, deleteItem } = useContext(CartContext);

  return (
    <div>
      <h2 className='shopping-cart-title'>CITROËN SHOPPING CART</h2>
      {cartArray.length === 0 &&
        <div>
          <h5 className='no-products'>AÚN NO HAY PRODUCTOS EN EL CARRITO DE COMPRAS</h5>
          <Link className="acceso-oferta" to="/Ofertas">REGRESAR A OFERTAS</Link>
        </div>
      }
      {cartArray.map((product) => <CartItem key={product.item.id} product={product} deleteItem={deleteItem} />)}
      {cartArray.length > 0 &&
        <EndPurchase />
      }
    </div>
  )
}



