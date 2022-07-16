import React from 'react';
import styled from 'styled-components';
import PngGrid from '../../images/grid and shape detection section ipad.png'
import CircleGrid from '../../images/Circle Grid.svg';
import CircleShape from '../../images/Circle Shape Detection.svg';
import UnderlineLayouts from '../../images/Underline layouts.svg';
import UnderlineFlow from '../../images/Underline flow.svg';
import Circle from '../common/circle';
import Underline from '../common/underline';

const GridAndShapeIpad = () => {
	return(
		<FirstContainer>
			<img src={PngGrid} width="1020" height="1500" style={{paddingBottom:"60px",paddingTop:"60px"}} alt="grid_img" />
			<div style={{ position: 'absolute', left: '40%', top: '10%' }}>
				<p style={{ fontSize: '34px' }}>
					Flawless <Underline text='layouts' src={UnderlineLayouts} width='140' bottom='-10' /><br />
					with Snap to <Circle text='Grid' src={CircleGrid} width='100' top='-10' /></p>
				<p>Mockup’s customizable grid helps
					you align,<br />balance and lay your elements smoothly.<br />
					Choose between lines, dots, or no grid at all.<br />Mockup’s 5 spacing options and opacity controls<br />allow you
					to customize it to your liking.</p>
			</div>
			<div style={{  position: 'absolute', left: '26%', top: '58%' }}>
				<p style={{ fontSize: '34px' }}>
					<Circle text='Shape Detection' src={CircleShape} width='300' top='-40' left='-5' /><br />
					for a smooth <Underline text='flow' src={UnderlineFlow} width='80' bottom='-6' left='8' /></p>
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
`;

export default GridAndShapeIpad;
