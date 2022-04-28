import React from "react";

import Badge from "@material-ui/core/Badge";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { CartContext } from "../../context/CartContext";
import { useContext } from "react";
import IconButton from '@material-ui/core/IconButton';
import {Link} from 'react-router-dom';
import './CartWidget.css';  

function CartWidget() {
    const {ProductCount} = useContext(CartContext);

    return (
        <div>
            <h1 className="cart-title">CITROËN STORE</h1>
            <div className="widget-res" style={{ display: "block", padding: 30 }}>
                <div className="cart-widget">
                    <Link to="/Cart">
                    <Badge color="secondary" badgeContent={ProductCount()}>
                        <IconButton className="cart-button" aria-label="cart">
                            <ShoppingCartIcon />{""}
                        </IconButton>
                    </Badge>
                    </Link>
                    
                </div>
            </div>
        </div>
    );
}

export default CartWidget;
 