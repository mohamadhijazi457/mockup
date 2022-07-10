import React from 'react';
import Navbar from '../common/navbar';
import Footer from '../common/footer';
import SupportPage from './support_page';

const Support = ({ screenWidth }) => {
  return (
    <>
      <Navbar />
      <SupportPage />
      <Footer screenWidth={screenWidth} />
    </>
  );
};

export default Support;