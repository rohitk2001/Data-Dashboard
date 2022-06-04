//Packages
import React from 'react';
//CSS stylesheet
import './styles.css';
import SideBar from './sideBar';
import {Navbar,Container,Offcanvas} from 'react-bootstrap';
const NavBar=()=>{
        return (
            <div>
                <Navbar key="false" bg="light" expand="false" className="mb-3">
                    <Container fluid>
                        <a href="https://www.speedlabs.in/" target="_blank" rel="noopener noreferrer">
                                    <img width="100px" height="35px" alt="SpeedLabs Logo" src="https://www.speedlabs.in/wp-content/uploads/2022/01/logo-final.png"/>
                        </a>
                        YOUTUBE DASHBOARD
                        <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-false`} />
                        <Navbar.Offcanvas
                            id={`offcanvasNavbar-expand-false`}
                            aria-labelledby={`offcanvasNavbarLabel-expand-false`}
                            placement="end"
                        >
                            <Offcanvas.Header closeButton>
                                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-false`}>
                                    YOUTUBE DASHBOARD
                                </Offcanvas.Title>
                            </Offcanvas.Header>
                            <Offcanvas.Body>
                                <SideBar/>
                            </Offcanvas.Body>
                        </Navbar.Offcanvas>
                    </Container>
                </Navbar>       
            </div>
        )
}

export default NavBar;


    