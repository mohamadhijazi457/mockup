import React, { useEffect, useState } from 'react';
import Styled from 'styled-components';
import RightSideImg from '../../images/right group devices.png';
import LeftSideImg from '../../images/left group devices 1.png';

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
            <LeftSide>
              <img src={LeftSideImg} alt='LeftSide_png' style={{width:"400px", height:"450px"}}/>
            </LeftSide>
            <TextMiddle>
            <p style={{fontFamily:"HelveticaNeue-Medium", fontSize:"30px"}}>Over 35 diverse<br/> templates on hand</p>
            <p style={{fontFamily:"HelveticaNeue-Regular",fontSize:"18px",paddingTop:"30px"}}>Mockup covers various templates to help you envision your project<br/> within its intended frame. It offers more than 35 distinct options to<br/> choose from including:</p>
            <div class="List_Services">
              <ul style={{fontFamily:"HelveticaNeue-Regular", fontSize:"20px", paddingTop:"20px"}}>
              <li style={{listStyle:"none",display:"inline"}}>iPhone</li>
              <li style={{listStyle:"none",display:"inline"}}>&nbsp; &nbsp;iPad</li>
              <li style={{listStyle:"none",display:"inline"}}>&nbsp; &nbsp;Apple Watch</li>
              <li style={{listStyle:"none",display:"inline"}}>&nbsp; &nbsp;Web</li>
              <li style={{listStyle:"none",display:"inline"}}>&nbsp; &nbsp;Mac</li>
              <li style={{listStyle:"none",display:"inline"}}>&nbsp; &nbsp;Android</li>
              <li style={{listStyle:"none",display:"inline"}}>&nbsp; &nbsp;Widgets</li>
              <li style={{listStyle:"none",display:"inline"}}>&nbsp; &nbsp;App Icon</li>
              <li style={{listStyle:"none",display:"inline"}}>&nbsp; &nbsp;Blank template</li>
              </ul>
            </div>
            </TextMiddle>
            <RightSide>
            <img src={RightSideImg} alt='RightSide_png' style={{width:"400px", height:"450px"}} />
            </RightSide>
        </ContainerDiverse>
           );
        };
        const ContainerDiverse = Styled.div`
        display:flex;
        justify-content: space-between;
        background-color:#f1f1f6;
        margin-top: 50px;
        text-align:center;
        padding: 70px 0 80px 0;

        `;
        const TextMiddle = Styled.div`
        padding-top:90px;
        
        > List_Services{
          list-style:none;
        }
        
        
        `;
        const LeftSide = Styled.div`
        
        
        `;
        const RightSide = Styled.div`
        
        `;
        
export  default DiverseTemplates;
