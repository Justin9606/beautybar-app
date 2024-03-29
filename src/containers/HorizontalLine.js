import React from 'react';
import styled from 'styled-components';

const Horizontalline = ({width, height}) => {
  return <Container width={width} height={height} />;
};

export default Horizontalline;

const Container = styled.View`
  width: ${props => props.width || 94}px;
  height: ${props => props.height || 1}px;
  background-color: #dae3e9;
  border-radius: 5px;
`;
