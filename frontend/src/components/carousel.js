import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import Image1 from "../images/img6c.jpg";
import Image2 from "../images/img7c.jpg";
import Image3 from "../images/img1c.jpg";
export default function carousel() {
    return (
        <div>
            <Carousel fade={true} prevLabel='précédent' nextLabel="suivant">
                <Carousel.Item >
                    <img
                        width="100%"
                        height="550px"
                        className="d-block w-100"
                        src={Image1}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h5>First slide label</h5>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        width="100%"
                        height="550px"
                        className="d-block w-100"
                        src={Image2}
                        alt="Second slide"
                    />
                    <Carousel.Caption>
                        <h5>Second slide label</h5>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        width="100%"
                        height="550px"
                        className="d-block w-100"
                        src={Image3}
                        alt="Third slide"
                    />
                    <Carousel.Caption>
                        <h5>Third slide label</h5>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    )
}
