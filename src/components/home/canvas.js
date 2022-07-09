import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import leftSide from '../../images/left part.png';
import RightSide from '../../images/right part.png';

const Canvas = () => {    
	return(
		<FirstContainer>
			<p style={{fontFamily:"HelveticaNeue-Medium.ttf", fontSize:"34px",paddingLeft:"1px",textAlign:"center",paddingBottom:"60px",paddingTop:"70px"}}>
				Flexible Canvas and slick <br/>Quick Actions</p>
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
