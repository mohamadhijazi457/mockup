import React, { useEffect, useState } from 'react';
import Styled from 'styled-components';
import leftSide from '../../images/left part.png';
import RightSide from '../../images/right part.png';


const CanvasIpad = () => {    
    return(
        <FirstContainer>
            <p style={{fontFamily:"HelveticaNeue-Medium.ttf", fontSize:"42px",paddingLeft:"1px",textAlign:"center",paddingBottom:"60px",paddingTop:"70px"}}>Flexible Canvas and slick <br/>Quick Actions</p>
            <ImgsContainer>
            <img src={leftSide} alt='LeftSide_png' style={{width:"400px", height:"540px", paddingLeft:"100px",paddingBottom:"45px"}} />
            <img src={RightSide} alt='RightSide_png' style={{width:"400px", height:"540px",paddingLeft:"40px",paddingBottom:"45px"}}/>
            </ImgsContainer>
        </FirstContainer>
        

    )};
    const FirstContainer=Styled.div`
    
    align-items:center;
    `;
    const ImgsContainer = Styled.div`
    
    `;

    export  default CanvasIpad;
