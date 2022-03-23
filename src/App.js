import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBoot from './components/Navbar/Navbar';
import CartWidget from './components/CartWidget/CartWidget';
import SalesOffer from './components/CardsContainer/CardsContainer';
import Footer from './components/Footer/Footer';

function App() {
  return (
   <div className='my-app-component'>
    <NavBoot/>
    <CartWidget/>
    <SalesOffer/>
    <Footer/>
   </div>
  );
}

export default App


