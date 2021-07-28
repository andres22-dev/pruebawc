import React from 'react';
import Header from './Header';
import Footer from './Footer';
import {LoginContainer} from './styles/LoginStyle';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const Login = (props) => {
  const {
    email, 
    setEmail, 
    password, 
    setPassword, 
    handleLogin, 
    handleSingup, 
    hasAccount, 
    setHasAccount, 
    emailError, 
    passwordError
  } = props;
  return(
    <>
      <LoginContainer>
      <Header />
        <div className="layoutlogin">
          <div className="layoutlogin__container">
            <div className="container__form">
            <h1 className="form__title">LOGIN</h1>
            <TextField 
              id="standard-basic" 
              label="Email"
              type="text"
              autoFocus
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="form__input"
            />
            <p className="">{emailError}</p>
            <TextField 
              id="standard-basic" 
              label="Password"
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="form__input"
            />
            <p>{passwordError}</p>
            <div>
              {hasAccount ? (
                <>
                  <div className="form__account">
                    <Button variant="outlined" onClick={handleLogin}>Sing in</Button>
                    <p>
                      Don't have an account ?
                      <span onClick={() => setHasAccount(!hasAccount)} className="account__span"> Sing up</span>
                    </p>
                  </div>
                </>
              )  :  (
                <>
                  <div className="form__account">
                    <Button variant="outlined" onClick={handleSingup}>Sing up</Button>
                    <p>
                      Have an account ?
                      <span onClick={() => setHasAccount(!hasAccount)} className="account__span"> Sing in</span>
                    </p>
                  </div>
                </>
              )
              }
            </div>
            </div>
          </div>
          <Footer />
        </div>
      </LoginContainer>
    </>
  )
}

export default Login;