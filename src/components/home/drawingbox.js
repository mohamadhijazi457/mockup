import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import DrawBox from '../../images/text insertion section.png';

const DrawingBox = ({ screenWidth })=> {
    return (
        <FirstContainer>
            <div>
                
                
                    <img src={DrawBox} style={{paddingLeft:"330px",paddingTop:"50px"}} width="708px"height="288"/>
                    <p style={{textAlign:"center",fontSize:'20px',fontFamily:'HelveticaNeue-Regular'}}>
                    Do you want your overall sketch to be poised and stylish? Text<br/>
                    insertion headlines the show and keeps everything neat and well-<br/>
                    organized for you, whether you want to take notes and add some <br/>
                     annotations, or the text is actually a part of your sketch.
                    </p>
                  </div>
                  :<div>


                
            </div>

        </FirstContainer>

    );
};
const FirstContainer = styled.div`
`;
export default DrawingBox;