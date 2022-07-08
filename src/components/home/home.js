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
import Canvas from './canvas';

const Home = ({ screenWidth }) => {
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
      <Canvas/>
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