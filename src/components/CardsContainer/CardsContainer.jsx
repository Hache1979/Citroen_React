import React from "react";
import './CardsContainer.css';
import Card from "../Card/Card";
import { carList } from "../../constants/carList.constant";

function SalesOffer() {
    return (
        <div className="salesOffer-container">
           {carList.map(car => <Card carDetails={car}/>)}
        </div>
    )
}

export default SalesOffer; 