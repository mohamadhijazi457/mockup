import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import PngGrid from '../../images/grid and shape detection section ipad.png'

const GridAndShapeIpad = () => {
    return(
        <FirstContainer>
            <img src={PngGrid} width="1020" height="1500" style={{paddingBottom:"60px",paddingTop:"60px"}}/>
        </FirstContainer>

    );
};
const FirstContainer = styled.div`
`;
export default GridAndShapeIpad;