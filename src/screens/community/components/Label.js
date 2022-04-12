//react
import React from 'react';

//styled
import styled from 'styled-components';

const Label = ({label, fontSize, marginTop, marginBottom}) => {
  return (
    <LabelTxt
      fontSize={fontSize}
      marginBottom={marginBottom}
      marginTop={marginTop}>
      {label}
    </LabelTxt>
  );
};

export default Label;

const LabelTxt = styled.Text`
  font-family: Montserrat-Medium;
  font-style: normal;
  font-weight: 500;
  font-size: ${props => props.fontSize || 14}px;
  line-height: 17px;
  margin-top: ${props => props.marginTop || 24}px;
  margin-bottom: ${props => props.marginBottom || 16}px;
  color: #323234;
`;
