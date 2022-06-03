import React from 'react';
import styled from 'styled-components/native';

const BottomBtnWrapper = ({children, height}) => {
  return <Wrapper height={height}>{children}</Wrapper>;
};

export default BottomBtnWrapper;

const Wrapper = styled.View`
  height: ${props => props.height || 105}px;
  padding-vertical: 15px;
  box-shadow: 0px -5px 19px rgba(5, 7, 22, 0.06);
  background-color: #fff;
`;
