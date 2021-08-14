import React from 'react'
import { useHistory } from "react-router-dom";
//import styled from 'styled-components'
import { Navbar, Container, Nav, Button } from 'react-bootstrap'
import { Redirect } from 'react-router-dom'
export default function Navbar2() {
    /*
        const Vav = styled.nav`
        background-color: #212529;
        width: 100vw;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 50px;
        margin: 0 auto;
        box-shadow: 1px 1px 1px  #212529;
       
     `;
        const NavItem = styled.div`
    
        width: 100vw;
        display: flex;
         color: white;
        justify-content: center;
        align-items: center;
        height: 50px;
        margin: 0 auto;
        border: 1px solid red;
        box-shadow: 1px 1px 1px  #212529;
       
     `;
        return (
    
            <Vav><NavItem>ServiRapido</NavItem>
    
                <NavItem>c </NavItem></Vav>
    
        )*/
    const history = useHistory();
    function handleClick(path) {
        history.push(path);
    }
    return (
        <>
            <Navbar bg="dark" className="justify-content-center" variant="dark" fixed='top' >
                <Container>
                    <Navbar.Brand style={{ color: 'orange' }} href="/">
                        <b><i>
                            RapidoS``
                        </i>
                        </b>
                    </Navbar.Brand>
                    <Nav className="justify-content-center">
                        <Nav.Link href="/" >ACCEUIL</Nav.Link>
                        <Nav.Link href="/services"  >SERVICES</Nav.Link>
                        <Nav.Link href="/about"  >QUI-SOMMES-NOUS</Nav.Link>
                        <Nav.Link href="/Contact" >CONTACTEZ NOUS</Nav.Link>
                        <Nav.Link href="/Actualites" >ACTUALITES</Nav.Link>

                    </Nav>
                    <Nav>
                        <Container>

                            <div>
                                <Button onClick={() => handleClick('/connexion')} size='md' variant="outline-light">Connexion</Button>
                            </div>
                        </Container>
                    </Nav>
                </Container>
            </Navbar>
        </>
    )
}
