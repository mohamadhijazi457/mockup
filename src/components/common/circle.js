import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Circle = (props) => {
  const { text, src, width, height, top, left } = props;
  return (
    <CircleContainer>
      <CircleText>{text}</CircleText>
      <Image src={src} width={width} top={top} left={left} />
    </CircleContainer>
  );
};

const CircleContainer = styled.span`
  position: relative;
  top: 0;
  left: 0;
`;

const CircleText = styled.span`
  position: relative;
  top: 0;
  left: 0;
`;

const Image = styled.img`
  position: absolute;
  top: ${props => props.top || '0'}%;
  left: ${props => props.left || '0'}%;
`;

Circle.propTypes = {
  text: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  width: PropTypes.string.isRequired
};

export default Circle;