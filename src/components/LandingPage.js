
import React from 'react';
import { LandingContainer } from './styles/LandingPageStyle';
import BigLogo from '../assets/img/BigLogo.svg';
import Planet from '../assets/img/Planet.svg';
import Mockups from '../assets/img/MockupProducts.svg';

const LandingPage = () => {

  return (
    <>
        <div className="layoutcontainer">
          <div className="layoutcontainer__home">
            <header className="header">
              <div className="header__logo">
                <img src={BigLogo} />
              </div>
              <nav className="header__menu">
                <ul>
                  <li>INICIO</li>
                  <li>BENEFICIOS</li>
                  <li>LOGIN</li>
                </ul>
              </nav>
            </header>
            
            <div className="planet">
              <div className="planet__intro">
                <p>Bienvenido a tu <br />  Entrevista Tecnica en <br />Waco</p>
              </div>
              <div className="planet__img">
                <img src={Planet} />
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
            <div>
              <p>Entre los <span>beneficios</span> que <span> ofrecemos</span> se encuentran</p>
            </div>
            <div>
              <div>
                <img src=""/>
              </div>
              <div>
                <img src=""/>
              </div>
              <div>
                <img src=""/>
              </div>
              <div>
                <img src=""/>
              </div>
            </div>
          </section>
          <div className="layoutcontainer__gratitude">
            <div>
              <p>Gracias por <span>completo el ejercicio</span></p>
              <p>Te Invitamos a ver mas informacion</p>
            </div>
            <div>
              <p>Aqui van de material uiiiiiiiiiiiiiiiiiiiiiii</p>
            </div>
          </div>
          <footer>
            <img src={BigLogo}/>
          </footer>
        </div>
    </>
  )

}

export default LandingPage;