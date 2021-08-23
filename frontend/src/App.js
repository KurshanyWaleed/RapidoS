import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Home from './pages/Client/home';
import About from './pages/Client/about';
import Services from './pages/Client/services';
import Contact from './pages/Client/contact';

import Navbar2 from './pages/Client/navbar';

import 'bootstrap/dist/css/bootstrap.min.css';
import Auth from './pages/Client/login/auth';

import RequestServices from './pages/Client/RequestServices';
import Profil from './pages//Client/profil';

import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";


function App() {

  return (
    <Router>
      <Navbar2 />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/about' component={About} />
        <Route path='/services' component={Services} />
        <Route path='/contact-us' component={Contact} />
        <Route path='/connexion' component={Auth} />
        <Route path='/profile' component={Profil} />
        <Route path='/request-Services' component={RequestServices} />
        <Route path="*">
          <Redirect to="/" />
        </Route>
      </Switch>
    </Router>

  )



}

export default App;
