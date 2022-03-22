import React from "react";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Badge from "@material-ui/core/Badge";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
import './CartWidget.css';

function CartWidget() {
    const [itemCount, setItemCount] = React.useState(0);

    return (
        <div>
            <h1 className="cart-title">VEHÍCULOS PARTICULARES Y UTILITARIOS</h1>
            <div style={{ display: "block", padding: 30 }}>
                <div className="cart-widget">
                    <Badge color="secondary" badgeContent={itemCount}>
                        <ShoppingCartIcon />{" "}
                    </Badge>
                    <ButtonGroup>
                        <Button
                            onClick={() => {
                                setItemCount(Math.max(itemCount - 1, 0));
                            }}
                        >
                            {" "}
                            <RemoveIcon fontSize="small" />
                        </Button>
                        <Button
                            onClick={() => {
                                setItemCount(itemCount + 1);
                            }}
                        >
                            {" "}
                            <AddIcon fontSize="small" />
                        </Button>
                    </ButtonGroup>
                </div>
            </div>
        </div>
    );
}

export default CartWidget;
 