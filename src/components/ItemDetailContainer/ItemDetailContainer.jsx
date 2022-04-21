import React, { useState, useEffect, useContext } from 'react';
import './ItemDetailContainer.css';
import { useParams } from 'react-router-dom';
import ItemDetail from '../ItemDetail/ItemDetail';
import { CartContext } from '../../context/CartContext';
import { doc, getDoc } from 'firebase/firestore';
import ddbb from '../../Fiberbase';

export default function ItemDetailContainer() {

    const { id } = useParams();

    const { addToCart } = useContext(CartContext);

    const [item, setItem] = useState({});
    const [shopped, setShopped] = useState(false);

    // UseEffect para traer los datos de firebase

    useEffect(() => {
        const fetchData = async () => {
        const docRef = doc(ddbb, 'Productos_Citroen', id);
        const docSnap = await getDoc(docRef);
        console.log(docSnap)
        
        if (docSnap.exists()) {
           console.log("Document data:", docSnap.data());
          let productCitroen = docSnap.data()
          productCitroen.id = docSnap.id;
          setItem(productCitroen)
         }else{
            console.log("No such document!");
             }
    }  
   
    fetchData();

    }, [id])


    // useEffect(() => {
    //     const fetchData = async () => {
    //         const res = await fetch('http://localhost:3000/itemList.json')
    //         console.log(res)
    //         const data = await res.json();
    //         console.log(data)
    //         setItem(data.find(car => car.id === id))
    //     }
    //     setTimeout(() => {
    //         fetchData();
    //     }, 2000);


    // }, [id]);


    const onAdd = (count) => {
        addToCart(item, count);
        setShopped(true)
    }

    return (
        <div>
            {Object.keys(item).length > 0 ? <ItemDetail shopped={shopped} onAdd={onAdd} item={item} /> : <h1 className='loader'>CITROËN LOADING...</h1>}
        </div>
    )
}


