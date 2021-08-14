import React from 'react';
import { useHistory } from 'react-router';
import { Button, Card } from 'react-bootstrap';
import ServicesItem from '../components/servicesItems'
import Carousel from "../components/carousel";
const Home = () => {





  const login = !true;
  const history = useHistory();
  function handleClick(path) {
    history.push(path);
  }
  return (
    <div
    >
      <section id='acc'>
        <div style={{
          /* Chrome 10-25, Safari 5.1-6 */
          background: 'linear-gradient(to right, #0083B0, #00B4DB)', /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
          height: '100vh',
          width: "100vw",
          display: 'flex',
          color: 'white',
          paddingTop: '100px',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column'




        }}  >

          <div style={{ marginBottom: '10px' }}><h2>
            Besoin d’effectuer des travaux Electriques ou Logiciel ? Un travail de qualité ? <br></br> <b style={{ color: 'orange' }}><i>RapidoS</i></b>  vous propose ses compétences, son expérience pour répondre à toutes vos demandes
          </h2>
          </div>
          <div style={{ margin: '10px' }} ><Button onClick={() => login ? handleClick('/connexion') : handleClick('/request-Services')} size='lg' variant="outline-light">Demander un service </Button></div>
        </div>
      </section>

      <section id='carousel' style={{
        marginTop: '1px 0 '
      }}>
        <Carousel />
      </section>
      <section id='serviceItem'>
        <div style={{
          width: '100vw', height: '100%', marginTop: '150px', display: 'flex', justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap'
        }}>
          <ServicesItem />
          <ServicesItem />
          <ServicesItem />
          <ServicesItem />

        </div>
      </section>
      <footer style={{

        width: '100vw',
        marginTop: '100px',
        backgroundColor: '#212529',
        height: '300px',
        boxShadow: '0px 0px 3px 0px #010102',
        display: 'flex'
      }}
      >
      </footer>
    </div >
  );
};

export default Home;
