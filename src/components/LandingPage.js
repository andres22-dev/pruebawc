
import React from 'react';
import { LandingContainer } from './styles/LandingPageStyle';
import BigLogo from '../assets/img/BigLogo.svg';
import Planet from '../assets/img/Planet.svg';

const LandingPage = () => {

  return (
    <>
      <LandingContainer>
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
              <img src={Planet} />
               
            </div>
             <div>
                <p>Bienvenido a tu Entrevista Tecnica en WACO</p>
              </div>  
            
          </div>
        </div>
      </LandingContainer>
    </>
  )

}

export default LandingPage;