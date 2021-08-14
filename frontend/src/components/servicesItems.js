import React from 'react'
import { Card, Button } from 'react-bootstrap'
import Image from '../images/im.jpg';
export default function servicesItems() {
    return (
        <div>
            <Card style={{ width: '18rem', margin: '10px' }}>
                <Card.Img variant="top" src={Image} />
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                    </Card.Text>
                    <Button variant="primary" >Go somewhere</Button>
                </Card.Body>
            </Card>
        </div>
    )
}
