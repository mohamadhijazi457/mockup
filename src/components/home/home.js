import React from 'react';
import FirstPage from './firstpage';
import Navbar from '../common/navbar';
import Footer from '../common/footer';
import BuiltExclusively from './built_exclusively';

const Home = () => {
  return (
    <>
      <Navbar />
      <FirstPage />
      <BuiltExclusively />
      <Footer />
    </>
  );
}

export default Home;