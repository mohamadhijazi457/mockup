import React, { useEffect, useState } from 'react';
import Styled from 'styled-components';
import FeaturedOnAppStore from '../../images/FeaturedonAppStore.png';
import DownloadApp from '../../images/DownloadontheAppStorebutton.png';
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
            <MockupDescription className="desc"><p>Mockup redefines the entire process of sketching UI & UX projects <br></br>for iOS. With the extensive collection of tools and features that<br></br> Mockup provides, it’s the ideal app for brainstorming and planning <br></br>your next app and web design.</p></MockupDescription>
            <ImgContainer>
            <FeatureApp className="feature"><img src={FeaturedOnAppStore}/></FeatureApp>
            <OwnApp className="Download"><img src={DownloadApp}/></OwnApp>
            </ImgContainer>
        </ContainerOne>
       
        
       
        );
      };
      const ContainerOne =Styled.div`
      justify-content: center;
      align-items: center;
      `
      const FirstHeading = Styled.div`
      justify-content: center;
      align-items: center;
      text-align:center;
      flex-direction:column;
      font-family:HelveticaNeue-Medium;
      padding: 50px 100px;
      padding-Bottom:25px;
      font-size:35px;
      `
      const MockupDescription = Styled.div`
      justify-content: center;
      align-items: center;
      text-align:center;
      flex-direction:column;
      font-family:HelveticaNeue-Regular;
      padding-bottom:5px;
      font-size:15px;
      `
      const ImgContainer=Styled.div`
      display:flex;
      justify-content: center;
      align-items: center;
      
      
      `

      const FeatureApp= Styled.div`
      padding-top:25px;
      padding-right:12px;

      `

      const OwnApp = Styled.div`
      padding-top:25px;
      padding-left:12px;

      `
      
      export default FirstPage;
      