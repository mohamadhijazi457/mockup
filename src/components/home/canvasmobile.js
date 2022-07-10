import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import RightSideImg from '../../images/right part.png';
import LeftSideImg from '../../images/left part.png';
import CircleCanvas from '../../images/circle canvas.svg';
import UnderlineQuickActions from '../../images/underline quick actions.svg';
import Circle from '../common/circle';
import Underline from '../common/underline';

const CanvasMobile = () => {
	return(
		<FirstContainer>
			<p style={{fontFamily:"HelveticaNeue-Medium", fontSize:"34px",paddingLeft:"1px",textAlign:"center",paddingBottom:"60px",paddingTop:"70px"}}>
				Flexible <Circle text='Canvas' src={CircleCanvas} width='130' top='20' left='-2' /> &<br/>
				slick <Underline text='Quick Actions' src={UnderlineQuickActions} width='240' bottom='-24' left='-4' /></p>
			<img src={LeftSideImg} alt='LeftSide_png' style={{width:"317.15px", height:"415.23px",paddingBottom:"20px"}} />
			<img src={RightSideImg} alt='RightSide_png' style={{width:"317.15px", height:"415.23px",paddingBottom:"45px"}}/>
		</FirstContainer>
	);
};

const FirstContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
`;

export  default CanvasMobile;
