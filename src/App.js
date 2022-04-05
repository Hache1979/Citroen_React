import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

//BOOTSTRAP//
import 'bootstrap/dist/css/bootstrap.min.css';

//Components//
import NavBoot from './components/Navbar/Navbar';
import Home from './components/Pages/01Home';
import Vehiculos from './components/Pages/02Vehiculos';
import Ofertas from './components/Pages/03Ofertas';
import UniversoCitroen from './components/Pages/04UniversoCitroen';
import Contactos from './components/Pages/05Contacto';
import PageNotFound from './components/Pages/06PageNotFound';
import Footer from './components/Footer/Footer';


function App() {
  return (
    <div className='my-app-component'>
      <BrowserRouter>
      <NavBoot/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/Vehiculos' element={<Vehiculos/>} />
        <Route path='/Ofertas/*' element={<Ofertas/>} />
        <Route path='/UniversoCitroen' element={<UniversoCitroen/>} />
        <Route path='/Contacto' element={<Contactos/>} />
        <Route path='*' element={<PageNotFound/>} />
      </Routes>
      <Footer/>
      </BrowserRouter>
    </div>

  );
}

export default App


