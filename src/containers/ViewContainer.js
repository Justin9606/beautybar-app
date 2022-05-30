import React from 'react';
import styled from 'styled-components';

const Viewcontainer = ({children, backgroundColor}) => {
  return <Container backgroundColor={backgroundColor}>{children}</Container>;
};

export default Viewcontainer;

const Container = styled.View`
  flex: 1;
  background-color: ${props => props.backgroundColor || '#fff'};
`;
