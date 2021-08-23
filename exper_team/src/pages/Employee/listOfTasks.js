import React, { useState } from 'react'
import { Alert, Button } from 'react-bootstrap'

function ListOfTasks(props) {
    const [show, setShow] = useState(true);

    return (
        <>
            <Alert show={show} variant="success">
                <Alert.Heading>{props.typeOfIssue}</Alert.Heading>
                <p>
                    {props.town}
                    {props.name}
                    {props.address}
                </p>
                <hr />
                <div className="d-flex justify-content-end">
                    <Button onClick={() => setShow(false)} variant="outline-success">
                        Détails
                    </Button>
                </div>
            </Alert>
        </>
    );
}


export default ListOfTasks
