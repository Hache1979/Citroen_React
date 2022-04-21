import React, { useState, useEffect } from "react";
import './CardsContainer.css';
import { useParams } from 'react-router-dom';
import Card from "../Card/Card";
import { collection, getDocs } from 'firebase/firestore';
import ddbb from '../../Fiberbase';

function SalesOffer() {
    const { categoria } = useParams();
    const [citroen, setCitroen] = useState([])
    const [loading, setLoading] = useState(true)

    // UseEffect para traer los datos de firebase
    
    useEffect(() => {
        const fetchData = async () => {
            const productosColeccion = collection(ddbb, 'Productos_Citroen');
            console.log(productosColeccion)
            const productSnapshot = await getDocs (productosColeccion);
            console.log(productSnapshot)

            const productList = productSnapshot.docs.map((doc) => {
                let productCitroen = doc.data()
                productCitroen.id = doc.id;
                console.log(productCitroen)
                return productCitroen;
            })

            setLoading(false)

            if (categoria) {
                setCitroen(productList.filter(car => car.categoria === categoria))
            } else {
                setCitroen(productList)
            }
        }

        setTimeout(() => {
            fetchData();
        }, 2000);

    }, [categoria])



    // useEffect(() => {
    //     const fetchData = async () => {
    //         const res = await fetch('http://localhost:3000/itemList.json')
    //         console.log(res)
    //         const data = await res.json();

    //         setLoading(false)

    //         if (categoria) {
    //             setCitroen(data.filter(car => car.categoria === categoria))
    //         } else {
    //             setCitroen(data)
    //         }
    //     }
    //     setTimeout(() => {
    //         fetchData();
    //     }, 2000);

    // }, [categoria])



    return (
        <div className="salesOffer-container">
            {(loading && citroen.length === 0) ? (
                <h2 className="loading-cardContainer">CITROËN LOADING...</h2>
            ) : (
                <>
                    {citroen.map(car => <Card key={car.id} carDetails={car} />)}
                </>
            )}
        </div>
    )
}

export default SalesOffer; 