import React from 'react';
import styled from 'styled-components';
import IPadUser from '../../images/iPad User Guides.svg';
import IpadCommunity from '../../images/iPad Community Help.svg';
import IpadEmail from '../../images/iPad Email Support.svg';
import CircleSketchOut from '../../images/circle Mockup.svg';
import UnderlinePaper from '../../images/underline Support.svg';
import Circle from '../common/circle';
import Underline from '../common/underline';

const SupportPage = ({ screenWidth }) => {
  return (
    <SupportContainer>
      <p style={{ fontSize: '34px', textAlign: 'center' }}><Circle text='Mockup' src={CircleSketchOut} width='160' top='-2' left='-12'  /> <Underline text='Support' src={UnderlinePaper} width='140' bottom='-20' left='-2' /></p>
        {screenWidth > 1025
        ? <FlexWrapper>
            <SupportElement>
              <img src={IPadUser} style={{ position: 'relative', top: '0', left: '0', marginRight: '20px' }} alt='ipad_img' />
              <p style={{ position: 'absolute', top: '45%', left: '32%' }}> <a href ='https://community.getmockup.app/c/how-to/7' target='blank' style={{color:'black'}}><b><u>User Guides</u></b></a></p>
              <p style={{ position: 'absolute', top: '55%', left: '22%', marginTop: '5px' }}>Instructions explaining<br />how to use Mockup.</p>
            </SupportElement>

            <SupportElement>
              <img src={IpadCommunity} style={{ position: 'relative', top: '0', left: '0', marginRight: '20px' }} alt='ipad_img' />
              <p style={{ position: 'absolute', top: '45%', left: '25%' }}> <a href ='https://community.getmockup.app/' target='blank' style={{color:'black'}}><b><u>Community Help</u></b></a></p> 
              <p style={{ position: 'absolute', top: '55%', left: '14%', marginTop: '5px' }}>Let’s discuss your problem.<br />Others may benefit as well. </p>
            </SupportElement>
            
            <SupportElement>
              <img src={IpadEmail} style={{ position: 'relative', top: '0', left: '0' }} alt='ipad_img' />
              <p style={{ position: 'absolute', top: '45%', left: '31%' }}> <a href='mailto:contact@getmockup.app?' target='blank' style={{color:'black'}}><b><u>Email Support</u></b></a></p>
              <p style={{ position: 'absolute', top: '55%', left: '18%', marginTop: '5px' }}>Get in touch. We’d love to<br />answer your questions.</p>
            </SupportElement>
          </FlexWrapper>
        : screenWidth <= 1025 && screenWidth > 964
        ? <FlexWrapper>
            <div style={{ display: 'flex' }}>
              <SupportElement>
                <img src={IPadUser} style={{ position: 'relative', top: '0', left: '0', marginRight: '20px' }} alt='ipad_img' />
                <p style={{ position: 'absolute', top: '45%', left: '32%' }}> <a href ='https://community.getmockup.app/c/how-to/7' target='blank' style={{color:'black'}}><b><u>User Guides</u></b></a></p>
              <p style={{ position: 'absolute', top: '55%', left: '16%', marginTop: '8px' }}>Instructions explaining how<br />to use Mockup.</p>
              </SupportElement>

              <SupportElement>
                <img src={IpadCommunity} style={{ position: 'relative', top: '0', left: '0' }} alt='ipad_img' />
                <p style={{ position: 'absolute', top: '45%', left: '28%' }}> <a href ='https://community.getmockup.app/' target='blank' style={{color:'black'}}><b><u>Community Help</u></b></a></p> 
              <p style={{ position: 'absolute', top: '55%', left: '16%', marginTop: '8px' }}>Let’s discuss your problem.<br />Others may benefit as well. </p>
              </SupportElement>
            </div>
            
            <SupportElement>
              <img src={IpadEmail} style={{ position: 'relative', top: '0', left: '0', marginTop: '8px' }} alt='ipad_img' />
              <p style={{ position: 'absolute', top: '45%', left: '31%' }}> <a href='mailto:contact@getmockup.app?' target='blank' style={{color:'black'}}><b><u>Email Support</u></b></a></p>
              <p style={{ position: 'absolute', top: '55%', left: '18%', marginTop: '8px' }}>Get in touch. We’d love to<br />answer your questions.</p>
            </SupportElement>
          </FlexWrapper>
        : <FlexWrapper>
            <SupportElement>
              <img src={IPadUser} style={{ position: 'relative', top: '0', left: '0' }} alt='ipad_img' />
              <p style={{ position: 'absolute', top: '45%', left: '33%' }}> <a href ='https://community.getmockup.app/c/how-to/7' target='blank' style={{color:'black'}}><b><u>User Guides</u></b></a></p>
              <p style={{ position: 'absolute', top: '55%', left: '22%', marginTop: '5px' }}>Instructions explaining<br />how to use Mockup.</p>
            </SupportElement>

            <SupportElement>
              <img src={IpadCommunity} style={{ position: 'relative', top: '0', left: '0', marginTop: '20px' }} alt='ipad_img' />
              <p style={{ position: 'absolute', top: '45%', left: '27%' }}> <a href ='https://community.getmockup.app/' target='blank' style={{color:'black'}}><b><u>Community Help</u></b></a></p> 
              <p style={{ position: 'absolute', top: '55%', left: '14%', marginTop: '5px' }}>Let’s discuss your problem.<br />Others may benefit as well. </p>
            </SupportElement>
            
            <SupportElement>
              <img src={IpadEmail} style={{ position: 'relative', top: '0', left: '0', marginTop: '20px' }} alt='ipad_img' />
              <p style={{ position: 'absolute', top: '45%', left: '31%' }}> <a href='mailto:contact@getmockup.app?' target='blank' style={{color:'black'}}><b><u>Email Support</u></b></a></p>
              <p style={{ position: 'absolute', top: '55%', left: '18%', marginTop: '5px' }}>Get in touch. We’d love to<br />answer your questions.</p>
            </SupportElement>
          </FlexWrapper>}
    </SupportContainer>
  );
};

const SupportContainer = styled.div`
  padding: 100px 0 100px 0;

  @media only screen and (max-width: 964px) {
    padding: 50px 0 50px 0;
  }
`;

const FlexWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 50px;

  @media only screen and (max-width: 1025px) {
    flex-direction: column;
  }
`;

const SupportElement = styled.div`
  position: relative;
  top: 0;
  left: 0;
  text-align: center;
`;

export default SupportPage;
