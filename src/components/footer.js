import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import InstaLogo from '../images/instagram_icon.svg';
import TwitterLogo from '../images/twitter_icon.svg';
import TiktokLogo from '../images/tiktok_icon.svg';
import FacebookLogo from '../images/facebook_icon.svg';

const Footer = () => {
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
    <FooterContainer>
      <SocialMediaFlexWrapper>
        <a href='https://www.instagram.com/mockup.app/' target='blank'>
          <img src={InstaLogo} width='30' height='30' alt='instagram_logo' style={{ marginRight: '28px' }} />
        </a>
        <a href='https://twitter.com/MockupApp' target='blank'>
          <img src={TwitterLogo} width='30' height='30' alt='twitter_logo' style={{ marginRight: '28px' }} />
        </a>
        <a href='https://www.tiktok.com/@mockup.app' target='blank'>
          <img src={TiktokLogo} width='30' height='30' alt='tiktok_logo' style={{ marginRight: '28px' }} />
        </a>
        <a href='https://www.facebook.com/GetMockup/' target='blank'>
          <img src={FacebookLogo} width='30' height='30' alt='facebook_logo' />
        </a>
      </SocialMediaFlexWrapper>

      {screenWidth > 600
      ? <DesktopLinksContainer>
          <a href='#' style={{ marginRight: '40px' }}>Overview</a>
          <a href='#' style={{ marginRight: '40px' }}>Community</a>
          <a href='#' style={{ marginRight: '40px' }}>Support</a>
          <a href='#'>Contact Us</a>
        </DesktopLinksContainer>
      : 
        <div>
          <MobileLinksContainer style={{ margin: '38px 0 20px 0' }}>
            <a href='#'>Overview</a>
            <a href='#' style={{ paddingRight: '2px' }}>Community</a>
          </MobileLinksContainer>
          <MobileLinksContainer>
            <a href='#'>Support</a>
            <a href='#'>Contact Us</a>
          </MobileLinksContainer>
        </div>}

      <CopyRightFlex>
        <p>© 2022 Mockup</p>
        <a href='#'>Terms & Privacy</a>
      </CopyRightFlex>
    </FooterContainer>
  );
};

const FooterContainer = styled.div`
  background-color: black;
  color: white;
  font-family: HelveticaNeue-Medium;
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