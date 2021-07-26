import React, {useState, useEffect} from 'react';
import fire from '../fire';
import Header from './Header';
import {LoginContainer} from './styles/LoginStyle'
const Login = () => {
  return(
    <>
      <LoginContainer>
        <Header />
        <div className="layoutlogin">

        </div>
      </LoginContainer>
    </>
  )
}

export default Login;