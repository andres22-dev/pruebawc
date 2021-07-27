import React from 'react';
import Header from './Header';
import {LoginContainer} from './styles/LoginStyle';
import TextField from '@material-ui/core/TextField';
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
        <div className="layoutlogin">
          <div className="layoutlogin__container">
            <div className="container__form">
            <h1>Login</h1>
            <input
              type="text"
              autoFocus
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <TextField id="standard-basic" label="Standard" />
            <p className="">{emailError}</p>
            <input 
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <p>{passwordError}</p>
            <div>
              {hasAccount ? (
                <>
                  <button onClick={handleLogin}>Sing in</button>
                  <p>
                    Don't have an account ?
                    <span onClick={() => setHasAccount(!hasAccount)}>Sing up</span>
                  </p>
                </>
              )  :  (
                <>
                  <button onClick={handleSingup}>Sing up</button>
                  <p>
                    Have an account ?
                    <span onClick={() => setHasAccount(!hasAccount)}>Sing in</span>
                  </p>
                </>
              )
              }
            </div>
            </div>
          </div>
        </div>
      </LoginContainer>
    </>
  )
}

export default Login;