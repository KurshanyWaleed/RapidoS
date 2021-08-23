import React, { useState } from 'react'
import Signin from './signin'
import Signup from './signup'
import styled from 'styled-components';

export default function Auth() {
    const Link = styled.a`
   
   `
    const [log, setlog] = useState(false)
        ;
    return (

        <div style={{
            background: 'linear-gradient(to right, #0083B0, #00B4DB)',
            width: '100vw',
            height: '100vh'
        }}>

            {log ?

                <div style={{
                    background: '#fff',
                    width: '70%',

                    height: '750px',
                    margin: '50px auto',
                    display: 'flex',
                    padding: '50px',
                    borderRadius: '1%',
                    justifyContent: 'space-around',
                    alignContent: 'space-around',
                    //  boxShadow: '0px 0px 3px 0px #010102'
                }}>
                    <p>
                        <b>
                            Inscription<br></br>
                        </b>
                        <Link onClick={() => setlog(!log)} style={{ cursor: 'pointer' }}>
                            J'ai déjà un compte Client
                        </Link>

                    </p>
                    <br></br><Signup />

                </div>


                :
                <div style={{
                    background: '#fff',
                    width: '50%',

                    height: '750px',
                    margin: '50px auto',

                    display: 'flex',
                    padding: '50px',
                    borderRadius: '1%',
                    justifyContent: 'space-around',
                    alignContent: 'space-around',
                }}>

                    <p>
                        <b>
                            Connexion<br></br>
                        </b>
                        <Link onClick={() => setlog(!log)} style={{ cursor: 'pointer' }}>
                            Créer un compte Client
                        </Link>
                    </p>

                    <br></br><Signin /> </div>
            }



        </div >
    )

}
