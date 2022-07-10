import React, { useEffect, useState } from 'react';
import Styled from 'styled-components';
import RightSideImg from '../../images/elements right ipad.png';
import LeftSideImg from '../../images/bottom list.png';
import CircleElements from '../../images/circle elements.svg';
import UnderlineSketching from '../../images/underline sketching.svg';
import Circle from '../common/circle';
import Underline from '../common/underline';

const ElementsSketchingIpad = () => {
    return(
        <FirstContainer>
            <Right>
            <img src={RightSideImg} alt='RightSide_png' style={{width:"1020px", height:"300px",paddingTop:"30x"}}/>
            </Right>
            <Left>
                <Text>
                    <p style={{fontFamily:"HelveticaNeue-Medium", fontSize:"34px",paddingLeft:"5px",textAlign:"center",paddingBottom:"40px",paddingTop:"70px"}}>
											Premium <Circle text='Elements' src={CircleElements} width='160' top='-2' /><br/>
											for sleek <Underline text='Sketching' src={UnderlineSketching} width='160' bottom='-14' left='5' /></p>
                    <p style={{fontFamily:"HelvaticaNeue-Regular", fontSize:"20px",paddingLeft:"25px",paddingBottom:"45px",textAlign:"center"}}>
With elements involved in the mix, you can focus on your ideas<br/>
while delivering clean, consistent sketches, ready to be rendered.<br/>
Mockup comes with 28 pre-existing elements in the Mockup<br/>
Element Set. You can also create your own elements, save and<br/>
reuse them to your convenience.
</p>
                </Text>
                <LeftSidedImg>
                <img src={LeftSideImg} alt='LeftSide_png'style={{width:"690px", height:"268px",paddingLeft:"200px"}}/>
                </LeftSidedImg>
            </Left>
            
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
export default ElementsSketchingIpad;
