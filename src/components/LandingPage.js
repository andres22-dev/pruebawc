
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
              <img src={Planet} />
            </div> 
          </div>

          <div className="layoutcontainer__publicity">
            <div>
            <img src={Mockups} />
            </div>
          </div>
        </div>
    </>
  )

}

export default LandingPage;