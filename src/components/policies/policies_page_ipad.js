import React from 'react';
import styled from 'styled-components';
import CircleSketchOut from '../../images/circle mockup2.svg';
import UnderlinePaper from '../../images/underline policies.svg';
import Circle from '../common/circle';
import Underline from '../common/underline';

const PoliciesPageIpad = () => {
  return (
    <Container>
      <p style={{fontFamily:"HelveticaNeue-Medium" ,fontSize:"34px", textAlign: 'center'}}>
        <Circle text='Mockup' src={CircleSketchOut} width='160' top='-2' left='-12'  />
        <Underline text='Policies' src={UnderlinePaper} width='140' bottom='-20' left='-2' />
      </p>
             
      <FirstContainer>
        <p style={{fontFamily:"HelveticaNeue-Medium" ,fontSize:"34px",marginTop:"60px"}}>Terms of Services</p>
        <TextOne>
        <p style={{fontFamily:"HelveticaNeue-Regular" ,fontSize:"20px",paddingTop:"15px"}}>
        Mockup provides three free sketches for trial.<br/>
        The app can be unlocked with lifetime purchase<br/>
        or a yearly subscription.<br/>
        All payments handled by Apple, such as in-app<br/>
        purchases, can only be refunded by Apple and<br/>
        with Apple’s consent.<br/>
        Please contact Apple for help with refunds. </p>
        <p style={{fontFamily:"HelveticaNeue-Regular" ,fontSize:"20px",paddingTop:"60px"}}>
        Subscription automatically renews and will be<br/>
        charged for the renewal unless auto-renew is<br/>
        turned off at least 24 hours before the end of the<br/>
        current period.<br/>
        Payment will be charged to iTunes Account at<br/>
        confirmation of purchase.<br/>
        The duration and price of each subscription is<br/>
        displayed on the purchase screen, and updated<br/>
        at the time of purchase.</p>
        </TextOne>
      </FirstContainer>
      <SecondContainer>
        <p style={{fontFamily:"HelveticaNeue-Medium" ,fontSize:"34px",marginTop:"50px",paddingTop:"30px"}}>Privacy Policy</p>
        <TextTwo>
        <p style={{fontFamily:"HelveticaNeue-Regular" ,fontSize:"20px"}}>
        The app does not collect or store any personal<br/>
        data. All the user generated data is stored locally<br/>
        on device and on Apple’s iCloud. </p>
        <p style={{fontFamily:"HelveticaNeue-Regular" ,fontSize:"20px",paddingTop:"40px",fontColor:"black"}}>Analytics:<br/> 
        Links to privacy policy of third party service<br/>
        providers used by the app:<br/>
        <a href='https://firebase.google.com/policies/analytics' target='blank' style={{color:'black'}}><u><b>Google Analytics for Firebase<br/>
        Firebase Crashlytics
        </b></u></a>
        </p>
        </TextTwo>
        <TextThree>
        <p style={{fontFamily:"HelveticaNeue-Medium" ,fontSize:"34px",marginTop:"50px",paddingTop:"30px"}}>Contact</p>
        <p style={{fontFamily:"HelveticaNeue-Regular" ,fontSize:"20px",paddingTop:"30px"}}>If you have any questions please <a href='mailto:contact@getmockup.app?' target='blank' style={{color:'black'}}><u><b>get in touch</b></u></a>

        </p>
        </TextThree>
      </SecondContainer>
    </Container>
  );
};
const Container = styled.div`
  justify-content: center;
  align-items: center;  
  padding: 80px 100px 80px 100px;
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

export default PoliciesPageIpad;