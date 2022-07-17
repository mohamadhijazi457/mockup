import React from 'react';
import styled from 'styled-components';
import FeaturedOnAppStore from '../../images/Featured on App Store.svg';
import DownloadApp from '../../images/Download on the App Store button.svg';
import IpadResponsive from '../../images/Light iPad.png';
import PenResponsive from '../../images/apple pencil ipad.png';
import CircleSketchOut from '../../images/circle sketch out.svg';
import UnderlinePaper from '../../images/underline without paper.svg';
import Circle from '../common/circle';
import Underline from '../common/underline';

const FirstPageIpad = () => {
  return(
    <ContainerOneMobile>
      <FirstHeading className="h1"><p style={{ fontSize: "34px" }}>
        <Circle text='Sketch out' src={CircleSketchOut} width='210' top='-2' left='-12' /> your UI/UX <br></br>
        projects <Underline text='without paper' src={UnderlinePaper} width='240' bottom='-20' left='-2' /></p></FirstHeading>
      <MockupDescription className="desc">
        <p>Mockup redefines the entire process of sketching UI & UX projects <br/>for iOS. With the extensive collection
          of tools and features that<br/> Mockup provides, it’s the ideal app for brainstorming and planning <br/>
          your next app and web design.</p>
      </MockupDescription>
      <ImgsMobile>
        <img src={FeaturedOnAppStore} width='75' height='40'  alt='FeaturedOnAppStore1_png'
          style={{ paddingRight:"20px", paddingTop:"20px" }} />
        <a href='https://apps.apple.com/app/mockup-sketch-ui-ux/id1527554407' target='blank'>
        <img src={DownloadApp} width='75' height='40' alt='DownloadApp1_png' style={{ paddingTop:"23px" }} />
        </a>
      </ImgsMobile>
      <IpadImgContainer>
        <div style={{ textAlign: 'center' }}><img src={PenResponsive}  alt='PenImageMobile_png' style={{ width: '60%' }}/></div>
        <div><img src={IpadResponsive}  alt='IpadeImageMobile_png' style={{ width: '100%' }}/></div>
      </IpadImgContainer>
    </ContainerOneMobile>
  );
};

const ContainerOneMobile = styled.div`
  justify-content: center;
  align-items: center;
  padding-top: 70px;
`;

const FirstHeading=styled.div`
  justify-content: center;
  align-items: center;
  text-align: center;
  flex-direction: column;
  padding: 50px 100px;
  padding-Bottom: 20px;
`;

const MockupDescription = styled.div`
  justify-content: center;
  align-items: center;
  text-align: center;
  flex-direction: column;
  padding-bottom: 5px;
`;

const ImgsMobile =styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
  align-items: center;
  paddingTop: 300px
`;

const IpadImgContainer = styled.div`
  width: 100%;
`;
    
export default FirstPageIpad;
