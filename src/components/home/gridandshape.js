import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import PngGrid from '../../images/grid and shape detection section.png'

const GridAndShape = () => {
    return(
        <FirstContainer>
            <img src={PngGrid} width="1350" height="600" style={{paddingBottom:"60px",paddingTop:"60px"}}/>
        </FirstContainer>

    );
};
const FirstContainer = styled.div`
`;
export default GridAndShape;