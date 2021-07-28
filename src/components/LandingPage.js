
import React from 'react';
import BigLogo from '../assets/img/BigLogo.svg';
import Planet from '../assets/img/Planet.svg';
import Mockups from '../assets/img/MockupProducts.svg';
import Watch from '../assets/img/Watch.svg';
import HomeOffice from '../assets/img/HomeOffice.svg';
import Training from '../assets/img/Training.svg';
import Snacks from '../assets/img/Snacks.svg';
import Button from '@material-ui/core/Button';
import InstagramIcon from '@material-ui/icons/Instagram';
import Header from './Header';
import Footer from './Footer';


const LandingPage = ({ handleLogout }) => {

  return (
    <>
        <div className="layoutcontainer">
          <div className="layoutcontainer__home">
            <Header></ Header>
            <Button className="home__logout" onClick={handleLogout}>Logout</Button>
            <div className="planet">
            <div className="planet__img">
                <img src={Planet} />
              </div>
              <div className="planet__intro">
                <p>Bienvenido a tu <br />  <span> Entrevista Tecnica </span> en <br />Waco</p>
              </div>
              
            </div> 

            
          </div>

          <div className="layoutcontainer__publicity">
            <div className="publicity__mockup">
              <img src={Mockups} />
            </div>
            <div className="publicity__vision">
              <p> Trabajamos para <br /> <span>Convertir ideas</span> en <span> <br /> productos </span></p>
            </div>
          </div>

          <section className="layoutcontainer__benefits">
            <div className="benefits__description">
              <p>Entre los <span className="benefits__description--benefits">beneficios</span> que <span className="benefits__description--offer"> ofrecemos</span> se encuentran</p>
            </div>
            <div className="benefits__categories">
              <div>
                <img src={Watch} />
              </div>
              <div>
                <img src={HomeOffice} />
              </div>
              <div>
                <img src={Training} />
              </div>
              <div>
                <img src={Snacks} />
              </div>
            </div>
          </section>
          <div className="layoutcontainer__gratitude">
            <div className="gratitude__description">
              <p className="gratitude__description--textone">Gracias por <span>completar el ejercicio</span></p>
              <p className="gratitude__description--texttwo">Te Invitamos a ver mas informacion</p>
            </div>
            <div className="gratitude__more">
              <InstagramIcon className="more__instagram" />
              <Button><a href="https://wacoservices.com/">Conoce mas</a></Button>
            </div>
          </div>
        <Footer />
        </div>
    </>
  )

}

export default LandingPage;