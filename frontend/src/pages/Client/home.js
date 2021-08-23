import React from 'react';
import { useHistory } from 'react-router';
import { Button } from 'react-bootstrap';
import ServicesItem from '../../components/servicesItems'
import Carousel from "../../components/carousel";
import Footer from '../../components/Footer';
import styled from 'styled-components';
import { keyframes } from 'styled-components'
const Home = () => {


  const feedIn = keyframes`
  
  0% {
  background-position: 0% 50%;
  }
    50% {
   background-position: 100% 50%;
   }
   100% {
    background-position: 0% 50%;
}
  
`



  const Dd = styled.div` 
  background: linear-gradient(90deg, rgba(48,198,231,1) 0%, rgba(45,147,181,1) 100%);
    height: 100vh;
    width: 100vw;
    display: flex;
    color: white;
    padding-top: 100px;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    animation:  ${feedIn} 5s linear infinite;
  `



  const login = true;
  const history = useHistory();
  function handleClick(path) {
    history.push(path);
  }
  return (
    <div>
      <section id='acc'>
        <Dd>
          <div style={{ marginBottom: '10px' }}><h2>
            Besoin d’effectuer des travaux Electriques ou Logiciel ? Un travail de qualité ? <br></br> <b style={{ color: 'orange' }}><i>RapidoS</i></b>  vous propose ses compétences, son expérience pour répondre à toutes vos demandes
          </h2>
          </div>
          <div style={{ margin: '10px' }} ><Button onClick={() => login ? handleClick('/connexion') : handleClick('/request-Services')}
            size='lg' variant="outline-light">Demander un service Rapide</Button></div>
        </Dd>
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
      {/* <footer style={{

        width: '100vw',
        marginTop: '100px',
        backgroundColor: '#212529',
        height: '300px',
        boxShadow: '0px 0px 3px 0px #010102',
        display: 'flex'
      }}
      >
      </footer> */}
      <Footer />
    </div >
  );
};

export default Home;
