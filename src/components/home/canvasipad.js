import React from 'react';
import styled from 'styled-components';
import leftSide from '../../images/left part.png';
import RightSide from '../../images/right part.png';
import CircleCanvas from '../../images/circle canvas.svg';
import UnderlineQuickActions from '../../images/underline quick actions.svg';
import Circle from '../common/circle';
import Underline from '../common/underline';

const CanvasIpad = () => {    
	return(
		<FirstContainer>
			<p style={{fontSize:"34px",paddingLeft:"1px",textAlign:"center",paddingBottom:"60px",paddingTop:"70px"}}>
			Flexible <Circle text='Canvas and' src={CircleCanvas} width='140' top='4' left='16' /> slick <br/>
				<Underline text='Quick Actions' src={UnderlineQuickActions} width='220' bottom='-24' left='20' /></p>
			<ImgsContainer>
				<img src={leftSide} alt='LeftSide_png' style={{width:"400px", height:"540px", paddingLeft:"100px",paddingBottom:"45px"}} />
				<img src={RightSide} alt='RightSide_png' style={{width:"400px", height:"540px",paddingLeft:"40px",paddingBottom:"45px"}}/>
			</ImgsContainer>
		</FirstContainer>
	);
};

const FirstContainer = styled.div`
	align-items: center;
`;

const ImgsContainer = styled.div`
`;

export  default CanvasIpad;
