import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import PngGrid from '../../images/grid and shape detection section ipad.png'

const GridAndShapeIpad = () => {
	return(
		<FirstContainer>
			<img src={PngGrid} width="1020" height="1500" style={{paddingBottom:"60px",paddingTop:"60px"}}/>
			<div style={{ position: 'absolute', left: '40%', top: '10%' }}>
				<p style={{ fontSize: '34px' }}>Flawless layouts<br />with Snap to Grid</p>
				<p>Mockup’s customizable grid helps
					you align,<br />balance and lay your elements smoothly.<br />
					Choose between lines, dots, or no grid at all.<br />Mockup’s 5 spacing options and opacity controls<br />allow you
					to customize it to your liking.</p>
			</div>
			<div style={{  position: 'absolute', left: '26%', top: '58%' }}>
				<p style={{ fontSize: '34px', }}>Shape Detection<br />for a smooth flow</p>
				<p>With Mockup’s Shape Detection, you can draw<br />
				perfect lines, circles, ellipses, and rectangles.<br />Using either the “Shape” option in the ruler or the<br />
				“Draw & Hold” gesture will generate those<br />flawless shapes and carry your designs forward.</p>
			</div>
		</FirstContainer>
	);
};

const FirstContainer = styled.div`
	position: relative;
	top: 0;
	left: 0;
	font-family: HelveticaNeue-Medium;
`;

export default GridAndShapeIpad;
