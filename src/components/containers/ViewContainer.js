import React from 'react';
import styled from 'styled-components';

const Viewcontainer = ({children}) => {
  return <Container>{children}</Container>;
};

export default Viewcontainer;

const Container = styled.View`
  flex: 1;
`;
