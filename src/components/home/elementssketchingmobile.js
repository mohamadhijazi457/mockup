import React, { useEffect, useState } from 'react';
import Styled from 'styled-components';
import RightSideImg from '../../images/elements right.png';
import LeftSideImg from '../../images/bottom list.png';

const ElementsSketchingMobile = () => {
    return(
        <FirstContainer>
            <Left>
                <Text>
                    <h1 style={{fontFamily:"HelveticaNeue-Medium.ttf", fontSize:"32px",paddingLeft:"5px",textAlign:"center",paddingBottom:"40px",paddingTop:"70px"}}>Premium Elements<br/>for sleek sketching</h1>
                    <p style={{fontFamily:"HelvaticaNeue-Regular.ttf", fontSize:"12px",paddingLeft:"50px",paddingBottom:"20px"}}>
With elements involved in the mix, you can focus on your ideas<br/>
while delivering clean, consistent sketches, ready to be rendered.<br/>
Mockup comes with 28 pre-existing elements in the Mockup<br/>
Element Set. You can also create your own elements, save and <br/>
reuse them to your convenience.
</p>
                </Text>
                <LeftSidedImg>
                <img src={LeftSideImg} alt='LeftSide_png'style={{width:"300px", height:"150px",paddingLeft:"55px"}}/>
                </LeftSidedImg>
            </Left>
            <Right>
            <img src={RightSideImg} alt='RightSide_png' style={{width:"200px", height:"300px",paddingLeft:"80px"}}/>

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
