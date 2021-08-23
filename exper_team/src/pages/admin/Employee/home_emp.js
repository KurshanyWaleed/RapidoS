import React, { useEffect } from 'react'
import ListOfTasks from './listOfTasks'
import axios from 'axios';

function Home_emp() {

    const id = ""

    //    useEffect(() => { axios.get("http://localhost:5000/api/allTasks", id).then((res) => { setEmployeesL(res.data); console.log('rendring') }) }, [CIN]);

    return (
        <div style={{
            width: '100vw',
            height: '100vh',
            background: 'linear-gradient(to bottom, rgb(234 239 241), rgb(216 220 221))',
            marginTop: '1px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '5rem',
        }}>
            <div style={{
                width: '20%',
                height: '100vh',
                background: 'white',

            }}>

            </div>


            <div style={{
                width: '60%',
                height: '100vh',
                background: 'white',

            }}>
                <div style={{
                    position: 'relative',
                    width: '100%',
                    padding: '2rem 1rem 2rem 1rem',
                    height: '30%',

                }}>
                    <h4>
                        Liste des Taches </h4>

                </div>
            </div>
        </div>
    )
}

export default Home_emp;
