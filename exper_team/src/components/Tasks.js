import React from 'react'
import './style.css'
import { Alert } from 'react-bootstrap'
const Tasks = ({ status, name, town, type, address }) => {
    const handelClick = () => {

        console.log('clicked ! ')

    }
    return (
        <div>
            <Alert className="Alert" variant={status === 'onDemand' ? "warning" : status === 'canceled' ? "dark" : "success"} onClick={handelClick}>

                <Alert.Heading>type de problème  : {type}</Alert.Heading>
                <hr />
                <p>
                    Pour Mr : {name}
                    <br />
                    ville : {town}
                    <br />
                    Adresse :  {address}
                </p>


            </Alert>
        </div>
    )
}

export default Tasks
