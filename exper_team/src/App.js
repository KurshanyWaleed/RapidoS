
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import Navbar from './components/Navbar/index'
import Home_emp from './pages//Employee/home_emp'
import Home_admin from './pages/admin/Home_admin'
import Employee_details from './pages/admin/employeedetails'
import AuthTeam from './pages/auth/authTeam'
import { useSelector } from 'react-redux'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { checkUsersigned } from './redux/actions/Auth_actions'
import NotFound from './pages/notFound'



function App() {
  const dispatch = useDispatch()
  const token = localStorage.getItem('token')
  const type = useSelector((state => state.users.user ? state.users.user.type : ''))
  console.log('the toooooooken', token)

  useEffect(() => {
    dispatch(checkUsersigned());
  }, [dispatch]);



  return (
    <div>
      <Router>
        <Navbar />
        <Switch>
          {
            token === null ?
              <>
                <Route path='/login' exact component={AuthTeam} />

              </> :
              type === 'Employee' ?
                <>
                  <Route path='/Home_emp' exact component={Home_emp} />
                  <Route path="/">
                    <Redirect to="/Home_emp" />
                  </Route>

                </> :
                <Switch>
                  <Route path='/admin/employee/details/:id' exact component={Employee_details} />
                  <Route path='/admin/Add_emp' exact component={Home_admin} />
                  <Route path="/login">
                    <Redirect to="/admin/Add_emp" />
                  </Route>
                  <Route path="/">
                    <Redirect to="/admin/Add_emp" />
                  </Route>
                </Switch>
          }
        </Switch>
      </Router>
    </div>


  )
}

export default App;
