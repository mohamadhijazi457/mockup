import React from 'react';
import styled from 'styled-components';
import LeftIpad from '../../images/left_iPad.png';
import RightIpad from '../../images/right_iPad.png';
import LeftIpad1 from '../../images/left_ipad1.png';
import RightIpad1 from '../../images/right iPad1.png';
import LeftIpadMobile from '../../images/left_ipad1_mobile.png';
import RightIpadMobile from '../../images/right iPad1 Mobile.png';
import CircleSeamless from '../../images/circle seamless.svg';
import UnderlineShareplay from '../../images/underline shareplay.svg';
import Circle from '../common/circle';
import Underline from '../common/underline';

const ShareExperience = ({ screenWidth }) => {
  return (
    <ShareExperienceContainer>
      {screenWidth > 1025
      ? <FlexWrapper>
          <Image src={LeftIpad} alt='left_ipad_image' />
          <Paragraph withMargin screenWidth={screenWidth} />
          <Image src={RightIpad} alt='right_ipad_image' />
        </FlexWrapper>
      : <ColumnFlex>
          <Paragraph screenWidth={screenWidth} />
          <ImageFlex>
            <Image src={screenWidth > 964 ? LeftIpad1 : LeftIpadMobile} alt='left_ipad_image' style={{ marginRight: '20px' }} />
            <Image src={screenWidth > 964 ? RightIpad1 : RightIpadMobile} alt='right_ipad_image' />
          </ImageFlex>
        </ColumnFlex>}
    </ShareExperienceContainer>
  );
};

const Paragraph = (props) => {
  const { screenWidth, withMargin } = props;
  return (
    <div style={{ marginBottom: `${withMargin ? '10px' : '0'}` }}>
      {screenWidth > 964
      ? <div>
          <p style={{ fontSize: '34px' }}>
            A <Circle text='seamless' src={CircleSeamless} width='170' left='-10' /> experience<br />with&nbsp;
            <Underline text='SharePlay' src={UnderlineShareplay} width='160' bottom='-4' />
          </p><br/>
          <p>SharePlay is a powerful way for users to connect with each other<br/>and share experiences
            right inside FaceTime.<br/>With SharePlay, you can show your work, brainstorm and plan,<br/>and even
            sketch together with your colleagues or clients.</p>
        </div>
      : <div>
          <p style={{ fontSize: '34px' }}>
            A <Circle text='seamless' src={CircleSeamless} width='175' left='-6' /><br />experience<br />with&nbsp;
            <Underline text='SharePlay' src={UnderlineShareplay} width='160' bottom='-12' />
          </p><br/>
          <p>SharePlay is a powerful way for<br />users to connect with each other<br/>and share experiences
            right inside<br />FaceTime. With SharePlay, you can<br />show your work, brainstorm and plan, and<br/>even
            sketch together with<br/>your colleagues or clients.</p>
        </div>}
    </div>
  );
};

const ShareExperienceContainer = styled.div`
  background-color: #1C1C1E;
  color: white;
  padding: 50px 0 60px 0;
  text-align: center;
`;

const FlexWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 100px 0 100px;
`;

const Image = styled.img`
  width: 300px;

  @media only screen and (max-width: 650px) {
    width: 48%;
  }
`;

const ColumnFlex = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const ImageFlex = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-top: 40px;
`;

export default ShareExperience;
