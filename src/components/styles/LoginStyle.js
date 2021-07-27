import styled, { css } from 'styled-components';

export const LoginContainer = styled.div`
  
.layoutlogin {
  display: grid;
  grid-template: 880px 80px / 1fr ;
  width: auto;
  height: 100vh;
}

.layoutlogin__container{

  display:flex;
  justify-content: center;
  align-items: center;

  grid-column: 1;
  grid-row: 1/2;
}

.container__form{
  display:flex;
  justify-content: center;
  align-items: center;
  flex-direction:column;
  width: 500px;
  height: 500px;
  background: #FFF;
}
`