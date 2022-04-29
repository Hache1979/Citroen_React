import React, { useState, useEffect } from "react";
import './CardsContainer.css';
import { useParams } from 'react-router-dom';
import Card from "../Card/Card";
import { collection, getDocs } from 'firebase/firestore';
import ddbb from '../../Fiberbase';

function CardsContainer() {
    const { categoria } = useParams();
    const [citroen, setCitroen] = useState([])
    const [loading, setLoading] = useState(true)

    // UseEffect para traer los datos de firebase
    
    useEffect(() => {
        const fetchData = async () => {
            const productosColeccion = collection(ddbb, 'Productos_Citroen');
            const productSnapshot = await getDocs (productosColeccion);
           

            const productList = productSnapshot.docs.map((doc) => {
                let productCitroen = doc.data()
                productCitroen.id = doc.id;
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

export default CardsContainer; 