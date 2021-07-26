
import React from 'react';
import BigLogo from '../assets/img/BigLogo.svg';
import Planet from '../assets/img/Planet.svg';
import Mockups from '../assets/img/MockupProducts.svg';
import Watch from '../assets/img/Watch.svg';
import HomeOffice from '../assets/img/HomeOffice.svg';
import Training from '../assets/img/Training.svg';
import Snacks from '../assets/img/Snacks.svg';
import Button from '@material-ui/core/Button';
import Header from './Header';


const LandingPage = () => {

  return (
    <>
        <div className="layoutcontainer">
          <div className="layoutcontainer__home">
            <Header />
            <div className="planet">
            <div className="planet__img">
                <img src={Planet} />
              </div>
              <div className="planet__intro">
                <p>Bienvenido a tu <br />  Entrevista Tecnica en <br />Waco</p>
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
              <p>Entre los <span>beneficios</span> que <span> ofrecemos</span> se encuentran</p>
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
              <p className="gratitude__description--textone">Gracias por <span>completo el ejercicio</span></p>
              <p className="gratitude__description--texttwo">Te Invitamos a ver mas informacion</p>
            </div>
            <div>
              <p>Aqui van de material uiiiiiiiiiiiiiiiiiiiiiii</p>
            </div>
          </div>
          <footer className="layoutcontainer__footer">
            <img src={BigLogo}/>
          </footer>
        </div>
    </>
  )

}

export default LandingPage;