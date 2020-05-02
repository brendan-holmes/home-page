import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
//import NavDropdown from 'react-bootstrap/Dropdown'

// Font awesome icon imports
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
//import { faGithub } from '@fortawesome/free-brands-svg-icons'
//import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
//import { faFileInvoice } from '@fortawesome/free-solid-svg-icons'
//import { faUser } from '@fortawesome/free-solid-svg-icons'

const ComponentNavBar = () => 
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
                <Navbar.Brand href="#">Brendan Holmes</Navbar.Brand>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-1 ml-auto">
                        <Nav.Link href="#">Works</Nav.Link>
                        <Nav.Link href="#">About</Nav.Link>
                        <Nav.Link href="#">Contact</Nav.Link>                 
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </>
    )

export default ComponentNavBar;

/*
<FontAwesomeIcon icon={faUser} />
<FontAwesomeIcon icon={faUser} />
<FontAwesomeIcon icon={faGithub} />
<FontAwesomeIcon icon={faLinkedin} />
<FontAwesomeIcon icon={faFileInvoice} />

<Nav.Link href="https://github.com/brendan-holmes">GitHub</Nav.Link>
                    <Nav.Link href="https://www.linkedin.com/in/brendan-holmes/">Linkedin</Nav.Link>
                    <Nav.Link href="resources/resume.pdf">Resumé (pdf)</Nav.Link>
*/