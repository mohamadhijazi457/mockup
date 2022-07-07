import React, { useEffect, useState } from 'react';
import Styled from 'styled-components';
import RightSideImg from '../../images/right group devices.png';

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
              <ListServices>
              <div>
              <ul style={{fontFamily:"HelveticaNeue-Regular", fontSize:"14px",marginBottom:"10px"}}>
              <li style={{listStyle:"none",display:"inline", border: "1px solid black", width:"16px",height:"12px",borderRadius:"10px",textAlign:"center",paddingLeft:"5px",paddingRight:"7px",marginRight:"5px"}}>iPhone</li>
              <li style={{listStyle:"none",display:"inline", border: "1px solid black", width:"16px",height:"12px",borderRadius:"10px",textAlign:"center",paddingLeft:"2px",paddingRight:"9px",marginRight:"5px"}}>&nbsp; &nbsp;iPad</li>
              <li style={{listStyle:"none",display:"inline", border: "1px solid black", width:"16px",height:"12px",borderRadius:"10px",textAlign:"center",paddingLeft:"0px",paddingRight:"9px",marginRight:"5px"}}>&nbsp; &nbsp;Apple Watch</li>
              <li style={{listStyle:"none",display:"inline", border: "1px solid black", width:"16px",height:"12px",borderRadius:"10px",textAlign:"center",paddingLeft:"0px",paddingRight:"9px",marginRight:"5px"}}>&nbsp; &nbsp;Web</li>
              <li style={{listStyle:"none",display:"inline", border: "1px solid black", width:"16px",height:"12px",borderRadius:"10px",textAlign:"center",paddingLeft:"0px",paddingRight:"9px",marginRight:"5px"}}>&nbsp; &nbsp;Mac</li>
              <li style={{listStyle:"none",display:"inline", border: "1px solid black", width:"16x",height:"12px",borderRadius:"10px",textAlign:"center",paddingLeft:"0px",paddingRight:"9px",marginRight:"5px"}}>&nbsp; &nbsp;Android</li>
              </ul>
              </div>
              
              <div>
              <ul style={{fontFamily:"HelveticaNeue-Regular", fontSize:"14px",display:"inline",marginTop:"20px"}}>
              <li style={{listStyle:"none",display:"inline", border: "1px solid black", width:"12px",height:"9px",borderRadius:"10px",textAlign:"center",paddingLeft:"0px",paddingRight:"9px",marginRight:"5px"}}>&nbsp; &nbsp;Widgets</li>
              <li style={{listStyle:"none",display:"inline", border: "1px solid black", width:"16px",height:"12px",borderRadius:"10px",textAlign:"center",paddingLeft:"0px",paddingRight:"9px",marginRight:"5px"}}>&nbsp; &nbsp;App Icon</li>
              <li style={{listStyle:"none",display:"inline", border: "1px solid black", width:"16px",height:"12px",borderRadius:"10px",textAlign:"center",paddingLeft:"5px",paddingRight:"9px",marginRight:"5px"}}>&nbsp; &nbsp;Blank template</li>
              </ul>
              </div>
              
              </ListServices>
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
        
        
        `;
        const ListServices = Styled.div`
        padding-top:20px;
        `;
        const LeftSide = Styled.div`
        
        
        `;
        const RightSide = Styled.div`
        
        `;
        
export  default DiverseTemplates;
