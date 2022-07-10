import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import leftSide from '../../images/left part.png';
import RightSide from '../../images/right part.png';
import CircleCanvas from '../../images/circle canvas.svg';
import UnderlineQuickActions from '../../images/underline quick actions.svg';
import Circle from '../common/circle';
import Underline from '../common/underline';

const Canvas = () => {
	return (
		<FirstContainer>
			<p style={{fontFamily:"HelveticaNeue-Medium", fontSize:"34px",paddingLeft:"1px",textAlign:"center",paddingBottom:"60px",paddingTop:"70px"}}>
				Flexible <Circle text='Canvas and' src={CircleCanvas} width='140' top='4' left='16' /> slick <br/>
				<Underline text='Quick Actions' src={UnderlineQuickActions} width='220' bottom='-24' left='20' /></p>
			<ImgsContainer>
				<img src={leftSide} alt='LeftSide_png' style={{width:"438.74px", height:"574.43px", paddingBottom:"45px"}} />
				<img src={RightSide} alt='RightSide_png' style={{width:"438.74px", height:"574.43px", paddingLeft:"30px",paddingBottom:"45px"}}/>
			</ImgsContainer>
		</FirstContainer>
	);
};

const FirstContainer = styled.div`
`;

const ImgsContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
`;

export  default Canvas;
