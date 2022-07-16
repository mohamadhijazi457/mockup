import React from 'react';
import styled from 'styled-components';
import RightSideImgIpad from '../../images/right group devices ipad diverse.png';
import LeftSideImgIpad from '../../images/left group devices ipad diverse.png';
import CircleOver35 from '../../images/circle over 35.svg';
import UnderlineTemplates from '../../images/underline templates.svg';
import Circle from '../common/circle';
import Underline from '../common/underline';

const DiverseTemplatesIpad = () => {
  return(
    <ContainerDiverse>
      <TextMiddle>
      <p style={{fontSize:"34px"}}>
        <Circle text='Over 35' src={CircleOver35} width='140' top='-5' left='-10' /> diverse<br/>
        <Underline text='templates' src={UnderlineTemplates} width='170' bottom='-10' left='-4' /> on hand</p>
      <p style={{paddingTop:"30px", textAlign:"center"}}>
        Mockup covers various templates to help <br/> you envision your project within its <br/> intended frame. It offers
        more than 35 <br/> distinct options to choose from including:</p>
      <ListServices>
      <div>
        <ul style={{fontSize:"15px",marginBottom:"10px",paddingTop:"20px",paddingLeft:"80px"}}>
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
        <ul style={{fontSize:"15px",display:"inline",marginBottom:"10px",paddingLeft:"80px"}}>
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
          <ul style={{fontSize:"15px",display:"inline",marginTop:"20px"}}>
            <li style={{listStyle:"none",display:"inline", border: "1px solid black", width:"16px",height:"12px",
              borderRadius:"10px",textAlign:"center",paddingLeft:"0px",paddingRight:"9px",marginRight:"5px"}}>&nbsp; &nbsp;Blank Template</li>
          </ul>
        </ListServicesTwo>
      </TextMiddle>
      <ImgsContainer>
        <img src={LeftSideImgIpad} alt='leftSide_png' style={{width:"500px", height:"500px"}} />
        <img src={RightSideImgIpad} alt='RightSide_png' style={{width:"500px", height:"500px" }}/>
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
  padding-right: 70px;
`;

const ImgsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 20px;
`;

const ListServicesTwo = styled.div`
  padding-top: 10px;
`;

export  default DiverseTemplatesIpad;
