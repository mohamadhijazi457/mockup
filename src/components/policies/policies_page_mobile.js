import React from 'react';
import styled from 'styled-components';
import CircleSketchOut from '../../images/circle mockup2.svg';
import UnderlinePaper from '../../images/underline policies.svg';
import Circle from '../common/circle';
import Underline from '../common/underline';

const PoliciesPage = () => {
  return (
    <Container>
      <p style={{fontSize:"34px",textAlign: "center"}}>
        <Circle text='Mockup ' src={CircleSketchOut} width='160' top='-2' left='-12'  />
        <Underline text='Policies' src={UnderlinePaper} width='140' bottom='-20' left='-2' />
      </p>
             
      <FirstContainer>
        <p style={{fontSize:"34px",marginTop:"50px"}}>Terms of Services</p>
        <TextOne>
        <p style={{fontSize:"20px",marginTop:"15px"}}>
        Mockup provides three free sketches for<br/>
        trial. The app can be unlocked with<br/>
        lifetime purchase or a yearly subscription.<br/>
        All payments handled by Apple, such as<br/>
        in-app purchases, can only be refunded<br/>
        by Apple and with Apple’s consent.<br/> 
        Please contact Apple for help with<br/>
        refunds. 
        </p>
        <p style={{fontSize:"20px",paddingTop:"20px"}}>
        Subscription automatically renews and<br/>
        will be charged for the renewal unless<br/>
        auto-renew is turned off at least 24 hours<br/>
        before the end of the current period.<br/>
        Payment will be charged to iTunes<br/>
        Account at confirmation of purchase.<br/>
        The duration and price of each<br/>
        subscription is displayed on the purchase<br/>
        screen, and updated at the time of<br/>
        purchase.</p>
        </TextOne>
      </FirstContainer>
      <SecondContainer>
        <p style={{fontSize:"34px",marginTop:"30px",paddingTop:"30px"}}>Privacy Policy</p>
        <TextTwo>
        <p style={{fontSize:"20px",marginTop:"20px"}}>
        The app does not collect or store any<br/>
        personal data. All the user generated data<br/>
        is stored locally on device and on Apple’s<br/>
        iCloud. 
          </p>
        <p style={{fontSize:"20px",paddingTop:"20px",fontColor:"black"}}>Analytics:<br/> 
        Links to privacy policy of third party<br/>
        service providers used by the app:<br/>
        <a href='https://firebase.google.com/policies/analytics' target='blank' style={{color:'black'}}><u><b>Google Analytics for Firebase<br/>
        Firebase Crashlytics
        </b></u></a>
        </p>
        </TextTwo>
        <TextThree>
        <p style={{fontSize:"34px",marginTop:"40px",paddingTop:"30px"}}>Contact</p>
        <p style={{fontSize:"20px",paddingTop:"20px"}}>If you have any questions please<br/><a href='mailto:contact@getmockup.app?' target='blank' style={{color:'black'}}><u><b>get in touch</b></u></a>

        </p>
        </TextThree>
      </SecondContainer>
    </Container>
  );
};
const Container = styled.div`
  justify-content: center;
  align-items: center;
  padding: 50px 30px 50px 30px;
`;
const TextOne = styled.div`
	align-items: center;
`;
const FirstContainer = styled.div`

`;
const SecondContainer = styled.div`

`;
const TextTwo = styled.div`
	align-items: center;
`;
const TextThree = styled.div`
	align-items: column;
    margin-bottom:20px;
`;

export default PoliciesPage;