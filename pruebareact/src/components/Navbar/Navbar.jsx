import React from "react";
import "./navbar.css";
import CartWidget from "../CartWidget/CartWidget";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from "react-router-dom";

const NavBar = () => {
    return(
        <>
        <Navbar bg="primary" data-bs-theme="dark">
        <Container>
          <Navbar.Brand as={Link} to={"/"}>Inicio</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to={"/Auriculares"}>Auriculares</Nav.Link>
            <Nav.Link as={Link} to={"/Monitores"}>Monitores</Nav.Link>
            <Nav.Link as={Link} to={"/Mouses"}>Mouses</Nav.Link>
            <Nav.Link as={Link} to={"/Teclados"}>Teclados</Nav.Link>
            <Nav.Link as={Link} to={"/Cart"}>Tu Carrito</Nav.Link>
          </Nav>
          </Container>
        </Navbar>
        <CartWidget/>
          </>
    )
}

export default NavBar;