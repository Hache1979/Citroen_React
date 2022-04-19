import React, { useState, useEffect } from "react";
import './CardsContainer.css';
import { useParams } from 'react-router-dom';
import Card from "../Card/Card";

function SalesOffer() {
    const { categoria } = useParams();
    const [citroen, setCitroen] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchData = async () => {
            const res = await fetch('http://localhost:3000/itemList.json')
            console.log(res)
            const data = await res.json();

            setLoading(false)

            if (categoria) {
                setCitroen(data.filter(car => car.categoria === categoria))
            } else {
                setCitroen(data)
            }
        }
        setTimeout(() => {
            fetchData();
        }, 2000);

    }, [categoria])



    return (
        <div className="salesOffer-container">
            {loading ? (
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