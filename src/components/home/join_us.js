import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Shape from '../../images/shape.png';
import BorderScreen from '../../images/border_screen.png';
import Circle from '../common/circle';
import CircleJoinUs from '../../images/circle_Join_us.svg';

const JoinUs = ({ screenWidth }) => {
  return (
    <JoinUsContainer>
      <div>
        {screenWidth > 964
        ? <p style={{ fontSize: '34px' }}>
            <Circle text='Join us' src={CircleJoinUs} width='145' top='8' left='-18' /> on<br />Mockup Community
          </p>
        : <p style={{ fontSize: '34px' }}>
            <Circle text='Join us' src={CircleJoinUs} width='130' top='10' left='-10' /> on Mockup<br />Community
          </p>}
      </div>

      <ShapeFlex>
        <ShapeContainer>
          <ShapeImage src={Shape} />
          <BorderImage src={BorderScreen} />
          <Rectangle />
          <Text>Discover new ways Mockup can assist you, stay up to date on all Mockup-related news,
            and share your work with other users.</Text>
        </ShapeContainer>
        <ShapeContainer>
          <ShapeImage src={Shape} />
          <BorderImage src={BorderScreen} />
          <Rectangle />
          <Text style={{ left: '5%', width: '270px' }}>Help us improve the app with your feedback. Add your suggestions and keep
            us posted about bugs you’re facing.</Text>
        </ShapeContainer>
      </ShapeFlex>

      <a href='https://community.getmockup.app/' target='blank'><JoinButton>Join</JoinButton></a>
    </JoinUsContainer>
  )
};

const JoinUsContainer = styled.div`
  background-color: #1C1C1E;
  color: white;
  font-family: HelveticaNeue-Medium;
  padding: 50px 0 60px 0;
  text-align: center;
`;

const ShapeFlex = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-top: 20px;

  @media only screen and (max-width: 600px) {
    flex-direction: column;
    align-items: center;
    
    > div:nth-child(1) {
      margin-bottom: 20px;
    }
  }
`;

const ShapeContainer = styled.div`
  margin-right: 30px;
  position: relative;
  top: 0;
  left: 0;

  @media only screen and (max-width: 600px) {
    margin-right: 0;
  }
`;

const ShapeImage = styled.img`
  width: 300px;
  height: 250px;
  position: relative;
  top: 0;
  left: 0;
`;

const BorderImage = styled.img`
  width: 275px;
  height: 225px;
  position: absolute;
  top: 12px;
  left: 12px;
`;

const Rectangle = styled.div`
  padding: 15px 10px 15px 10px;
  border: 1px solid white;
  position: absolute;
  top: 25%;
  left: 45%;
`;

const Text = styled.p`
  position: absolute;
  top: 50%;
  left: 3%;
  width: 280px;
`;

const JoinButton = styled.button`
  width: 74px;
  height: 30px;
  font-size: 16px;
  border-radius: 8px;
  font-weight: bold;
  margin: 25px 30px 0 0;
  cursor: pointer;

  @media only screen and (max-width: 600px) {
    margin-right: 0;
  }
`;

export default JoinUs;