import React from 'react';
import Navbar from '../common/navbar';
import Footer from '../common/footer';
import PoliciesPage from './policies_page';

const Policies = ({ screenWidth }) => {
  return (
    <>
      <Navbar />
      <PoliciesPage />
      <Footer screenWidth={screenWidth} />
    </>
  );
};

export default Policies;