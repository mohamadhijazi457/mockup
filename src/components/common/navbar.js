import React from 'react';
import styled from 'styled-components';
import Appicon from '../../images/appicon.png';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return ( 
    <NavbarContainer>
      <LeftContainer>
        <LogoIcon className="logo"><Link to='/'><img src={Appicon} alt='app_icon' /></Link></LogoIcon>  
        <NameContainer className="name">Mockup</NameContainer>
      </LeftContainer>
      <RightSide>
        <GetAppbtn className="btn" as="a" href="https://apps.apple.com/app/mockup-sketch-ui-ux/id1527554407" target='_blank'>Get App</GetAppbtn>
      </RightSide>
    </NavbarContainer>
  );
};
  
const NavbarContainer = styled.div `
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 5px 10px 5px 30px;
  border-bottom: 0.25px solid black ;
`;

const LeftContainer=styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const LogoIcon = styled.div `
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0 17px;
`;

const NameContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center; 
`;

const RightSide = styled.div `
  flex: 0 0 90px;
  margin-right: 0;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const GetAppbtn = styled.div`
  display: flex;
  background-color: black;
  border: none;
  color: white;
  padding: 4px 10px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 10px;
  border-radius: 5px;
`;

export default Navbar;
