import React from 'react';
import { HeaderContainer } from './styles/HeaderStyle';
import BigLogo from '../assets/img/BigLogo.svg';
import Button from '@material-ui/core/Button';

const Header = () => {

  return(
    <>
      <HeaderContainer>
        <header className="header">
          <div className="header__logo">
            <img src={BigLogo} />
          </div>
          <nav className="header__menu">
            <ul>
              <li><Button className="menu__button">INICIO</Button></li>
              <li><Button className="menu__button">BENEFICIOS</Button></li>
              <li><Button className="menu__button--login">Login</Button></li>
            </ul>
          </nav>
        </header>
      </HeaderContainer>
    </>
  )
}

export default Header;