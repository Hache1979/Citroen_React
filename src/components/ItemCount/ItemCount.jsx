import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import './ItemCount.css';

function ItemsCount ({stockUnit, onAdd}) {
    const [count, setCount]= useState (1)
   
  
    const addUnits = () => {
        
        if (count < stockUnit){
            setCount(count + 1)
        }
    }
     
    const removeUnits = () => { 
        setCount(c => Math.max(c - 1, 1));      
    }
    

    return(
        <div>
            <p className="units-quantity">Unidades a comprar: {count} </p>
            <Button className="button-style btn-plus" variant="primary" onClick={addUnits}> + </Button>
            <Button className="button-style btn-dec" variant="primary" onClick={removeUnits}> - </Button>
            <Button className="button-style btn-buy" variant="primary" onClick={()=>onAdd(count)}>AGREGAR A CARRITO</Button>
        </div>
    )
}



export default ItemsCount