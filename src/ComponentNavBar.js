import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { home, projects, about, contact } from './pages';

const ComponentNavBar = (props) => 
    (
        <>
            <style type="text/css">
                {`
                .navbar {
                    font-size: 1.5em;
                    max-width: 1200px;
                    margin-left: 5%;
                    margin-right: 5%;
                    padding: 0;
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
                        <Nav.Link href="javascript:;" onClick={() => props.setPage(contact)}>Contact</Nav.Link>                 
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </>
    )

export default ComponentNavBar;