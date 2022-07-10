import React from 'react';
import styled from 'styled-components';
import IPadUser from '../../images/iPad User Guides.svg';
import IpadCommunity from '../../images/iPad Community Help.svg';
import IpadEmail from '../../images/iPad Email Support.svg';

const SupportPage = ({ screenWidth }) => {
  return (
    <SupportContainer>
      <p style={{ fontSize: '34px', textAlign: 'center' }}>Mockup Support</p>
        {screenWidth > 1025
        ? <FlexWrapper>
            <SupportElement>
              <img src={IPadUser} style={{ marginRight: '20px' }} />
              <p style={{ position: 'absolute', top: '45%', left: '32%' }}><b><u>User Guides</u></b></p>
              <p style={{ position: 'absolute', top: '55%', left: '20%' }}>Instructions explaining<br />how to use Mockup.</p>
            </SupportElement>

            <SupportElement>
              <img src={IpadCommunity} style={{ marginRight: '20px' }} />
              <p style={{ position: 'absolute', top: '45%', left: '26%' }}><b><u>Community Help</u></b></p>
              <p style={{ position: 'absolute', top: '55%', left: '12%' }}>Let’s discuss your problem.<br />Others may benefit as well. </p>
            </SupportElement>
            
            <SupportElement>
              <img src={IpadEmail} />
              <p style={{ position: 'absolute', top: '45%', left: '32%' }}><b><u>Email Support</u></b></p>
              <p style={{ position: 'absolute', top: '55%', left: '18%' }}>Get in touch. We’d love to<br />answer your questions.</p>
            </SupportElement>
          </FlexWrapper>
        : screenWidth <= 1025 && screenWidth > 964
        ? <FlexWrapper>
            <SupportElement>
              <img src={IPadUser} style={{ marginRight: '20px' }} />
              <p style={{ position: 'absolute', top: '45%', left: '30%' }}><b><u>User Guides</u></b></p>
              <p style={{ position: 'absolute', top: '55%', left: '24%' }}>Instructions explaining how<br />to use Mockup.</p>

              <img src={IpadCommunity} style={{ marginRight: '20px' }} />
              <p style={{ position: 'absolute', top: '45%', left: '58%' }}><b><u>Community Help</u></b></p>
              <p style={{ position: 'absolute', top: '55%', left: '54%' }}>Let’s discuss your problem.<br />Others may benefit as well. </p>
            </SupportElement>
            
            <SupportElement>
              <img src={IpadEmail} style={{  marginTop: '20px'}} />
              <p style={{ position: 'absolute', top: '45%', left: '45%' }}><b><u>Email Support</u></b></p>
              <p style={{ position: 'absolute', top: '55%', left: '41%' }}>Get in touch. We’d love to<br />answer your questions.</p>
            </SupportElement>
          </FlexWrapper>
        : <FlexWrapper>
            <SupportElement>
              <img src={IPadUser} style={{ marginBottom: '20px' }} />
              <p style={{ position: 'absolute', top: '45%', left: '41%' }}><b><u>User Guides</u></b></p>
              <p style={{ position: 'absolute', top: '55%', left: '32%' }}>Instructions explaining<br />how to use Mockup.</p>
            </SupportElement>

            <SupportElement>
              <img src={IpadCommunity} style={{ marginBottom: '20px' }} />
              <p style={{ position: 'absolute', top: '45%', left: '37%' }}><b><u>Community Help</u></b></p>
              <p style={{ position: 'absolute', top: '55%', left: '29%' }}>Let’s discuss your problem.<br />Others may benefit as well. </p>
            </SupportElement>
            
            <SupportElement>
              <img src={IpadEmail} />
              <p style={{ position: 'absolute', top: '45%', left: '40%' }}><b><u>Email Support</u></b></p>
              <p style={{ position: 'absolute', top: '55%', left: '30%' }}>Get in touch. We’d love to<br />answer your questions.</p>
            </SupportElement>
          </FlexWrapper>}
    </SupportContainer>
  );
};

const SupportContainer = styled.div`
  padding: 50px 0 70px 0;
  font-family: HelveticaNeue-Medium;
`;

const FlexWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
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
