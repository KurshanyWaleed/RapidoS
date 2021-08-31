import React from 'react'
import jwt from 'jsonwebtoken';
import jwtDecode from "jwt-decode";
import { useParams } from 'react-router-dom';
import Map from '../../components/Maps';
import { Button, Row, Col } from 'react-bootstrap';
const Tasks_details = () => {
    const { id } = useParams();
    const decryptedId = jwtDecode(id);

    console.log('dec is', decryptedId)
    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
            <Map lat={decryptedId.lat} lng={decryptedId.lng} />
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'start', width: '50%', margin: '10px', border: '1px solid #8080803d', borderRadius: '5px', padding: '5px' }}>

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
            <div style={{ width: '50%', border: '1px solid #8080803d', borderRadius: '5px' }}>
                {decryptedId.status === 'onDemand' ?
                    <>
                        <button style={{ margin: '5px' }} type="button" class="btn btn-outline-success">Accepter la Mession</button>
                        <button style={{ margin: '5px' }} type="button" class="btn btn-outline-danger">Signaler un probleme</button>
                        <button style={{ margin: '5px' }} type="button" class="btn btn-outline-warning">Reporter</button>
                        <button type="button" class="btn btn-outline-info">Imprimer</button>
                    </>
                    : <button type="button" class="btn btn-outline-info">Imprimer</button>
                }

            </div>
        </div>
    )
}
export default Tasks_details;