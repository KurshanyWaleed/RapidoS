import React from 'react'
import jwt from 'jsonwebtoken';
import jwtDecode from "jwt-decode";
import { useParams } from 'react-router-dom';
import Map from '../../components/Maps';
const Tasks_details = () => {
    const { id } = useParams();
    const decryptedId = jwtDecode(id);
    const lat = 10.0;
    const lng = 36;
    console.log(decryptedId.id)
    return (
        <div style={{ margin: '50px auto' }}>
            <p>
                details id :{decryptedId.id}
            </p>
            <p>
                details name :{decryptedId.name}
            </p>
            <p>
                details type :{decryptedId.type}
            </p>
            <p>
                details town :  {decryptedId.town}
            </p>
            <Map width={900} height={250} lat={lat} lng={lng} />
        </div>
    )
}
export default Tasks_details;