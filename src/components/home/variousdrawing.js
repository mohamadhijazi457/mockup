import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import PngVarious from '../../images/drawing tools section.png'

const VariousDrawing = () => {
    return(
        <FirstContainer>
            <FlexingContainer>
            <img src={PngVarious} width="1350px"/>
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

export default VariousDrawing;