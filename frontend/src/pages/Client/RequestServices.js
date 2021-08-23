import React, { useState } from 'react'
import { Button, Form, Col, Row } from 'react-bootstrap'
import Map from '../../components/maps-gl';
import { useHistory } from "react-router-dom";


export default function RequestServices() {
    const [lng, setLng] = useState(10.1);
    const [lat, setLat] = useState(36.8);
    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
    const [tel, setTel] = useState('');
    const [town, setTown] = useState('');
    const [gouvernarate, setGouvernarate] = useState('');
    const [zip, setZip] = useState('');
    const [typeOfIssue, setTypeOfIssue] = useState('')
    const handeldbClick = (e) => {
        console.log(e.lngLat)
        setLng(e.lngLat[0]);
        setLat(e.lngLat[1]);

    }
    const history = useHistory();
    const handelForminputs = (e) => {

        e.preventDefault();
        const dataa = {
            name,
            address,
            tel,
            lat,
            lng,
            zip,
            gouvernarate,
            town,
            typeOfIssue,
            employee: [],
            status: 'onRequest'
        };
        console.log('data', dataa)
        //history.push('/');
    }
    return (
        <div>
            <div>
            </div>

            <div>
                <div style={{
                    width: '100vw',
                    minHeight: '700px',
                    marginTop: '80px',
                    display: 'flex',
                    justifyContent: 'space-around',
                    alignContent: 'space-around',
                    // boxShadow: '0px 0px 3px 0px #010102'
                }}>

                    <Form style={{ margin: '30px', maxWidth: '50%' }} onSubmit={handelForminputs}>
                        <Row>
                            <h2>
                                Demender un Service Rapide
                            </h2>
                        </Row>

                        <Row>
                            <Form.Group controlId="formname">
                                <Form.Label>Nom</Form.Label>
                                <Form.Control type='text' placeholder="Nom" value={name} onChange={(e) => { setName(e.target.value) }} />

                            </Form.Group>
                        </Row>
                        <br></br>
                        <Row>
                            <Row>
                                <Map width={900} height={250} onDblClick={(e) => handeldbClick(e)} lat={lat} lng={lng} />
                            </Row>
                            <Form.Group controlId="formGridAddress">
                                <Form.Label>Addresse </Form.Label>
                                <Form.Control type='text' value={address} onChange={(e) => setAddress(e.target.value)} placeholder="Apartement, studio, or rue..." />
                            </Form.Group>
                        </Row>
                        <br></br>
                        <Row>


                            <Form.Group as={Col} className="mb-3" controlId="formGridAddress2">
                                <Form.Label>Télephone *</Form.Label>
                                <Form.Control type='text' value={tel} onChange={(e) => setTel(e.target.value)} placeholder="(+216) 98 123 456" />
                            </Form.Group>
                        </Row>

                        <Row className="mb-3">
                            <Form.Group as={Col} controlId="formGridCity">
                                <Form.Label>Ville*</Form.Label>
                                <Form.Control value={town} onChange={(e) => setTown(e.target.value)} placeholder="Ville de Tunis" />
                            </Form.Group>
                            <Form.Group as={Col} controlId="formGridState">
                                <Form.Label>Gouvernement*</Form.Label>
                                <select className="form-select" aria-label="Default select example" value={gouvernarate} onChange={(e) => { setGouvernarate(e.target.value) }}>
                                    <option value="Tunis">Tunis</option>
                                    <option value="Ariana">Ariana</option>
                                    <option value="Ben Arous">Ben Arous</option>
                                    <option value="Manouba">Manouba</option>
                                </select>
                            </Form.Group>
                            <Form.Group as={Col} controlId="formGridZip">
                                <Form.Label>Zip*</Form.Label>
                                <Form.Control value={zip} onChange={(e) => setZip(e.target.value)} placeholder="1002" />
                            </Form.Group>

                        </Row>
                        <Row>
                            <Form.Group as={Col} controlId="formGridState">
                                <Form.Label>Type de probléme*</Form.Label>
                                <select className="form-select" aria-label="Default select example" value={typeOfIssue} onChange={(e) => setTypeOfIssue(e.target.value)}>
                                    <option value="réseau">Réseau</option>
                                    <option value="Materiel">Materiels</option>
                                    <option value="logiciel">Logiciel</option>
                                    <option value="je ne sais pas">Je ne sais pas !</option>
                                </select>
                            </Form.Group>
                        </Row>
                        <br></br>
                        <Row>
                            <div className="d-grid gap-2">
                                <Button variant="primary" type="submit" size='lg'>
                                    Valider
                                </Button>
                            </div>
                        </Row>

                    </Form>
                </div>

                <footer
                    style={{
                        width: '100vw',
                        backgroundColor: '#212529',
                        height: '300px',
                        boxShadow: '0px 0px 3px 0px #010102',
                        display: 'flex'
                    }}
                >
                </footer>
            </div >
        </div >
    )
}
