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
        
        if (docSnap.exists()) {
          let productCitroen = docSnap.data()
          productCitroen.id = docSnap.id;
          setItem(productCitroen)
         }else{
            console.log("No such document!");
             }
    }  
   
    fetchData();

    }, [id])

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


