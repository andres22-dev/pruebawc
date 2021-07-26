import styled, { css } from 'styled-components';

export const HeaderContainer = styled.div`

.header{
  
  display:flex;
  justify-content: space-between;
  align-items: center;
  width:100%;
  background-color: rgba(0,0,0, 0.1);
  height: 120px;
  position: fixed;
  border-bottom: 3px solid #232323;
  
}
.header__logo{

  margin-left: 50px
}
.header__logo img{

  width:150px;

}

.header__menu{

  margin-right: 150px;
}
.header__menu ul{
  display:flex;
}

.header__menu ul li{
  color: #FFF;
  list-style:none;
  margin-left: 5px;
}

.header__menu ul li button{
  border-radius: 25px;
  padding: 3px 30px;
}

.menu__button span{
  color: #FFF;
}

.header__menu ul li .menu__button--login{
  width: 70px;
  border: 1px solid #00B4EB;
  box-shadow: 0px 0px 5px 2px rgba(1, 255, 47, 0.5);
  padding: 3px 50px;
  margin-left: 5px;
}

.header__menu ul li .menu__button--login:hover{
  border:none;
}

.menu__button--login span{
  color: #FFF;
}

.menu__button:hover{
  box-shadow: 0px 0px 5px 2px rgba(1, 255, 47, 0.5);
}

`