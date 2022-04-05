import React, { useState, useEffect } from 'react';
import './ItemDetailContainer.css';
import { useParams } from 'react-router-dom';
import DetailPage from '../DetailPage/DetailPage';


export default function ItemDetailContainer() {

    const { id } = useParams();
    const [item, setItem] = useState({})

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
            console.log(id)

            return (
                <div> 
                    {Object.keys(item).length > 0 ? <DetailPage item={item} /> : <h1 className='loader'>CITROËN LOADING...</h1>}
                </div>
            )
}


