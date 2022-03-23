import React from 'react';
import styled from 'styled-components';

const Viewcontainer = ({children, backgroundColor}) => {
  return <Container>{children}</Container>;
};

export default Viewcontainer;

const Container = styled.View`
  flex: 1;
  justify-content: center;
  background-color: ${props => props.backgroundColor || '#fff'};
`;
