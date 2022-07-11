import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import PngGrid from '../../images/grid and shape detection section ipad.png'
import CircleGrid from '../../images/Circle Grid.svg';
import CircleShape from '../../images/Circle Shape Detection.svg';
import UnderlineLayouts from '../../images/Underline layouts.svg';
import UnderlineFlow from '../../images/Underline flow.svg';
import Circle from '../common/circle';
import Underline from '../common/underline';

const GridAndShapeMobile = () => {
    return(
        <FirstContainer>
					<img src={PngGrid} width="100%" height="800" style={{paddingBottom:"60px",paddingTop:"60px"}}/>
					<div style={{ position: 'absolute', left: '36%', top: '8.5%' }}>
						<p style={{ fontSize: '18px' }}>
							<Underline text='Flawless' src={UnderlineLayouts} width='100' bottom='-20' left='40' /><br />
							layouts <Circle text='with' src={CircleGrid} width='70' left='-14' /><br />Snap to Grid</p>
						<p style={{ fontFamily: 'HelveticaNeue-Regular', fontSize: '12px' }}>Mockup’s customizable grid<br />helps
							you align, balance and<br />lay your elements smoothly.<br />
							Choose between lines, dots,<br />or no grid at all. Mockup’s 5<br />spacing options and opacity<br />controls allow you
							to<br />customize it to your liking.</p>
					</div>
					<div style={{  position: 'absolute', left: '20%', top: '53%' }}>
						<p style={{ fontSize: '17px', }}>
							<Circle text='Shape' src={CircleShape} width='100' top='20' left='-10' /><br />Detection for a<br />
							smooth <Underline text='flow' src={UnderlineFlow} width='60' left='10' /></p>
						<p style={{ fontFamily: 'HelveticaNeue-Regular', fontSize: '12px' }}>With Mockup’s Shape Detection,<br />you can draw
						perfect lines,<br />circles, ellipses, and rectangles.<br />Using either the “Shape” option<br />in the ruler or the
						“Draw & Hold”<br />gesture will generate those<br />flawless shapes and carry your<br />designs forward.</p>
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

export default GridAndShapeMobile;