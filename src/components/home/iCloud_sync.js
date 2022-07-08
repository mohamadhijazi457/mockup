import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import VisualImage from '../../images/visual.png';
import VisualMobileImage from '../../images/VisualMobile.png';

const ICloudSync = ({ screenWidth }) => {
  return (
    <ICloudSyncContainer>
      <FlexWrapper>
        <div>
          {screenWidth > 964
          ? <div>
              <p style={{ fontSize: '34px' }}>Anywhere any device<br />with iCloud Sync</p><br />
              <p>Mockup is iCloud-enabled: all of your projects are synced and<br />accessible across your Mac,
                iPhone and iPad devices.<br />Add a stroke, element, or frame - you name it, on one and be<br />certain
                it will appear on all the other devices.<br />You can easily access your sketches from anywhere and
                on any<br />device at any time.</p>
            </div>
          : <div>
              <p style={{ fontSize: '34px' }}>Anywhere<br />any device<br />with iCloud Sync</p><br />
              <p>Mockup is iCloud-enabled: all of your<br />projects are synced and accessible<br />across your Mac,
                iPhone and iPad<br />devices. Add a stroke, element, or frame -<br />you name it, on one and be certain
                it will<br />appear on all the other devices.<br />You can easily access your sketches from<br />anywhere and
                on any device at any time.</p>
            </div>}
        </div>
        {screenWidth > 964
        ? <Image src={VisualImage} alt='visual_image' />
        : <Image src={VisualMobileImage} alt='visual_image' />}
      </FlexWrapper>
    </ICloudSyncContainer>
  );
};

const ICloudSyncContainer = styled.div`
  background-color: #F1F1F6;
  font-family: HelveticaNeue-Medium;
  padding: 50px 0 60px 0;
`;

const FlexWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: end;
  align-items: center;

  @media only screen and (max-width: 1025px) {
    flex-direction: column;
  }
`;

const Image = styled.img`
  width: 700px;
  height: 320px;
  margin-left: 40px;

  @media only screen and (max-width: 1025px) {
    margin-left: auto;
    margin-top: 40px;
    width: 95%;
    height: 400px;
  }

  @media only screen and (max-width: 1025px) {
    width: 100%;
    height: 320px;
  }
`;

export default ICloudSync;