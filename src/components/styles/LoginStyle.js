import styled, { css } from 'styled-components';

export const LoginContainer = styled.div`
  
.layoutlogin {
  display: grid;
  grid-template: 880px / 1fr ;
  width: auto;
  height: 100vh;
}

.layoutlogin__container{

  display:flex;
  justify-content: center;
  align-items: center;

  grid-column: 1;
  grid-row: 1/2;
  background: linear-gradient(#00E6E3 2.73%, #00FF68 100%);
}

.container__form{
  display:flex;
  justify-content: space-evenly;
  align-items: center;
  flex-direction:column;
  width: 500px;
  height: 500px;
  background: #000;
  box-shadow: 0px 0px 5px 2px rgba(255, 255, 255, 0.5);
  border-radius: 20px;
}

.container__form p{
  color: red;
}

.form__title{
  color: #FFF;
}

.form__input{
  width: 300px;
  background: #FFF;
  border-radius: 10px;
}

.form__account{
  display:flex;
  align-items: center;
  flex-direction: column;
}

.form__account button{
  width: 300px;
  background: linear-gradient(#00E6E3 2.73%, #00FF68 100%);
  margin-bottom: 10px;
  color: #FFF;
  font-weight: 700;
  font-size: 16px;
}

.form__account button:hover{
  opacity: 0.9;
}

.form__account p{
  font-size:18px;
  color: #FFF;
}

.form__account .account__span{

  text-decoration: underline;
  cursor: pointer;
  color: #00FF68;
}

.form__account .account__span:hover{
  text-decoration: none;
  color: #00E6E3;
}
`