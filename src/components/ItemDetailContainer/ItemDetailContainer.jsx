import React, {useState, useEffect} from 'react';
import './ItemDetailContainer.css';

export default function ItemDetailContainer() {
    const [item, setItem] = useState({})

    useEffect(() => {
        const fetchData = async () => {
            const res = await fetch('http://localhost:3000/itemList.json')
            console.log(res)
            const data = await res.json();
            console.log(data)
            setItem(data.find(car => car.id === 1));
        };

        setTimeout(() => {
            fetchData();
        }, 2000);

    }, []);

  return (
    <div className='item-detail'> 
        <h5 className='item-detail-name fonti' key={item.name}>{item.nombre}</h5>
        <p className='item-detail-price fonti' key={item.price}>{item.moneda}{new Intl.NumberFormat('de-DE').format(item.precio)}.-</p>
        <p className='item-detail-description' key={item.tituloCarcteristicas}>{item.TituloCarcteristicas}</p>
        <ul>       
            <li className='item-detail-caracteristicas' key={item.carac1}>{item.Carac1}</li> 
            <li  className='item-detail-caracteristicas' key={item.carac2}>{item.Carac2}</li>
            <li className='item-detail-caracteristicas' key={item.carac3}>{item.Carac3}</li>
            <li className='item-detail-caracteristicas' key={item.carac4}>{item.Carac4}</li>
        </ul>
    </div>
  )
}


