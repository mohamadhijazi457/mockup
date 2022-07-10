import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import PngGrid from '../../images/grid and shape detection section.png'

const GridAndShape = () => {
    return(
        <FirstContainer>
            <Image src={PngGrid} width="100%" height="600" />
						<FlexWrapper>
							<div>
								<p style={{ fontSize: '34px', position: 'absolute', left: '18%', top: '16%' }}>Flawless layouts<br />with Snap to Grid</p>
								<p style={{ position: 'absolute', left: '18%', top: '30%' }}>Mockup’s customizable grid helps
									you align,<br />balance and lay your elements smoothly.<br />
									Choose between lines, dots, or no grid at all.<br />Mockup’s 5 spacing options and opacity controls<br />allow you
									to customize it to your liking.</p>
							</div>
							<div>
								<p style={{ fontSize: '34px', position: 'absolute', left: '60%', top: '16%' }}>Shape Detection<br />for a smooth flow</p>
								<p style={{ position: 'absolute', left: '60%', top: '30%' }}>With Mockup’s Shape Detection, you can draw<br />
								perfect lines, circles, ellipses, and rectangles.<br />Using either the “Shape” option in the ruler or the<br />
								“Draw & Hold” gesture will generate those<br />flawless shapes and carry your designs forward.</p>
							</div>
						</FlexWrapper>
        </FirstContainer>

    );
};

const FirstContainer = styled.div`
	position: relative;
	top: 0;
	left: 0;
	font-family: HelveticaNeue-Medium;
`;

const FlexWrapper = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	width: 100%;
`;

const Image = styled.img`
	padding: 60px 0 60px 0;
	position: relative;
	top: 0;
	left: 0;
`;

export default GridAndShape;