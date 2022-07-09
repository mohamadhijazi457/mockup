import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import FeaturedOnAppStore from '../../images/Featured on App Store.svg';
import DownloadApp from '../../images/Download on the App Store button.svg';
import IpadResponsive from '../../images/Light iPad.png';
import PenResponsive from '../../images/apple pencil ipad.png';


const FirstPageIpad = () => {
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

  return(
    <ContainerOneMobile>
        <FirstHeading className="h1"><p>Sketch out your UI/UX <br></br>projects without paper</p></FirstHeading>
            <MockupDescription className="desc"><p>Mockup redefines the entire process of sketching UI & UX projects <br/>for iOS. With the extensive collection of tools and features that<br/> Mockup provides, it’s the ideal app for brainstorming and planning <br/>your next app and web design.</p></MockupDescription>
          <ImgsMobile>
        <img src={FeaturedOnAppStore} width='75' height='40'  alt='FeaturedOnAppStore1_png' style={{ paddingRight:"20px", paddingTop:"20px" }} />
          <a href='https://apps.apple.com/app/mockup-sketch-ui-ux/id1527554407' target='blank'>
          <img src={DownloadApp} width='75' height='40' alt='DownloadApp1_png' style={{ paddingTop:"23px" }} />
          </a>
        </ImgsMobile>
        <IpadImgContainer>
            <img src={PenResponsive}  alt='PenImageMobile_png' style={{width:"400px" ,height:"20px",paddingLeft:"300px", paddingTop:"30px"}}/>
            <img src={IpadResponsive}  alt='IpadeImageMobile_png' style={{width:"924px" ,height:"669px",paddingLeft:"40px"}}/>
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
      text-align:center;
      flex-direction:column;
      font-family:HelveticaNeue-Medium.ttf;
      padding: 50px 100px;
      padding-Bottom:20px;
      font-size:30px;
     `;
     const MockupDescription = styled.div`
      justify-content: center;
      align-items: center;
      text-align:center;
      flex-direction:column;
      font-family:HelveticaNeue-Regular.ttf;
      padding-bottom:5px;
      font-size:15px;

     `;
     const ImgsMobile =styled.div`
      display:flex;
      justify-content: center;
      flex-direction:row;
      align-items: center;
      paddingTop:'300px'
      `;
      const IpadImgContainer = styled.div`

      `;
    
  export default FirstPageIpad;