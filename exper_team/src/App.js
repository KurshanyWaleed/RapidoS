
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
  const token = useSelector((state => state.token ? state.token : null))
  console.log('the toooooooken', token)

  useEffect(() => {
    dispatch(checkUsersigned());
  }, [dispatch]);



  return (

    <div >
      {(token === null) ?
        <Router>
          <Navbar />
          <Switch>
            <Route path='/login' component={AuthTeam} />
            <Route path="/">
              <Redirect to="/login" />
            </Route>
          </Switch>
        </Router> :
        <Router>
          <Navbar />
          <Switch>
            <Route path='/employees/home/:id' exact component={Home_emp} />
            <Route path='/admin/addEmployee' exact component={AddEmployee} />
            <Route path='/admin/Employee/:id' exact component={Employee_details} />
            <Route path="/">
              <Redirect to="/admin/addEmployee" />
            </Route>
          </Switch>
        </Router>

      }
    </div>

  );
}

export default App;
