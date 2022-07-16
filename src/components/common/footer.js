import React from 'react';
import styled from 'styled-components';
import InstaLogo from '../../images/instagram_icon.svg';
import TwitterLogo from '../../images/twitter_icon.svg';
import TiktokLogo from '../../images/tiktok_icon.svg';
import FacebookLogo from '../../images/facebook_icon.svg';
import { Link } from 'react-router-dom';

const Footer = ({ screenWidth }) => {
  return (
    <FooterContainer>
      <SocialMediaFlexWrapper>
        <a href='https://www.instagram.com/mockup.app/' target='blank'>
          <img src={InstaLogo} width='30' height='30' alt='instagram_logo' style={{ marginRight: '18px' }} />
        </a>
        <a href='https://twitter.com/MockupApp' target='blank'>
          <img src={TwitterLogo} width='30' height='30' alt='twitter_logo' style={{ marginLeft: '18px', marginRight: '18px' }} />
        </a>
        <a href='https://www.tiktok.com/@mockup.app' target='blank'>
          <img src={TiktokLogo} width='30' height='30' alt='tiktok_logo' style={{ marginLeft: '18px', marginRight: '18px' }} />
        </a>
        <a href='https://www.facebook.com/GetMockup/' target='blank'>
          <img src={FacebookLogo} width='30' height='30' alt='facebook_logo' style={{ marginLeft: '18px', marginRight: '18px' }} />
        </a>
      </SocialMediaFlexWrapper>

      {screenWidth > 964
      ? <DesktopLinksContainer>
          <a href='mailto:contact@getmockup.app' style={{ marginRight: '26px' }}>Overview</a>
          <a href='https://community.getmockup.app/' target='blank' style={{ marginLeft: '26px', marginRight: '26px' }}>Community</a>
          <Link to='/support' style={{ marginLeft: '26px', marginRight: '26px' }}>Support</Link>
          <a href='mailto:contact@getmockup.app' style={{ marginLeft: '26px', marginRight: '26px' }}>Contact Us</a>
        </DesktopLinksContainer>
      : 
        <div>
          <MobileLinksContainer style={{ margin: '38px 0 20px 0' }}>
            <a href='mailto:contact@getmockup.app'>Overview</a>
            <a href='https://community.getmockup.app/' target='blank' style={{ paddingRight: '2px' }}>Community</a>
          </MobileLinksContainer>
          <MobileLinksContainer>
            <Link to='/support'>Support</Link>
            <a href='mailto:contact@getmockup.app'>Contact Us</a>
          </MobileLinksContainer>
        </div>}

      <CopyRightFlex>
        <p>© 2022 Mockup</p>
        <Link to='/policies'>Terms & Privacy</Link>
      </CopyRightFlex>
    </FooterContainer>
  );
};

const FooterContainer = styled.div`
  background-color: black;
  color: white;
  font-size: 14px;
  padding: 50px 0 60px 0;
`;

const SocialMediaFlexWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;

  > a {
    color: white;
  }
`;

const DesktopLinksContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-top: 38px;

  > a {
    color: white;
  }
`;

const MobileLinksContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  > a {
    color: white;
    margin: auto;
  }
`;

const CopyRightFlex = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 35px;

  > a, > p {
    color: white;
    margin: auto;
  }
`;

export default Footer;