import React, { useEffect, useState } from 'react';
import Styled from 'styled-components';

const DiverseTemplates = () => {
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
     return(
        <ContainerDiverse>
            <p style={{fontFamily:"HelveticaNeue-Medium", fontSize:"30px"}}>Over 35 diverse<br/> templates on hand</p>
            <p style={{fontFamily:"HelveticaNeue-Regular",fontSize:"15px"}}>Mockup covers various templates to help you envision your project<br/> within its intended frame. It offers more than 35 distinct options to<br/> choose from including:</p>
        </ContainerDiverse>
           );
        };
        const ContainerDiverse = Styled.div`
        justify-content: center;
        align-items: center;
        background-color:#f1f1f6;
        margin-top: 50px;
        padding: 80px 0 80px 0;
        text-align:center;
        margin-bottom:50px;
        `;
        
export  default DiverseTemplates;
