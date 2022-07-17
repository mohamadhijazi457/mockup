import React from 'react';
import styled from 'styled-components';
import FeaturedOnAppStore from '../../images/Featured on App Store.svg';
import DownloadApp from '../../images/Download on the App Store button.svg';
import IpadImg from '../../images/iPad Pro 11 - Space Gray - Landscape.svg';
import PenImg from '../../images/apple pencil.svg';
import CircleSketchOut from '../../images/circle sketch out.svg';
import UnderlinePaper from '../../images/underline without paper.svg';
import Circle from '../common/circle';
import Underline from '../common/underline';

const FirstPage = () => {
  return (
    <ContainerOne>
      <FirstHeading className="h1"><p style={{ fontSize: "34px" }}>
        <Circle text='Sketch out' src={CircleSketchOut} width='210' top='-2' left='-12' /> your UI/UX <br></br>
        projects <Underline text='without paper' src={UnderlinePaper} width='240' bottom='-20' left='-2' /></p></FirstHeading>
      <MockupDescription className="desc">
        <p>Mockup redefines the entire process of sketching UI & UX projects <br/>for iOS. With the extensive collection
          of tools and features that<br/> Mockup provides, it’s the ideal app for brainstorming and planning <br/>
          your next app and web design.</p>
      </MockupDescription>
      <ImgsContainer>
        <img src={FeaturedOnAppStore} width='90' height='45'  alt='FeaturedOnAppStore_png'
          style={{ paddingRight:"20px", paddingTop:"20px" }} />
        <a href='https://apps.apple.com/app/mockup-sketch-ui-ux/id1527554407' target='blank'>
        <img src={DownloadApp} width='90' height='45' alt='DownloadApp_png' style={{ paddingTop:"23px" }} />
        </a>
      </ImgsContainer>
      <IpadImgContainer>
        <div><img src={IpadImg} alt='IpadeImage_png' style={{ width: '100%' }} /></div>
        <div style={{ marginLeft: '30px' }}><img src={PenImg} alt='PenImage_png' style={{ width: '100%' }} /></div>
      </IpadImgContainer>
    </ContainerOne>
  );
};

const ContainerOne = styled.div`
  justify-content: center;
  align-items: center;
  padding-top: 70px;
`;

const FirstHeading = styled.div`
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

const ImgsContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
  align-items: center;
  paddingTop: 300px;
`;

const IpadImgContainer = styled.div`
  display:flex;
  justify-content: center;
  flex-direction:row;
  align-items: center;
  width: 100%;
`;

export default FirstPage;
      