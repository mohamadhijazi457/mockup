import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import DarkLightIpad from '../../images/dark_light_ipad.png';
import DarkLightMobile from '../../images/dark_light_mobile.png';
import ApplePencil from '../../images/apple pencil.png';
import ApplePencilIpad from '../../images/Layer.png';
import ApplePencilMobile from '../../images/apple pencil mobile.png';

const DarkLightModes = () => {
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
    <DarkLightModesContainer>
      <div>
        {screenWidth > 725
        ? <div>
            <p style={{ fontSize: '34px' }}>Switch off between<br/>Dark and Light Modes</p><br/>
            <p>We love seeing the differences and the small touches to your<br />sketches and projects
              with the dark and light mode transitions.<br />Design in dark mode to convey an elegant and sleek
              look and feel,<br />or leave room to fresh look and content with light mode.
              Enable<br />your preferred mode as you carry on with your sketches.</p>
          </div>
        : <div>
            <p style={{ fontSize: '34px' }}>Switch off<br/>between Dark<br/>and Light Modes</p><br/>
            <p>We love seeing the differences and the small<br />touches to your sketches and projects
              with<br />the dark and light mode transitions.<br />Design in dark mode to convey an elegant<br />and sleek
              look and feel, or leave room to<br />fresh look and content with light mode.<br />
              Enable your preferred mode as you carry on<br />with your sketches.</p>
          </div>}
      </div>

      {screenWidth > 1025
      ? <IpadFlex>
          <IpadImage src={DarkLightIpad} />
          <img style={{ marginLeft: '40px' }} src={ApplePencil} height='480px' />
        </IpadFlex>
      : screenWidth <= 1025 && screenWidth > 725
      ? <IpadFlex>
          <img style={{ marginLeft: '14px' }} src={ApplePencilIpad} width='520' />
          <IpadImage src={DarkLightIpad} />
        </IpadFlex>
      : <IpadFlex>
          <img src={ApplePencilMobile} width='400' />
          <IpadImage src={DarkLightMobile} />
        </IpadFlex>}
    </DarkLightModesContainer>
  );
};

const DarkLightModesContainer = styled.div`
  background: linear-gradient(to right, white 30%, black 0%);
  color: white;
  font-family: HelveticaNeue-Medium;
  padding: 50px 0 60px 0;
  text-align: center;

  @media only screen and (max-width: 1025px) {
    background: linear-gradient(to right, white 24%, black 0%);
  }

  @media only screen and (max-width: 725px) {
    background: black;
  }
`;

const IpadFlex = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 20px;

  @media only screen and (max-width: 1025px) {
    flex-direction: column;
  }

  @media only screen and (max-width: 725px) {
    align-items: end;
    margin-top: 20px;
  }
`;

const IpadImage = styled.img`
  width: 750px;

  @media only screen and (max-width: 725px) {
    width: 650px;
  }
`;

export default DarkLightModes