import React from 'react'
import jwt from 'jsonwebtoken';
import jwtDecode from "jwt-decode";
import { useParams } from 'react-router-dom';
import Map from '../../components/Maps';
import { Button, Row, Col } from 'react-bootstrap';
const Tasks_details = () => {
    const { id } = useParams();
    const decryptedId = jwtDecode(id);
    const lat = 10.0;
    const lng = 36;
    console.log(decryptedId.id)
    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
            <Map lat={lat} lng={lng} />
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'start', width: '50%', margin: '10px' }}>
                <span>
                    <b>
                        Pour Mr/Mdme :
                    </b>
                    {decryptedId.name}
                </span>
                <span>
                    <b>
                        Type :
                    </b>
                    {decryptedId.type}
                </span>
                <span>
                    <b>
                        Ville :
                    </b>
                    {decryptedId.town}
                </span>


            </div>
            <div style={{ width: '50%' }}>

                <button style={{ margin: '5px' }} type="button" class="btn btn-outline-success">Accepter la Mession</button>
                <button style={{ margin: '5px' }} type="button" class="btn btn-outline-danger">Signaler un probleme</button>
                <button style={{ margin: '5px' }} type="button" class="btn btn-outline-warning">Reporter</button>
                <button type="button" class="btn btn-outline-info">Imprimer</button>

            </div>
        </div>
    )
}
export default Tasks_details;