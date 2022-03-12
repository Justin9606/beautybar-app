import React from 'react';

//styled components
import styled from 'styled-components';

const TextLabel = ({label, fontSize, color, marginTop, paddingHorizontal}) => {
  return (
    <LabelWrap
      fontSize={fontSize}
      color={color}
      marginTop={marginTop}
      paddingHorizontal={paddingHorizontal}>
      <Label>{label}</Label>
    </LabelWrap>
  );
};

export default TextLabel;

const LabelWrap = styled.View`
  padding-horizontal: ${props => props.paddingHorizontal || 25}px;
  justify-content: flex-start;
  align-items: flex-start;
  margin-top: ${props => props.marginTop || 0}px;
`;
const Label = styled.Text`
  font-family: Montserrat-Medium;
  font-style: normal;
  font-weight: 600;
  font-size: ${props => props.fontSize || 16}px;
  line-height: 20px;
  color: #323234;
`;
