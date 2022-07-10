import React from 'react';
import Navbar from '../common/navbar';
import Footer from '../common/footer';
import PoliciesPage from './policies_page';
import PoliciesPageMobile from './policies_page_mobile';
import PoliciesPageIpad from './policies_page_ipad';

const Policies = ({ screenWidth }) => {
  return (
    <>
      <Navbar />
      
      {screenWidth > 1025
      ? <div>
          <PoliciesPage />
        </div>
      : screenWidth <= 1025 && screenWidth > 964
      ? <div>
          <PoliciesPageIpad/>
        </div>
      : <div>
        <PoliciesPageMobile/>
          
        </div>}
      <Footer screenWidth={screenWidth} />
    </>
  );
};

export default Policies;