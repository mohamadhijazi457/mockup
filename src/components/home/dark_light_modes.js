import React from 'react';
import styled from 'styled-components';
import LightIpad from '../../images/Light iPad.png';
import DarkIpad from '../../images/Dark iPad.png';
import ApplePencil from '../../images/apple pencil.png';

const DarkLightModes = () => {
  return (
    <DarkLightModesContainer>
      <div>
        <h1>Switch off between<br/>Dark and Light Modes</h1><br/>
        <p style={{ margin: '0 auto', width: '480px' }}>We love seeing the differences and the small touches to your sketches and projects
          with the dark and light mode transitions. Design in dark mode to convey an elegant and sleek
          look and feel, or leave room to fresh look and content with light mode.
          Enable your preferred mode as you carry on with your sketches.</p>
      </div>

      <IpadFlex>
        <IpadContainer>
          <IpadImage src={LightIpad} />
          <IpadImage style={{ width: '605px', height: '503px', position: 'absolute', top: '11px', left: '13%' }} src={DarkIpad} />
        </IpadContainer>
        <img style={{ marginLeft: '40px' }} src={ApplePencil} height='480px' />
      </IpadFlex>
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
    background: linear-gradient(to right, white 20%, black 0%);
  }
`;

const IpadFlex = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
`;

const IpadContainer = styled.div`
  position: relative;
  top: 0;
  left: 0;
`;

const IpadImage = styled.img`
  width: 700px;
  position: relative;
  top: 0;
  left: 0;
`;

export default DarkLightModes