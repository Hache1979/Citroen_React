import React, { useState, useEffect } from "react";
import './CardsContainer.css';
import Card from "../Card/Card";
import { carList } from "../../constants/carList.constant";

function SalesOffer() {

    const [citroen, setCitroen] = useState([])

    const getCars = () => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(carList)
            }, 1000);
        });
    };


    useEffect(() => {
        getCars().then((data) => {
            setCitroen(data)
        })
    }, [])


    return (
        <div className="salesOffer-container">
            {citroen.map(car => <Card carDetails={car} />)}
        </div>
    )
}

export default SalesOffer; 