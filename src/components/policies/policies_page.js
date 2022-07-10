import React from 'react';
import styled from 'styled-components';

const PoliciesPage = () => {
  return (
    <Container>
      <h1 style={{fontFamily:"HelveticaNeue-Medium" ,fontSize:"34px",marginTop:"80px"}}>Mockup Policies</h1>
      <h1 style={{fontFamily:"HelveticaNeue-Regular" ,fontSize:"34px",marginLeft:"50px"}}></h1>
    </Container>
  );
};
const Container = styled.div`
  justify-content: center;
  align-items: center;  
  padding-left:550px;
`

export default PoliciesPage;