import React, { useState, useEffect } from 'react';
import './ItemDetailContainer.css';
import { useParams } from 'react-router-dom';
import ItemDetail from '../ItemDetail/ItemDetail';


export default function ItemDetailContainer() {

    const { id } = useParams();
    const [item, setItem] = useState({});
    const [shopped, setShopped]= useState(false);

    useEffect(() => {
        const fetchData = async () => {
            const res = await fetch('http://localhost:3000/itemList.json')
            console.log(res)
            const data = await res.json();
            console.log(data)
            setItem(data.find(car => car.id === id))
        }
        setTimeout(() => {
            fetchData();
        }, 2000);


    }, [id]);

    const onAdd = (count) => {
        console.log(`${item.nombre} has been added to the cart. Quantity: ${count}`);
        setShopped(true)
    }

    return (
        <div>
            {Object.keys(item).length > 0 ? <ItemDetail shopped={shopped} onAdd={onAdd} item={item} /> : <h1 className='loader'>CITROËN LOADING...</h1>}
        </div>
    )
}


