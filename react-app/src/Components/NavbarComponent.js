import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import LogoutButton from './LogoutButton';
import 'bootstrap/dist/css/bootstrap.min.css';
import { routes } from '../Routes/routePaths'
const {
    HOME,
    LOGIN,
    SIGNUP,
    GROUPS
} = routes;

const NavbarComponent = () => {
    return (
        <>
            <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Brand href="HOME">List of the day</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href={HOME}>Home</Nav.Link>
                            <Nav.Link href={GROUPS}>Groups</Nav.Link>
                            <Nav.Link href={LOGIN}>Login</Nav.Link>
                            <Nav.Link href={SIGNUP}>Sign up</Nav.Link>
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