import React from 'react';
import { FooterContainer } from './styles/FooterStyle';
import BigLogo from '../assets/img/BigLogo.svg';

const Footer = () => {

  return(
    <>
      <FooterContainer>
        <div>
          <footer className="layoutcontainer__footer">
            <img src={BigLogo}/>
          </footer>
        </div>
      </FooterContainer>
    </>
  )
}


export default Footer;