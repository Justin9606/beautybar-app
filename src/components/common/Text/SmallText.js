import React from 'react';
import styled from 'styled-components';

const Smalltext = ({title, color, textAlign, fontWeight, fontSize, style}) => {
  return (
    <Title
      color={color}
      textAlign={textAlign}
      fontWeight={fontWeight}
      fontSize={fontSize}
      style={style}>
      {title}
    </Title>
  );
};

export default Smalltext;

const Title = styled.Text`
  font-family: Montserrat-Medium;
  font-weight: ${props => props.fontWeight || 500};
  font-size: ${props => props.fontSize || 14}px;
  font-style: normal;
  text-align: ${props => props.textAlign};
  color: ${props => props.color || '#323234'};
`;
