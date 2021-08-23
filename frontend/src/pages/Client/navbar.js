import React from 'react'
import { useHistory } from "react-router-dom";
//import styled from 'styled-components'
import { Navbar, Container, Nav, Button } from 'react-bootstrap'
import { Redirect } from 'react-router-dom'
export default function Navbar2() {
    const log = false;
    const history = useHistory();
    function handleClick(path) {
        history.push(path);
    }
    return (

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

                </Nav>


                {!log ?

                    <Nav>
                        <div>
                            <Button onClick={() => handleClick('/connexion')} size='md' variant="outline-light">Connexion</Button>
                        </div>
                    </Nav>

                    :

                    <Nav className="justify-content-center" style={{ color: 'white' }}>
                        <Navbar.Brand>
                            Bienvenue User
                        </Navbar.Brand>
                        <Button size='md' variant="outline-light">Déconnexion</Button>
                    </Nav>



                }

            </Container>
        </Navbar >

    )
}
