import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { home, projects, about, socials } from './pages';
//import NavDropdown from 'react-bootstrap/Dropdown'

const ComponentNavBar = (props) => 
    (
        <>
            <style type="text/css">
                {`
                .navbar {
                    height: 14vh;
                    font-size: 1.5em;
                    max-width: 1200px;
                    margin-left: auto;
                    margin-right: auto;
                }
                .navbar-light .navbar-brand {
                    font-size: 1.5em;
                }
                `}
            </style>
            <Navbar className="text-center" variant="light" text="dark" expand="sm">
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Brand href="javascript:;" onClick={() => props.setPage(home)}>Brendan Holmes</Navbar.Brand>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-1 ml-auto">
                        <Nav.Link href="javascript:;" onClick={() => props.setPage(projects)}>Projects</Nav.Link>
                        <Nav.Link href="javascript:;" onClick={() => props.setPage(about)}>About</Nav.Link>
                        <Nav.Link href="javascript:;" onClick={() => props.setPage(socials)}>Socials</Nav.Link>                 
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </>
    )

export default ComponentNavBar;