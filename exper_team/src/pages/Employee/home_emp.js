import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Tasks from '../../components/Tasks'
import { loadTasks } from '../../redux/actions/requestes-actions'

function Home_emp() {
    const dispatch = useDispatch()
    const id = useSelector((state) => state.users.user ? state.users.user.id : null);
    const tasks = useSelector((state) => state.requests ? state.requests.tasks : null)
    console.log('tasks from redux :', tasks, id)

    useEffect(() => {
        dispatch((loadTasks(id)));
        console.log('rendering')
    }, [])



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
                <h1>Filters</h1>
            </div>


            <div style={{
                width: '60%',
                height: '100vh',
                background: 'white',

            }}>
                <div style={{
                    position: 'relative',
                    width: '100%',
                    padding: '0px',
                    height: '10%',


                }}>
                    <h4>
                        Liste des Taches </h4>

                </div>
                <div style={{ margin: '10px', height: '600px', overflow: 'auto', borderRadius: '5px', boxShadow: '-1px 2px 1px 0px #e9dbdb' }}>
                    {tasks ? tasks.map((task, index) => {
                        console.log(task);
                        return (
                            < Tasks
                                key={index}
                                status={task.status}
                                name={task.name}
                                town={task.town}
                                type={task.typeOfIssue}
                                address={task.address}
                            />

                        )
                    }) : 'pas des taches ! '

                    }
                </div>
            </div>
        </div>
    )
}

export default Home_emp;
