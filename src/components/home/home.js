import React, { useEffect, useState } from 'react';
import FirstPage from './firstpage';
import Navbar from '../common/navbar';
import Footer from '../common/footer';
import BuiltExclusively from './built_exclusively';
import JoinUs from './join_us';
import DarkLightModes from './dark_light_modes';
import DiverseTemplates from './diversetemplates';
import ExportOptions from './export_options';
import ICloudSync from './iCloud_sync';
import ShareExperience from './share_experience';
import FirstPageMobile from './firstpagemobile';
import FirstPageIpad from './firstpageipad';

const Home = () => {
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
    <>
      <Navbar />
      <div>
      {
        screenWidth > 1025
        ? <div>
            <FirstPage />
          </div>
        : screenWidth <= 1025 && screenWidth > 600
        ? <div>
          <FirstPageIpad/>
          </div>
        : <FirstPageMobile/>
         
        
      };
      
      
    </div>
      <DiverseTemplates />
      <ICloudSync />
      <ExportOptions />
      <DarkLightModes />
      <ShareExperience />
      <BuiltExclusively />
      <JoinUs />
      <Footer />
    </>
  );
};

export default Home;