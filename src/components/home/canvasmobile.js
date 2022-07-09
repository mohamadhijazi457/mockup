import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import RightSideImg from '../../images/right part.png';
import LeftSideImg from '../../images/left part.png';

const CanvasMobile = () => {
	return(
		<FirstContainer>
			<p style={{fontFamily:"HelveticaNeue-Medium", fontSize:"42px",paddingLeft:"1px",textAlign:"center",paddingBottom:"60px",paddingTop:"70px"}}>
				Flexible Canvas &<br/> slick Quick Actions</p>
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
