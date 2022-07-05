import React, { useEffect, useState } from 'react';
import Styled from 'styled-components';
import FeaturedOnAppStore from '../images/Featured on App Store.svg';
import DownloadApp from '../images/Download on the App Store button.svg';
import IpadImg from '../images/iPad Pro 11 - Space Gray - Landscape.svg';
import PenImg from '../images/apple pencil.svg';

const FirstPage = () => {
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
        <ContainerOne> 
            <FirstHeading className="h1"><p>Sketch out your UI/UX <br></br>projects without paper</p></FirstHeading>
            <MockupDescription className="desc"><p>Mockup redefines the entire process of sketching UI & UX projects <br/>for iOS. With the extensive collection of tools and features that<br/> Mockup provides, it’s the ideal app for brainstorming and planning <br/>your next app and web design.</p></MockupDescription>
          <ImgsContainer>
          <img src={FeaturedOnAppStore} width='90' height='45'  alt='FeaturedOnAppStore_png' style={{ paddingRight:"20px", paddingTop:"20px" }} />
          <a href='https://apps.apple.com/app/mockup-sketch-ui-ux/id1527554407' target='blank'>
          <img src={DownloadApp} width='90' height='45' alt='DownloadApp_png' style={{ paddingTop:"23px" }} />
          </a>
          </ImgsContainer>
          <IpadImgContainer>
            <img src={IpadImg}  alt='IpadeImage_png' style={{width:"900px" ,height:"550px", paddingLeft:"310px" }}/>
            <img src={PenImg}  alt='PenImage_png' style={{width:"730px" ,height:"510px", paddingRight:"180px" }}/>
          </IpadImgContainer>
          
          
        </ContainerOne>
       
        
       
        );
      };
      const ContainerOne =Styled.div`
      justify-content: center;
      align-items: center;
      `;
      const FirstHeading = Styled.div`
      justify-content: center;
      align-items: center;
      text-align:center;
      flex-direction:column;
      font-family:HelveticaNeue-Medium;
      padding: 50px 100px;
      padding-Bottom:20px;
      font-size:30px;
      `;
      const MockupDescription = Styled.div`
      justify-content: center;
      align-items: center;
      text-align:center;
      flex-direction:column;
      font-family:HelveticaNeue-Regular;
      padding-bottom:5px;
      font-size:15px;
      `;
      
      const ImgsContainer=Styled.div`
      display:flex;
      justify-content: center;
      flex-direction:row;
      align-items: center;
      paddingTop:'300px'
      
      `;
      const IpadImgContainer=Styled.div`
      display:flex;
      justify-content: center;
      flex-direction:row;
      align-items: center;
      `;
      /*const GreyBackground=Styled.div`
      background-color:#f1f1f6;
      display:flex;
      justify-content:space-between;
      margin-top: 50px;
      padding: 350px 0 90px 0;
      `;*/
      
      
      export default FirstPage;
      