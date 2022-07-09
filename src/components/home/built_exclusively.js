import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import ClockIcon from '../../images/clock_icon.svg';
import MailIcon from '../../images/mail_icon.svg';
import MapsIcon from '../../images/maps_icon.svg';
import Logo from '../../images/mockup_icon.svg';
import PhotosIcon from '../../images/photos_icon.svg';
import PodcastIcon from '../../images/podcast_icon.svg';
import SettingsIcon from '../../images/settings_icon.svg';
import PhotosIconMobile from '../../images/Photos icon mobile.png';
import MapsIconMobile from '../../images/Maps icon mobile.png';
import CircleApple from '../../images/Circle Apple.svg';
import UnderlineExclusively from '../../images/underline exclusively.svg';
import Circle from '../common/circle';
import Underline from '../common/underline';

const MOBILEICONWIDTH = 30;

const BuiltExclusively = ({ screenWidth }) => {
  const [icon, setIcon] = useState(80);
  const [logo, setLogo] = useState(100);

  useEffect(() => {
    if (screenWidth <= 964) {
      setIcon(50);
      setLogo(70);
    } else {
      setIcon(80);
      setLogo(100);
    }
  }, [screenWidth]);

  return (
    <BuiltExclusivelyContainer>
      {screenWidth >= 1210
      ? <FlexWrapper>
          <Icon src={SettingsIcon} width={icon} height={icon} alt='settings_icon' />
          <Icon src={MapsIcon} width={icon} height={icon} alt='maps_icon' />
          <Icon src={MailIcon} width={icon} height={icon} alt='mail_icon' />
          <Icon src={Logo} width={logo} height={logo} alt='mockup_logo' />
          <Icon src={PodcastIcon} width={icon} height={icon} alt='podcast_icon' />
          <Icon src={PhotosIcon} width={icon} height={icon} alt='photos_icon' />
          <Icon src={ClockIcon} width={icon} height={icon} alt='settings_icon' />
        </FlexWrapper>
      : screenWidth < 1210 && screenWidth > 964
      ? <FlexWrapper>
          <MobileIcon src={MapsIcon} width={icon} height={icon} alt='maps_icon' />
          <MobileIcon src={MailIcon} width={icon} height={icon} alt='mail_icon' />
          <MobileIcon src={Logo} width={logo} height={logo} alt='mockup_logo' />
          <MobileIcon src={PodcastIcon} width={icon} height={icon} alt='podcast_icon' />
          <MobileIcon src={PhotosIcon} width={icon} height={icon} alt='photos_icon' />
        </FlexWrapper>
      : <FlexWrapper>
          <MobileIcon src={MapsIconMobile} width={MOBILEICONWIDTH} height={icon} alt='maps_icon' />
          <MobileIcon src={MailIcon} width={icon} height={icon} alt='mail_icon' />
          <MobileIcon src={Logo} width={logo} height={logo} alt='mockup_logo' />
          <MobileIcon src={PodcastIcon} width={icon} height={icon} alt='podcast_icon' />
          <MobileIcon src={PhotosIconMobile} width={MOBILEICONWIDTH} height={icon} alt='photos_icon' />
        </FlexWrapper>}

      <div style={{ textAlign: 'center', marginTop: '50px' }}>
        {screenWidth > 964
        ? <div>
            <p style={{ fontSize: '30px', marginBottom: '10px' }}>
              Built <Underline text='execlusively' src={UnderlineExclusively} width='165' bottom='-8' left='6' /> for&nbsp;
              <Circle text='Apple' src={CircleApple} width='100' left='8' />
            </p>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <p>
                Driven by the creative and aspiring UI & UX designers out there,<br />Mockup builds an exclusive
                sketching experience on iOS, iPadOS,<br />and even macOS. Its presence on Apple platforms is dedicated
                to<br />bring your rich sketches and innovative projects to life.
              </p>
            </div>
          </div>
        : <div>
            <p style={{ fontSize: '30px', marginBottom: '10px' }}>
              Built <Circle text='execlusively' src={CircleApple} width='200' top='-60' left='-7' /><br /> for&nbsp;
              <Underline text='Apple' src={UnderlineExclusively} width='90' bottom='-8' left='6' />
            </p>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <p>
                Driven by the creative and aspiring UI & UX<br />designers out there, Mockup builds an<br />exclusive
                sketching experience on iOS,<br />iPadOS, and even macOS. Its presence on<br />Apple platforms is dedicated
                to bring your<br />rich sketches and innovative projects to life.
              </p>
            </div>
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

  @media only screen and (max-width: 845px) {
    justify-content: space-between;
  }
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

  @media only screen and (max-width: 845px) {
    :nth-child(1), :nth-child(5) {
      width: 50px;
    }
  }

  @media only screen and (max-width: 775px) {
    :not(:nth-child(5)) {
      margin-right: 0;
    }

    :nth-child(1), :nth-child(5) {
      width: 30px;
    }
  }
`;

export default BuiltExclusively;