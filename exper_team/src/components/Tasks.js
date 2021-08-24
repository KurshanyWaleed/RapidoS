import React from 'react'
import { Alert } from 'react-bootstrap'
const Tasks = ({ status, name, town, type, address }) => {
    return (
        <div>
            <Alert variant={status === 'onDemand' ? "warning" : status === 'canceled' ? "dark" : "success"}>

                <Alert.Heading>type de problème  : {type}</Alert.Heading>
                <hr />
                <p>
                    Pour Mr : {name}
                    <br />
                    ville : {town}
                    <br />
                    Adresse :  {address}
                </p>
                <hr />
                <p className="mb-0">
                    Whenever you need to, be sure to use margin utilities to keep things nice
                    and tidy.
                </p>
            </Alert>
        </div>
    )
}

export default Tasks
