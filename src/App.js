import React from 'react';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';

//BOOTSTRAP//
import 'bootstrap/dist/css/bootstrap.min.css';

//Components//
import NavBoot from './components/Navbar/Navbar';
import CartWidget from './components/CartWidget/CartWidget';
import SalesOffer from './components/CardsContainer/CardsContainer';
import Footer from './components/Footer/Footer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';

function App() {
  return (
    <div className='my-app-component'>
      <NavBoot/>
      <CartWidget/>
      <SalesOffer/>
      <ItemDetailContainer/>
      <Footer/>
    </div>

  );
}

export default App


