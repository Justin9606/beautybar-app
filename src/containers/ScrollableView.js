import React from 'react';
import styled from 'styled-components';

const ScrollableView = ({children, backgroundColor}) => {
  return <Container backgroundColor={backgroundColor}>{children}</Container>;
};

export default ScrollableView;

const Container = styled.ScrollView`
  flex: 1;
  background-color: ${props => props.backgroundColor || '#fff'};
`;
