import React, { useContext, useState } from 'react';
import { Card as Card4, Col, Container, Row, Button} from "react-bootstrap";
import { CartContext } from "../../context/CartContext";
import "./EndPurchase.css";
import {Link} from 'react-router-dom';
import ModalContainer from '../ModalContainer/ModalContainer';


export default function ShoppingCartSummary() {

    const [open, setOpen] = useState(false);
 
    const { TotalPrice } = useContext(CartContext);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <div>
            <Card4 className="shopping-sum">
                <Container>
                    <Col>
                        <Row>
                            <h5 className='shopping-cart-titles'>TOTAL A PAGAR POR SU COMPRA CITROËN:</h5>
                        </Row>
                        <Row>
                            <Col>
                                <p className="shopping-sum-text">SUB-TOTAL:</p>
                            </Col>
                            <Col>
                                <p className="shopping-sum-text price">${new Intl.NumberFormat('de-DE').format(TotalPrice())}.-</p>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <p className="shopping-sum-text">IVA (21%):</p>
                            </Col>
                            <Col>
                                <p className="shopping-sum-text price">${new Intl.NumberFormat('de-DE').format(TotalPrice() * 0.21)}.-</p>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <p className="shopping-sum-text total">TOTAL:</p>
                            </Col>
                            <Col>
                                <p className="shopping-sum-text price total">${new Intl.NumberFormat('de-DE').format(TotalPrice() * 1.21)}.-</p>
                            </Col>
                        </Row>
                        <Row>
                            <Button className='checkout-btn' onClick={handleOpen}>CITROËN CHECK-OUT</Button>
                        </Row>
                    </Col>
                </Container>
            </Card4>
            <Link className="back-to-offer" to="/Ofertas">
                <Button className="back-to-offer-btn">REGRESAR A OFERTAS</Button>
            </Link>
           <ModalContainer handleClose={handleClose} open={open}/>
        </div>
    );
}


