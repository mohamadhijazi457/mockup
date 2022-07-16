import React from 'react';
import styled from 'styled-components';
import CircleSketchOut from '../../images/circle mockup2.svg';
import UnderlinePaper from '../../images/underline policies.svg';
import Circle from '../common/circle';
import Underline from '../common/underline';

const PoliciesPage = () => {
  return (
    <Container>
      <p style={{fontSize:"34px", textAlign: "center"}}>
        <Circle text='Mockup ' src={CircleSketchOut} width='160' top='-2' left='-12'  />
        <Underline text='Policies' src={UnderlinePaper} width='140' bottom='-20' left='-2' />
      </p>
      <FirstContainer>
        <p style={{fontSize:"34px",marginTop:"50px"}}>Terms of Services</p>
        <TextOne>
        <p style={{fontSize:"20px",marginTop:"15px"}}>Mockup provides three free sketches for trial. The app can be<br/>
        unlocked with lifetime purchase or a yearly subscription.<br/>
        All payments handled by Apple, such as in-app purchases, can<br/>
        only be refunded by Apple and with Apple’s consent.<br/>
        Please contact Apple for help with refunds. </p>
        <p style={{fontSize:"20px",paddingTop:"40px"}}>Subscription automatically renews and will be charged for the renewal<br/>
        unless auto-renew is turned off at least 24 hours before the end of the<br/>
        current period.<br/>
        Payment will be charged to iTunes Account at confirmation of purchase.<br/>
        The duration and price of each subscription is displayed on the purchase<br/>
        screen, and updated at the time of purchase.</p>
        </TextOne>
      </FirstContainer>
      <SecondContainer>
        <p style={{fontSize:"34px",marginTop:"50px",paddingTop:"30px"}}>Privacy Policy</p>
        <TextTwo>
        <p style={{fontSize:"20px"}}>The app does not collect or store any personal data. All the user<br/>
        generated data is stored locally on device and on Apple’s iCloud. </p>
        <p style={{fontSize:"20px",paddingTop:"40px",fontColor:"black"}}>Analytics:<br/> 
        Links to privacy policy of third party service providers used by the app:<br/>
        <a href='https://firebase.google.com/policies/analytics' target='blank' style={{color:'black'}}><u><b>Google Analytics for Firebase<br/>
        Firebase Crashlytics
        </b></u></a>
        </p>
        </TextTwo>
        <TextThree>
        <p style={{fontSize:"34px",marginTop:"50px", paddingTop:"30px"}}>Contact</p>
        <p style={{fontSize:"20px",paddingTop:"30px"}}>If you have any questions please <a href='mailto:contact@getmockup.app?' target='blank' style={{color:'black'}}><u><b>get in touch</b></u></a>

        </p>
        </TextThree>
      </SecondContainer>
    </Container>
  );
};
const Container = styled.div`
  justify-content: center;
  align-items: center;  
  padding: 80px 200px 80px 200px;
`;
const TextOne = styled.div`
  display: flex;
	align-items: center;
	justify-content: space-between;
`;
const FirstContainer = styled.div`

`;
const SecondContainer = styled.div`
`;
const TextTwo = styled.div`
  display: flex;
	align-items: center;
	justify-content: space-between;
`;
const TextThree = styled.div`
	align-items: column;
  margin-bottom:20px;
`;

export default PoliciesPage;