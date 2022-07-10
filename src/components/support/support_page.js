import React from 'react';
import styled from 'styled-components';
import BorderScreen from '../../images/iPad User Guides.png';
const SupportPage = () => {
  return (
    <FirstContainer>
      <ShapeContainer>
      <Text>
      <h1 style={{fontFamily:"HelveticaNeue-Medium",fontSize:"34px"}}>Mockup Support</h1>
      </Text>
      <ShapeImage src={BorderScreen} />
      <Text style={{ left: '5%', width: '270px' }}>
      <a href='https://community.getmockup.app/c/how-to/7' target='blank' style={{fontFamily:"HelveticaNeue-Medium"}}><u>User Guides</u></a>
      <p>Instructions explaining<br/>how to use Mockup.</p>
      </Text>
      </ShapeContainer>
    </FirstContainer>
  );
};
const FirstContainer = styled.div`
display: flex;
flex-direction: row;
justify-content: center;
margin-top: 20px;
`;
const ShapeContainer = styled.div`
margin-right: 30px;
position: relative;
top: 0;
left: 0;
`;
const Text = styled.div`
  position: absolute;
  top: 50%;
  left: 3%;
  width: 280px;
`;
const ShapeImage = styled.div`
  width: 300px;
  height: 250px;
  position: relative;
  top: 0;
  left: 0;
`;

export default SupportPage;