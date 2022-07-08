import React, { useEffect, useState } from 'react';
import Styled from 'styled-components';
import leftSide from '../../images/left part.png';
import RightSide from '../../images/right part.png';


const Canvas = () => {    
    return(
        <FirstContainer>
            <p style={{fontFamily:"HelveticaNeue-Medium", fontSize:"42px",paddingLeft:"1px",textAlign:"center",paddingBottom:"60px",paddingTop:"70px"}}>Flexible Canvas and slick <br/>Quick Actions</p>
            <img src={leftSide} alt='LeftSide_png' style={{width:"438.74px", height:"574.43px", paddingLeft:"200px",paddingBottom:"45px"}} />
            <img src={RightSide} alt='RightSide_png' style={{width:"438.74px", height:"574.43px", paddingLeft:"40px", paddingRight:"150px",paddingBottom:"45px"}}/>

        </FirstContainer>

    )};
    const FirstContainer=Styled.div`
    
    align-items:center;
    `

    export  default Canvas;
