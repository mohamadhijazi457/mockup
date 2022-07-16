import React from 'react';
import Styled from 'styled-components';
import RightSideImg from '../../images/elements right.png';
import LeftSideImg from '../../images/bottom list.png';
import CircleElements from '../../images/circle elements.svg';
import UnderlineSketching from '../../images/underline sketching.svg';
import Circle from '../common/circle';
import Underline from '../common/underline';

const ElementsSketching = () => {
    return(
        <FirstContainer>
            <Left>
                <Text>
                    <p style={{fontSize:"34px",paddingBottom:"15px"}}>
											Premium <Circle text='Elements' src={CircleElements} width='160' top='-2' /><br/>
											for sleek <Underline text='Sketching' src={UnderlineSketching} width='160' bottom='-14' left='5' /></p>
                    <p style={{fontSize:"20px"}}>
With elements involved in the mix, you can focus on your ideas<br/>
while delivering clean, consistent sketches, ready to be rendered.<br/>
Mockup comes with 28 pre-existing elements in the Mockup<br/>
Element Set. You can also create your own elements, save and <br/>
reuse them to your convenience.
</p>
                </Text>
                <LeftSidedImg>
                <img src={LeftSideImg} alt='LeftSide_png' style={{width:"450px", height:"250px"}}/>
                </LeftSidedImg>
            </Left>
            <Right>
            <img src={RightSideImg} alt='RightSide_png' style={{width:"350px", height:"500px"}}/>

            </Right>
            
        </FirstContainer>
    );

};
const FirstContainer = Styled.div`
        display:flex;
        justify-content: space-between;
        background-color:#f1f1f6;
        margin-top: 50px;
        text-align:start;
        padding: 70px 0 80px 0;
`;
const Text = Styled.div`
padding-left:80px;
padding-bottom:50px;

`;
const Left = Styled.div`
padding-left:100px;
`;
const LeftSidedImg = Styled.div`
padding-left:50px;
`;
const Right = Styled.div`
`;
export default ElementsSketching;

