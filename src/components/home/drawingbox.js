import React from 'react';
import styled from 'styled-components';
import DrawBox from '../../images/text insertion section.png';

const DrawingBox = ({ screenWidth })=> {
    return (
        <FirstContainer>
            <div>
                
                
                    <img src={DrawBox} width="708px" height="288" alt="draw_box_img" />
                    <p style={{textAlign:"center",fontFamily:'HelveticaNeue-Regular'}}>
                    Do you want your overall sketch to be poised and stylish? Text<br/>
                    insertion headlines the show and keeps everything neat and well-<br/>
                    organized for you, whether you want to take notes and add some <br/>
                     annotations, or the text is actually a part of your sketch.
                    </p>
                  </div>
                  <div>


                
            </div>

        </FirstContainer>

    );
};
const FirstContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 50px 0 50px 0;
`;
export default DrawingBox;