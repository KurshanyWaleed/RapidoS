import React from 'react'
import jwt from 'jsonwebtoken';
import jwtDecode from "jwt-decode";
import { useParams } from 'react-router-dom';
const Tasks_details = () => {
    const { id } = useParams();
    const decryptedId = jwtDecode(id);
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
        </div>
    )
}
export default Tasks_details;