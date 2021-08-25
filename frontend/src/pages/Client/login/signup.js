
import React, { useState } from 'react'
import { Button, Form, Col, Row, Alert } from 'react-bootstrap'
import axios from 'axios';
import Loader from "react-loader-spinner";



export default function Login() {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [password, setPassword] = useState("");
  const [tel, setTel] = useState("");
  const [form, setForm] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [town, setTown] = useState("");
  const [gouvernarate, setGouvernarate] = useState("");
  const [zip, setZip] = useState("");
  const typeOfUser = "Client";
  const [loading, setLoading] = useState(false);
  const [valid, setValid] = useState(false);





  const handelForminputs = (e) => {
    e.preventDefault();
    setLoading(true);
    console.log(name, password);
    const dataa = {
      name,
      surname,
      email,
      password,
      address,
      tel,
      form,
      companyName,
      zip,
      gouvernarate,
      town,
      typeOfUser
    };
    console.log('the data:', dataa);
    axios({
      method: "post",
      url: "http://localhost:5000/api/signup",
      withCredentials: true,
      data: {
        name,
        surname,
        email,
        password,
        address,
        tel,
        form,
        companyName,
        zip,
        gouvernarate,
        town,
        typeOfUser
      }

    }).then((res) => {
      console.log(res);

      setTimeout(function () {
        setLoading(false)
        setValid(true);
        window.location.reload();
      }, 3000);


    });

  }

  return (



    <Form style={{ margin: '30px' }} onSubmit={handelForminputs}>
      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>Nom*</Form.Label>
          <Form.Control type="text" placeholder="Entre votre nom" value={name} onChange={(e) => { setName(e.target.value) }} />
        </Form.Group>
        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>Prénom*</Form.Label>
          <Form.Control type="text" placeholder="Entre votre prénom" value={surname} onChange={(e) => { setSurname(e.target.value) }} />
        </Form.Group>
      </Row>

      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>Email*</Form.Label>
          <Form.Control type="email" placeholder="ABC@gmail.com" value={email} onChange={(e) => { setEmail(e.target.value) }} />
        </Form.Group>
        <Form.Group as={Col} controlId="formGridPassword">
          <Form.Label>Mot de passe*</Form.Label>
          <Form.Control type="password" placeholder="Mot de passe" value={password} onChange={(e) => { setPassword(e.target.value) }} />
        </Form.Group>
        <Form.Group as={Col} controlId="formGridPassword">
          <Form.Label> Confirmé le mot de passe*</Form.Label>
          <Form.Control type="password" placeholder="Confirmé le mot de passe" />
        </Form.Group>
      </Row>
      <Row>
        <Form.Group as={Col} className="mb-3" controlId="formGridAddress2">
          <Form.Label>Addresse *</Form.Label>
          <Form.Control placeholder="Apartement, studio, or rue..." value={address} onChange={(e) => { setAddress(e.target.value) }} />
        </Form.Group>

        <Form.Group as={Col} className="mb-3" controlId="formGridAddress2">
          <Form.Label>Télephone *</Form.Label>
          <Form.Control placeholder="(+216) 98 123 456" value={tel} onChange={(e) => { setTel(e.target.value) }} />
        </Form.Group>
      </Row>
      <Form.Group as={Col} controlId="formGridState">
        <Form.Label>Je suis un(e): *</Form.Label>
        <select className="form-select" aria-label="Default select example" value={form} onChange={(e) => { setForm(e.target.value) }}>
          <option value="societé" >Societé</option>
          <option value="personne">Personne</option>
        </select>
      </Form.Group>
      <br></br>
      <Form.Group className="mb-3" controlId="formGridNS">
        <Form.Label>Nom de Societé</Form.Label>
        <Form.Control placeholder="Societé ABC" value={companyName} onChange={(e) => { setCompanyName(e.target.value) }} />
      </Form.Group>
      <br></br>
      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridCity">
          <Form.Label>Ville*</Form.Label>
          <Form.Control placeholder="Ville de Tunis" value={town} onChange={(e) => { setTown(e.target.value) }} />
        </Form.Group>
        <Form.Group as={Col} controlId="formGridState">
          <Form.Label>Gouvernement*</Form.Label>
          <select className="form-select" aria-label="Default select example" value={gouvernarate} onChange={(e) => { setGouvernarate(e.target.value) }} value={gouvernarate
          }>
            <option selected value="Tunis">Tunis</option>
            <option value="Ariana">Ariana</option>
            <option value="Ben Arous">Ben Arous</option>
            <option value="Manouba">Manouba</option>
          </select>
        </Form.Group>
        <Form.Group as={Col} controlId="formGridZip">
          <Form.Label>Zip*</Form.Label>
          <Form.Control placeholder="1002" value={zip} onChange={(e) => { setZip(e.target.value) }} />
        </Form.Group>
      </Row>

      <div className="d-grid gap-2">
        <Button variant="primary" type="submit" size='lg'>
          {loading ? (<div style={{ display: 'flex', alignItems: 'center', justifyContent: "center" }}>
            <Loader type="ThreeDots"
              color="gray"
              height={35}
              width={50}
            />
          </div>)
            : ' Valider'
          }
        </Button>
      </div>
      {valid && (<div style={{ margin: "10px" }}>
        <Alert variant="success">
          Votre Profile Client a été creé !
        </Alert>
      </div>)}

    </Form>


  );

}
