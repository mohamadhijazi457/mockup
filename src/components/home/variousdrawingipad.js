import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import PngVarious from '../../images/drawing tools section ipad.png'

const VariousDrawingIpad = () => {
    return(
        <FirstContainer>
            <FlexingContainer>
            <img src={PngVarious} width="1020px" height="1200px"/>
            <p style={{fontFamily: 'HelveticaNeue-Medium'}}>Various Drawing Tools<br/>at your fingertips</p>
            </FlexingContainer>
        </FirstContainer>

    );

};
const FirstContainer = styled.div`
margin-bottom:30px;
`;
const FlexingContainer = styled.div`
`;

export default VariousDrawingIpad;