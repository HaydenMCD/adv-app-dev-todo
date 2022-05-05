import React from 'react';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import LogoutButton from './LogoutButton';

import 'bootstrap/dist/css/bootstrap.min.css';

const NavbarComponent = () => {
    return (
        <>
            <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Brand href="/">List of the day</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="/">Home</Nav.Link>
                            <Nav.Link href="/groups">Groups</Nav.Link>
                            <Nav.Link href="/login">Login</Nav.Link>
                        </Nav>
                        <Nav>
                            <LogoutButton />
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}

export default NavbarComponent