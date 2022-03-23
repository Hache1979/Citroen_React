import React from 'react';
import './Navbar.css';
import { Navbar, Nav, Container, Form, FormControl, Button } from 'react-bootstrap';
import CartWidget from '../CartWidget/CartWidget';

function NavBoot() {
    return (
        <div className='grid-container'>
            <Navbar expand="lg" className="color-nav font-face-cb">
                <Container fluid className='container-fluid1'>
                    <Navbar.Brand className= "logo-ac text-white" href="#">CITROËN</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll"/>
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0" 
                            style={{ maxHeight: '250px' }}
                            navbarScroll>
                            <Nav.Link className="text-white btn-hover" href="#action1">HOME</Nav.Link>
                            <Nav.Link className="text-white btn-hover" href="#action2">VEHÍCULOS</Nav.Link>
                            <Nav.Link className="text-white btn-hover" href="#action3">OFERTAS</Nav.Link>
                            <Nav.Link className="text-white btn-hover" href="#action4">UNIVERSO CITROËN</Nav.Link>
                            <Nav.Link className="text-white btn-hover" href="#action5">CONTACTO</Nav.Link>
                        </Nav>
                        <Form className="d-flex">
                            <FormControl
                                type="search"
                                placeholder="ESCRIBA AQUÍ...."
                                className="me-2 font-face-cl"
                                aria-label="Search"
                            />
                            <Button variant="outline-success search-btn">BUSCAR</Button>
                        </Form>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
}

export default NavBoot;