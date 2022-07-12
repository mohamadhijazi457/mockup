import React from 'react';
import styled from 'styled-components';
import FeaturedOnAppStore from '../../images/Featured on App Store.svg';
import DownloadApp from '../../images/Download on the App Store button.svg';
import IpadResponsive from '../../images/Light iPad cropped.png';
import PenResponsive from '../../images/apple pencil mobile.png';
import CircleSketchOut from '../../images/circle sketch out.svg';
import UnderlinePaper from '../../images/underline without paper.svg';
import Circle from '../common/circle';
import Underline from '../common/underline';

const FirstPageMobile = () => {
  return(
    <ContainerOneMobile>
      <FirstHeading className="h1"><p style={{ fontSize: "34px" }}>
        <Circle text='Sketch out your' src={CircleSketchOut} width='230' /> UI/<br/>
        UX projects without<br /> 
        <Underline text='paper' src={UnderlinePaper} width='240' bottom='-40' left='-80' /></p></FirstHeading>
      <MockupDescription className="desc">
        <p>Mockup redefines the entire process of <br/>sketching UI & UX projects for iOS. With <br/>
        the extensive collection of tools and <br/> features that Mockup provides, it’s the <br/>
        ideal app for brainstorming and planning <br/>your next app and web design.</p>
      </MockupDescription>
      <ImgsMobile>
      <img src={FeaturedOnAppStore} width='65' height='30'  alt='FeaturedOnAppStore1_png' style={{ paddingRight:"20px", paddingTop:"20px" }} />
        <a href='https://apps.apple.com/app/mockup-sketch-ui-ux/id1527554407' target='blank'>
        <img src={DownloadApp} width='65' height='30' alt='DownloadApp1_png' style={{ paddingTop:"23px" }} />
        </a>
      </ImgsMobile>
      <IpadImgContainer>
          <img src={PenResponsive}  alt='PenImageMobile_png' style={{ width:"230px" ,height:"20px", paddingLeft:"158px" }}/>
          <img src={IpadResponsive}  alt='IpadeImageMobile_png' style={{ width:"340px" ,height:"300px", paddingLeft:"48px" }}/>
      </IpadImgContainer>
    </ContainerOneMobile>
  );
};

const ContainerOneMobile = styled.div`
  justify-content: center;
  align-items: center;
`;

const FirstHeading=styled.div`
  justify-content: center;
  align-items: center;
  text-align: center;
  flex-direction: column;
  font-family: HelveticaNeue-Medium;
  padding-top: 50px;
  padding-Bottom: 20px;
`;

const MockupDescription = styled.div`
  justify-content: center;
  align-items: center;
  text-align: center;
  flex-direction: column;
  font-family: HelveticaNeue-Regular;
  padding-bottom: 5px;
`;

const ImgsMobile =styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
  align-items: center;
  paddingTop: 300px;
`;

const IpadImgContainer = styled.div`
  display: flex;
  justify-content: column;
  flex-direction: column;

  @media only screen and (max-width: 960px) {
    align-items: end;
  }
`;

export default FirstPageMobile;
