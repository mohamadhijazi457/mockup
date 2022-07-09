import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import DrawBox from '../../images/text insertion section.png';

const DrawingBoxPhone = ({ screenWidth })=> {
    return (
        <FirstContainer>
            <img src={DrawBox} style={{paddingLeft:"20px",paddingTop:"50px",paddingBottom:"20px"}} width="350px"height="200"/>
            <p style={{textAlign:"center",fontSize:'20px',fontFamily:'HelveticaNeue-Regular',paddingBottom:'30px'}}>
                Do you want your overall sketch to be<br/>
                poised and stylish? Text insertion<br/>
                headlines the show and keeps everything<br/>
                neat and well-organized for you, whether<br/>
                you want to take notes and add some <br/>
                annotations, or the text is actually a part<br/>
                of your sketch.
            </p>


                

        </FirstContainer>

    );
};
const FirstContainer = styled.div`
`;
export default DrawingBoxPhone;