import React from 'react';
import FirstPage from './firstpage';
import Navbar from '../common/navbar';
import Footer from '../common/footer';
import BuiltExclusively from './built_exclusively';
import JoinUs from './join_us';
import DarkLightModes from './dark_light_modes';
import DiverseTemplates from './diversetemplates';
import ExportOptions from './export_options';
import ICloudSync from './iCloud_sync';

const Home = () => {
  return (
    <>
      <Navbar />
      <FirstPage />
      <DiverseTemplates />
      <ICloudSync />
      <ExportOptions />
      <DarkLightModes />
      <BuiltExclusively />
      <JoinUs />
      <Footer />
    </>
  );
}

export default Home;