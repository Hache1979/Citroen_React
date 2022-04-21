import React from 'react';
import { Card as Card3, Col, Button, Container, Row } from 'react-bootstrap';
import "./CartItem.css";


const CartItem = ({ product, deleteItem }) => {
    // const imageCar = require(`../../assets/images/${product.item.imagenUrl}`)

    return (
        <div className='shopping-cart-Container'>
            <Card3 className='shopping-cart'>
                <Container >
                    <Row>
                        <Col>
                            <img src={product.item.imagenUrl} width="80" height="auto" alt={product.item.nombre} />
                        </Col>
                        <Col className="purchase">
                            {product.item.nombre}
                        </Col>
                        <Col className="purchase">
                            {product.count}
                        </Col>
                        <Col className="purchase">
                            {product.item.moneda} {new Intl.NumberFormat('de-DE').format(product.item.precio * product.count) + ".-"}
                        </Col>
                        <Col>
                            <Button className="remove-button" variant="danger" onClick={() => deleteItem(product.item)}>REMOVER</Button>
                        </Col>
                    </Row>
                </Container>
            </Card3>
        </div>

    )
}

export default CartItem;