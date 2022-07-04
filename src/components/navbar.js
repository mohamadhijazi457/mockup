import React, { useEffect, useState } from 'react';
import Styled from 'styled-components';
import Appicon from '../images/appicon.png';
const Navbar = () => {
    const [screenWidth, setScreenWidth] = useState(0);
  
    useEffect(() => {
      function handleResize() {
        setScreenWidth(window.innerWidth);
      }
      window.addEventListener("resize", handleResize);
      handleResize();
      
      return () => { 
        window.removeEventListener("resize", handleResize)
      }
    }, [setScreenWidth]);
  
    return ( 
    <NavbarContainer>
      <LeftContainer>
      <LogoIcon className="logo"><a href='#'><img src={Appicon} /></a></LogoIcon>  
      <NameContainer className="name">Mockup</NameContainer>
      </LeftContainer>
      <RightSide>
        <GetAppbtn className="btn" as="a" href="https://apps.apple.com/app/mockup-sketch-ui-ux/id1527554407">Get App</GetAppbtn>
      </RightSide>
    </NavbarContainer>
    );
  };
  
  const NavbarContainer = Styled.div `
  display:flex;
  flex-direction:row;
  align-items:center;
  justify-content:space-between;
  padding: 5px 10px 5px 30px;
  border-bottom:0.25px solid black ;
  `
  const LeftContainer=Styled.div`
  display:flex;
  flex-direction: row;
  align-items: center;
  justify-content:space-between;

 

  `
  const LogoIcon = Styled.div `
  display:flex;
  flex-direction: row;
  align-items: center;
  padding: 0 17px;
  
  `
  const NameContainer = Styled.div`
  display:flex;
  flex-direction: row;
  align-items: center; 
  font-family:HelveticaNeue-Medium;

  `
 
  const RightSide = Styled.div `
  flex: 0 0 80px;
  margin-right:0;
  display:flex;
  flex-direction: row;
  align-items: center;


  `
  const GetAppbtn = Styled.div`
  display:flex;
  background-color: black;
  border: none;
  color: white;
  padding: 3px 10px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 10px;
  border-radius:5px;
  font-family:HelveticaNeue-Regular;
  `

  
  export default Navbar;