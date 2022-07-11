import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import PngVarious from '../../images/drawing tools section.png'
import PngVariousMobile from '../../images/drawing tools section ipad.png';
import CircleDrawing from '../../images/circle drawing tools.svg';
import UnderlineFingerprint from '../../images/underline at your fingertps.svg';
import Circle from '../common/circle';
import Underline from '../common/underline';

const VariousDrawing = ({ screenWidth }) => {
    return(
        <FirstContainer>
            <FlexingContainer>
						{screenWidth > 1025
						? <div>
								<Image src={PngVarious} />
								<Text left='39' top='22'>Various <Circle text='Drawing Tools' src={CircleDrawing} width='250' left='-4' /><br/>
									<Underline text='at your fingertips' src={UnderlineFingerprint} width='300' bottom='-18' left='-5' /></Text>
							</div>
						: screenWidth <= 1025 && screenWidth > 964
						? <div>
								<Image src={PngVariousMobile} height='1200px' />
								<Text left='33' top='28'>Various <Circle text='Drawing Tools' src={CircleDrawing} width='250' left='-4' /><br/>
									<Underline text='at your fingertips' src={UnderlineFingerprint} width='300' bottom='-18' left='-5' /></Text>
							</div>
						: <div>
								<Image src={PngVariousMobile} height='500px' />
								<Text left='28' top='28' style={{ fontSize: '20px' }}>Various <Circle text='Drawing' src={CircleDrawing} width='100' top='25' left='-6' /> Tools<br/>
									at your <Underline text='fingertips' src={UnderlineFingerprint} width='90' bottom='-18' /></Text>
							</div>}
            </FlexingContainer>
        </FirstContainer>
    );
};

const FirstContainer = styled.div`
	margin-bottom:30px;
`;

const FlexingContainer = styled.div`
	position: relative;
	top: 0;
	left: 0;
`;

const Image = styled.img`
	position: relative;
	top: 0;
	left: 0;
	width: 100%;
`;

const Text = styled.p`
	font-family: HelveticaNeue-Medium;
	position: absolute;
	top: ${props => props.top || '0'}%;
	left: ${props => props.left || '0'}%;
	font-size: 34px;
	text-align: center;
`;

export default VariousDrawing;