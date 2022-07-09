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
import DiverseTemplatesMobile from './diversetemplatesmobile';
import CanvasMobile from './canvasmobile';
import CanvasIpad from './canvasipad';
import DiverseTemplatesIpad from './diversetemplatesipad';
import ElementsSketching from './elementssketching';
import ElementsSketchingMobile from './elementssketchingmobile';

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
        : screenWidth <= 1025 && screenWidth > 964
        ? <div>
          <FirstPageIpad/>
          </div>
        : <FirstPageMobile/>
         
        
      };
    </div>
    <div>
      {
        screenWidth > 1025
        ? <div>
            <DiverseTemplates />
          </div>
        : screenWidth <= 1025 && screenWidth > 964
        ? <div>
          <DiverseTemplatesIpad/>
          </div>
        : <DiverseTemplatesMobile/>

      };
    </div>      
    <div>
      {
        screenWidth >1025
        ? <div>
          <Canvas/>
          </div>
          : screenWidth <= 1025 && screenWidth > 964
          ? <div>
          <CanvasIpad/>
          </div>
          : <CanvasMobile/>
      };
    </div>
    <div>
      {
    screenWidth >1025
        ? <div>
          <ElementsSketching/>
          </div>
          : screenWidth <= 1025 && screenWidth > 964
          ? <div>

          </div>
          : <ElementsSketchingMobile/>
      };

    </div>
      <ICloudSync screenWidth={screenWidth} />
      <ExportOptions screenWidth={screenWidth} />
      <DarkLightModes screenWidth={screenWidth} />
      <ShareExperience screenWidth={screenWidth} />
      <BuiltExclusively screenWidth={screenWidth} />
      <JoinUs screenWidth={screenWidth} />
      <Footer screenWidth={screenWidth} />
    </>
  );
};

export default Home;