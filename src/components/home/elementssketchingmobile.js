import React, { useEffect, useState } from 'react';
import Styled from 'styled-components';
import RightSideImg from '../../images/elements right mobile.png';
import LeftSideImg from '../../images/bottom list.png';

const ElementsSketchingMobile = () => {
    return(
        <FirstContainer>
            <Left>
                <Text>
                    <p style={{fontFamily:"HelveticaNeue-Medium", fontSize:"34px",paddingLeft:"15px",textAlign:"center",paddingBottom:"40px",paddingTop:"70px"}}>Premium Elements<br/>for sleek sketching</p>
                    <p style={{fontFamily:"HelvaticaNeue-Regular", fontSize:"20px",paddingLeft:"15px",paddingBottom:"30px",textAlign:"center"}}>
With elements involved in the mix, you can<br/>
focus on your ideas while delivering <br/> 
clean, consistent sketches, ready to be <br/>
rendered. Mockup comes with 28 pre-<br/>
existing elements in the Mockup<br/>
Element Set. You can also create your<br/>
own elements, save and reuse them to <br/>
your convenience.
</p>
                </Text>
                <LeftSidedImg>
                <img src={LeftSideImg} alt='LeftSide_png'style={{width:"350px", height:"200px",paddingLeft:"35px"}}/>
                </LeftSidedImg>
            </Left>
            <Right>
            <img src={RightSideImg} alt='RightSide_png' style={{width:"388px", height:"300px",paddingTop:"30px"}}/>

            </Right>
            
        </FirstContainer>
    );

};
const FirstContainer = Styled.div`

        
`;
const Text = Styled.div`


`;
const Left = Styled.div`
`;
const LeftSidedImg = Styled.div`
`;
const Right = Styled.div`
`;
export default ElementsSketchingMobile;
