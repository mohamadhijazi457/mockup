import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import RightSideImg from '../../images/right group devices mobile diverse.png';
import LeftSideImg from '../../images/left group devices mobile diverse.png';
import CircleOver35 from '../../images/circle over 35.svg';
import UnderlineTemplates from '../../images/underline templates.svg';
import Circle from '../common/circle';
import Underline from '../common/underline';

const DiverseTemplatesMobile = () => {
  return(
    <ContainerDiverse>
      <TextMiddle>
      <p style={{fontFamily:"HelveticaNeue-Medium.ttf", fontSize:"34px",paddingLeft:"10px",textAlign:"center",paddingTop:"20px"}}>
      <Circle text='Over 35' src={CircleOver35} width='150' top='-5' left='-14' /> diverse<br/> <Underline text='templates' src={UnderlineTemplates} width='160' bottom='-10' left='-4' /> on hand</p>
      <p style={{fontFamily:"HelveticaNeue-Regular.ttf",paddingTop:"30px", textAlign:"center",paddingLeft:"10px"}}>
        Mockup covers various templates to help <br/> you envision your project within its <br/> intended frame.
        It offers more than 35 <br/> distinct options to choose from including:</p>
      <ListServices>
      <div>
        <ul style={{fontFamily:"HelveticaNeue-Regular.ttf", fontSize:"15px",marginBottom:"10px",paddingTop:"20px",paddingLeft:"10px"}}>
          <li style={{listStyle:"none",display:"inline", border: "1px solid black", width:"16px",height:"12px",
            borderRadius:"10px",textAlign:"center",paddingLeft:"5px",paddingRight:"7px",marginRight:"5px"}}>iPhone</li>
          <li style={{listStyle:"none",display:"inline", border: "1px solid black", width:"16px",height:"12px",
            borderRadius:"10px",textAlign:"center",paddingLeft:"2px",paddingRight:"9px",marginRight:"5px"}}>&nbsp; &nbsp;iPad</li>
          <li style={{listStyle:"none",display:"inline", border: "1px solid black", width:"16px",height:"12px",
            borderRadius:"10px",textAlign:"center",paddingLeft:"0px",paddingRight:"9px",marginRight:"5px"}}>&nbsp; &nbsp;Apple Watch</li>
          <li style={{listStyle:"none",display:"inline", border: "1px solid black", width:"16px",height:"12px",
            borderRadius:"10px",textAlign:"center",paddingLeft:"0px",paddingRight:"9px",marginRight:"5px"}}>&nbsp; &nbsp;Web</li>
        </ul>
      </div>
      <div>
        <ul style={{fontFamily:"HelveticaNeue-Regular.ttf", fontSize:"15px",display:"inline",marginBottom:"10px",paddingLeft:"10px"}}>
          <li style={{listStyle:"none",display:"inline", border: "1px solid black", width:"16px",height:"12px",
            borderRadius:"10px",textAlign:"center",paddingLeft:"0px",paddingRight:"9px",marginRight:"5px"}}>&nbsp; &nbsp;Mac</li>
          <li style={{listStyle:"none",display:"inline", border: "1px solid black", width:"16x",height:"12px",
            borderRadius:"10px",textAlign:"center",paddingLeft:"0px",paddingRight:"9px",marginRight:"5px"}}>&nbsp; &nbsp;Android</li>
          <li style={{listStyle:"none",display:"inline", border: "1px solid black", width:"12px",height:"9px",
            borderRadius:"10px",textAlign:"center",paddingLeft:"0px",paddingRight:"9px",marginRight:"5px"}}>&nbsp; &nbsp;Widgets</li>
          <li style={{listStyle:"none",display:"inline", border: "1px solid black", width:"16px",height:"12px",
            borderRadius:"10px",textAlign:"center",paddingLeft:"0px",paddingRight:"9px",marginRight:"5px"}}>&nbsp; &nbsp;App Icon</li>
        </ul>
      </div>
      </ListServices>
        <ListServicesTwo>
          <ul style={{fontFamily:"HelveticaNeue-Regular", fontSize:"15px",display:"inline",marginTop:"20px"}}>
            <li style={{listStyle:"none",display:"inline", border: "1px solid black", width:"16px",height:"12px",
              borderRadius:"10px",textAlign:"center",paddingLeft:"0px",paddingRight:"9px",marginRight:"5px"}}>&nbsp; &nbsp;Blank Template</li>
          </ul>
        </ListServicesTwo>
      </TextMiddle>
      <ImgsContainer>
        <img src={LeftSideImg} alt='leftSide_png' style={{width:"232.69px", height:"428.48px"}} />
        <img src={RightSideImg} alt='RightSide_png' style={{width:"200.69px", height:"428.48px", paddingLeft:"20px" }}/>
      </ImgsContainer>
    </ContainerDiverse>
  );
};

const ContainerDiverse = styled.div`
  display: column;
  background-color: #f1f1f6;
  margin-top: 50px;
  text-align: center;
  padding: 40px 0 60px 0;
`;

const TextMiddle = styled.div`
`;

const ListServices = styled.div`
  padding-right: 10px;
`;

const ImgsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 20px;
`;

const ListServicesTwo = styled.div`
  padding-top: 10px;
  padding-left: 0px;
  padding-right:15px;
`;

export  default DiverseTemplatesMobile;
