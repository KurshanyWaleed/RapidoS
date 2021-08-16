
import React, { useState } from 'react'
import {
    Button, Form, Col, Row
} from 'react-bootstrap'
import axios from 'axios';

const AddEmployee = () => {

    const [name, setName] = useState("");
    const [gouvernarate, setGouvernarate] = useState("Tunis");
    const [loading, setLoading] = useState(false);
    const [valid, setValid] = useState(false);
    const [CIN, setCIN] = useState("");
    const handelForminputs = (e) => {
        e.preventDefault();
        setLoading(true);
        const data = {
            name,
            gouvernarate,
            employeeState: "onService"
        };
        console.log(data);
        axios({
            method: "post",
            url: "http://localhost:5000/api/signup",
            withCredentials: true,
            data: {
            }
        }).then(res => console.log(res))
    }
    return (
        <div style={{ width: '100vw', marginTop: '80px', display: 'flex', justifyContent: 'center' }} >

            <Form onSubmit={handelForminputs}>

                <Row className="mb-3">
                    <Form.Group className="mb-2" controlId="formBasicEmployeeCIN">
                        <Form.Label>CIN</Form.Label>
                        <Form.Control type="" type="text" placeholder="Entre CIN" value={CIN} onChange={(e) => { setCIN(e.target.value) }} />
                    </Form.Group>
                    <Form.Group className="mb-2" controlId="formBasicEmployeeName">
                        <Form.Label>Nom de Employé</Form.Label>
                        <Form.Control type="" type="text" placeholder="Entre votre nom" value={name} onChange={(e) => { setName(e.target.value) }} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Check me out" />
                    </Form.Group>

                    <Form.Group controlId="formGridState">
                        <Form.Label>Gouvernement*</Form.Label>
                        <select className="form-select" aria-label="Default select example" value={gouvernarate} onChange={(e) => { setGouvernarate(e.target.value) }} value={gouvernarate
                        }>
                            <option selected value="Tunis">Tunis</option>
                            <option value="Ariana">Ariana</option>
                            <option value="Ben Arous">Ben Arous</option>
                            <option value="Manouba">Manouba</option>
                        </select>
                    </Form.Group>

                </Row>
                <Button variant="primary" type="submit" size='lg'>
                    Ajouter
                </Button>
            </Form>

        </div >
    )
}

export default AddEmployee
