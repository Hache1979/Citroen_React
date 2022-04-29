import React from 'react';
import './NavBar.css';
import { Navbar, Nav, Container, Form, FormControl, Button, Dropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';


function NavBar() {
    return (
        <div className='grid-container'>
            <Navbar expand="lg" className="color-nav font-face-cb">
                <Container fluid className='container-fluid1'>
                    <Navbar.Brand as={"span"} className="logo-ac text-white"><Link className="navbar-custom" to={'/'}>CITROËN</Link></Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0"
                            style={{ maxHeight: '250px' }}
                            navbarScroll>
                            <Nav.Link as={"span"} className="text-white btn-hover"><Link className="navbar-custom" to={'/'}>HOME</Link></Nav.Link>
                            <Nav.Link as={"span"} className="text-white btn-hover"><Link className="navbar-custom" to={'/Vehiculos'}>VEHICULOS</Link></Nav.Link>
                            <Dropdown className="drop-menu-color">
                                <Dropdown.Toggle className="drop-menu bck-color" variant="success" id="dropdown-basic"><Link className="navbar-custom custom" to={''}>OFERTAS</Link>
                                </Dropdown.Toggle>
                                <Dropdown.Menu>
                                    <Dropdown.Item as={"span"} ><Link className='drop-down-sections' to={'/Ofertas/Category/Particulares'}>PARTICULARES</Link></Dropdown.Item>
                                    <Dropdown.Item as={"span"} ><Link className='drop-down-sections' to={'/Ofertas/Category/Utilitarios'}>UTILITARIOS</Link></Dropdown.Item>
                                    <Dropdown.Item as={"span"} ><Link className='drop-down-sections' to={'/Ofertas'}>OFERTA COMPLETA</Link></Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                            <Nav.Link as={"span"} className="text-white btn-hover"><Link className="navbar-custom" to={'/UniversoCitroen'}>UNIVERSO CITROËN</Link></Nav.Link>
                            <Nav.Link as={"span"}  className="text-white btn-hover"><Link className="navbar-custom" to={'/Contacto'}>CONTACTO</Link></Nav.Link>
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

export default NavBar;