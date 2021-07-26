import React, {useState, useEffect} from 'react';
import fire from '../fire';
import Header from './Header';
import {LoginContainer} from './styles/LoginStyle'
const Login = () => {
  const [user, setUser] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [hasAccount, setHasAccount] = useState(false);

  const handleLogin = () => {


  }
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