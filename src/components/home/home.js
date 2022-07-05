import React from 'react';
import FirstPage from './firstpage';
import Navbar from '../common/navbar';
import Footer from '../common/footer';
import BuiltExclusively from './built_exclusively';
import JoinUs from './join_us';
import DarkLightModes from './dark_light_modes';
import ExportOptions from './export_options';

const Home = () => {
  return (
    <>
      <Navbar />
      <FirstPage />
      <ExportOptions />
      <DarkLightModes />
      <BuiltExclusively />
      <JoinUs />
      <Footer />
    </>
  );
}

export default Home;