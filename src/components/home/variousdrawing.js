import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import PngVarious from '../../images/drawing tools section.png'
import PngVariousMobile from '../../images/drawing tools section ipad.png';

const VariousDrawing = ({ screenWidth }) => {
    return(
        <FirstContainer>
            <FlexingContainer>
						{screenWidth > 1025
						? <div>
								<Image src={PngVarious} />
								<Text left='39' top='22'>Various Drawing Tools<br/>at your fingertips</Text>
							</div>
						: screenWidth <= 1025 && screenWidth > 964
						? <div>
								<Image src={PngVariousMobile} height='1200px' />
								<Text left='33' top='28'>Various Drawing Tools<br/>at your fingertips</Text>
							</div>
						: <div>
								<Image src={PngVariousMobile} height='750px' />
								<Text left='28' top='28' style={{ fontSize: '20px' }}>Various Drawing Tools<br/>at your fingertips</Text>
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