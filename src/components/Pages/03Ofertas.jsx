import React from 'react'
import CartWidget from '../CartWidget/CartWidget'
import SalesOffer from '../CardsContainer/CardsContainer'
import ItemDetailContainer from '../ItemDetailContainer/ItemDetailContainer'
import { Routes, Route } from 'react-router-dom';
import Cart from '../Cart/Cart'




export default function Ofertas() {
    return (
        <div>
            <CartWidget />
            <Routes>
                <Route path="/" element={<SalesOffer />} />
                <Route path='/Unidad/:id' element={<ItemDetailContainer />} />
                <Route path='/Category/:categoria' element={<SalesOffer />} />
                <Route path='/Cart' element={<Cart />} />
            </Routes>
        </div>
    )
}
