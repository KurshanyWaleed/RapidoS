import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/home';
import About from './pages/about';
import Services from './pages/services';
import Contact from './pages/contact';
import Navbar2 from './components/navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Auth from './pages/login/auth';
import RequestServices from './pages/RequestServices';
import Profil from './pages/profil';
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
      </Switch>
    </Router>
  );
}

export default App;
