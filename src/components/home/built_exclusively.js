import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import ClockIcon from '../../images/clock_icon.svg';
import MailIcon from '../../images/mail_icon.svg';
import MapsIcon from '../../images/maps_icon.svg';
import Logo from '../../images/mockup_icon.svg';
import PhotosIcon from '../../images/photos_icon.svg';
import PodcastIcon from '../../images/podcast_icon.svg';
import SettingsIcon from '../../images/settings_icon.svg';

const BuiltExclusively = () => {
  const [screenWidth, setScreenWidth] = useState(0);
  const [icon, setIcon] = useState(80);
  const [logo, setLogo] = useState(100);

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

  useEffect(() => {
    if (screenWidth <= 775) {
      setIcon(50);
      setLogo(70);
    } else {
      setIcon(80);
      setLogo(100);
    }
  }, [screenWidth]);

  return (
    <BuiltExclusivelyContainer>
      <FlexWrapper>
        {screenWidth >= 1087
        ? <div>
            <Icon src={SettingsIcon} width={icon} height={icon} alt='settings_icon' />
            <Icon src={MapsIcon} width={icon} height={icon} alt='maps_icon' />
            <Icon src={MailIcon} width={icon} height={icon} alt='mail_icon' />
            <Icon src={Logo} width={logo} height={logo} alt='mockup_logo' />
            <Icon src={PhotosIcon} width={icon} height={icon} alt='photos_icon' />
            <Icon src={PodcastIcon} width={icon} height={icon} alt='podcast_icon' />
            <Icon src={ClockIcon} width={icon} height={icon} alt='settings_icon' />
          </div>
        : <div>
            <MobileIcon src={MapsIcon} width={icon} height={icon} alt='maps_icon' />
            <MobileIcon src={MailIcon} width={icon} height={icon} alt='mail_icon' />
            <MobileIcon src={Logo} width={logo} height={logo} alt='mockup_logo' />
            <MobileIcon src={PhotosIcon} width={icon} height={icon} alt='photos_icon' />
            <MobileIcon src={PodcastIcon} width={icon} height={icon} alt='podcast_icon' />
          </div>}
      </FlexWrapper>

      <div style={{ textAlign: 'center', marginTop: '50px' }}>
        {screenWidth >= 600
        ? <div>
            <p style={{ fontSize: '30px', marginBottom: '10px' }}>Built exclusively for Apple</p>
            <p style={{ maxWidth: '550px', margin: '0 auto', width: '60%' }}>
              Driven by the creative and aspiring UI & UX designers out there, Mockup builds an exclusive
              sketching experience on iOS, iPadOS, and even macOS. Its presence on Apple platforms is dedicated
              to bring your rich sketches and innovative projects to life.
            </p>
          </div>
        : <div>
            <p style={{ fontSize: '30px', marginBottom: '10px' }}>Built exclusively<br /> for Apple</p>
            <p style={{ maxWidth: '550px', margin: '0 auto', width: '85%' }}>
              Driven by the creative and aspiring UI & UX designers out there, Mockup builds an exclusive
              sketching experience on iOS, iPadOS, and even macOS. Its presence on Apple platforms is dedicated
              to bring your rich sketches and innovative projects to life.
            </p>
          </div>}
      </div>
    </BuiltExclusivelyContainer>
  );
};

const BuiltExclusivelyContainer = styled.div`
  background-color: black;
  color: white;
  font-family: HelveticaNeue-Medium;
  padding: 50px 0 60px 0;
`;

const FlexWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const Icon = styled.img`
  :not(:nth-child(7)) {
    margin-right: 80px;
  }
  margin-top: auto;
`;

const MobileIcon = styled.img`
  :not(:nth-child(5)) {
    margin-right: 80px;
  }
  margin-top: auto;

  @media only screen and (max-width: 775px) {
    :not(:nth-child(5)) {
      margin-right: 20px;
    }
  }
`;

export default BuiltExclusively;