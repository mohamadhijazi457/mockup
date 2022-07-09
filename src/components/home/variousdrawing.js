import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import PngVarious from '../../images/drawing tools section.png'

const VariousDrawing = () => {
    return(
        <FirstContainer>
            <img src={PngVarious} width="1350px"/>
            <p style={{fontFamily: 'HelveticaNeue-Medium'}}>Various Drawing Tools<br/>at your fingertips</p>
        </FirstContainer>

    );

};
const FirstContainer = styled.div`
margin-bottom:30px;
`;

export default VariousDrawing;