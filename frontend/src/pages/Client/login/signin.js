
import React from 'react'
import {
    Button, Form
} from 'react-bootstrap'

export default function signIn() {
    return (


        <Form >
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="Entre votre email" />
                    <Form.Text className="text-muted">
                        Nous ne partagerons jamais votre e-mail avec quelqu'un d'autre.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Mot de passe</Form.Label>
                    <Form.Control type="password" placeholder="Mot de passe" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button variant="primary" type="submit" size='lg'>
                    Connexion
                </Button>
            </Form>
        </Form>




    );

}
