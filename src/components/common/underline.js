import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Underline = (props) => {
  const { text, src, width, height, bottom, left } = props;
  return (
    <UnderlineContainer>
      <UnderlineText>{text}</UnderlineText>
      <Image src={src} width={width} bottom={bottom} left={left} />
    </UnderlineContainer>
  );
};

const UnderlineContainer = styled.span`
  position: relative;
  top: 0;
  left: 0;
`;

const UnderlineText = styled.span`
  position: relative;
  top: 0;
  left: 0;
`;

const Image = styled.img`
  position: absolute;
  bottom: ${props => props.bottom || '0'}%;
  left: ${props => props.left || '0'}%;
`;

Underline.propTypes = {
  text: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  width: PropTypes.string.isRequired
};

export default Underline;