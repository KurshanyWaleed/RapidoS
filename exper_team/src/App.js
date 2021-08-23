
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import Navbar from './components/Navbar/index'
import Home_emp from './pages/admin/Employee/home_emp'
import AddEmployee from './pages/admin/addEmployee'
import Employee_details from './pages/admin/employeedetails'
import AuthTeam from './pages/admin/authTeam'
import { useSelector } from 'react-redux'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { checkUsersigned } from './redux/actions/Auth_actions'



function App() {
  const dispatch = useDispatch()
  const token = localStorage.getItem('token')
  const type = useSelector((state => state.user ? state.user.type : ''))
  console.log('the toooooooken', token)

  useEffect(() => {
    dispatch(checkUsersigned());
  }, [dispatch]);



  return (

    <div >
      <Router>
        <Navbar />
        <Switch>
          {
            token === null ?
              <>
                <Route path='/login' exact component={AuthTeam} />
                <Route path="/">
                  <Redirect to="/login" />
                </Route>
              </>
              :
              type === 'Employee' ?
                <>
                  <Route path='/Home_emp' exact component={Home_emp} />
                  <Route path="*">
                    <Redirect to="/Home_emp" />
                  </Route>
                </> : <>
                  <Route path='/admin/Add_emp' exact component={AddEmployee} />
                  <Route path='/admin/employee/details/:id' exact component={Employee_details} />
                  <Route path="*">
                    <Redirect to="/admin/add_emp" />
                  </Route>
                </>
          }
        </Switch>

      </Router>
    </div>

  );
}

export default App;
