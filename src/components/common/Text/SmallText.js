import React from 'react';
import styled from 'styled-components';

const Smalltext = ({title, color, textAlign, width, height, fontWeight}) => {
  return (
    <Title
      color={color}
      textAlign={textAlign}
      width={width}
      height={height}
      fontWeight={fontWeight}>
      {title}
    </Title>
  );
};

export default Smalltext;

const Title = styled.Text`
  font-family: Montserrat-Medium;
  font-weight: ${props => props.fontWeight || 500};
  font-size: 14px;
  font-style: normal;
  text-align: ${props => props.textAlign || ''};
  color: ${props => props.color || '#323234'};
  width: ${props => props.width || 0}px;
  height: ${props => props.height || 0}px;
`;
