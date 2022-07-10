import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import PngGrid from '../../images/grid and shape detection section ipad.png'

const GridAndShapeMobile = () => {
    return(
        <FirstContainer>
					<img src={PngGrid} width="500" height="1200" style={{paddingBottom:"60px",paddingTop:"60px"}}/>
					<img src={PngGrid} width="1020" height="1500" style={{paddingBottom:"60px",paddingTop:"60px"}}/>
					<div style={{ position: 'absolute', left: '36%', top: '3%' }}>
						<p style={{ fontSize: '28px' }}>Flawless<br />layouts with<br />Snap to Grid</p>
						<p>Mockup’s customizable grid<br />helps
							you align, balance and<br />lay your elements smoothly.<br />
							Choose between lines, dots,<br />or no grid at all. Mockup’s 5<br />spacing options and opacity<br />controls allow you
							to<br />customize it to your liking.</p>
					</div>
					<div style={{  position: 'absolute', left: '20%', top: '24%' }}>
						<p style={{ fontSize: '28px', }}>Shape<br />Detection for a<br />smooth flow</p>
						<p>With Mockup’s Shape Detection,<br />you can draw
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