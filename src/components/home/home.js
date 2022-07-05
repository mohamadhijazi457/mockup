import React from 'react';
import FirstPage from './firstpage';
import Navbar from '../common/navbar';
import Footer from '../common/footer';
import BuiltExclusively from './built_exclusively';
import JoinUs from './join_us';

const Home = () => {
  return (
    <>
      <Navbar />
      <FirstPage />
      <BuiltExclusively />
      <JoinUs />
      <Footer />
    </>
  );
}

export default Home;