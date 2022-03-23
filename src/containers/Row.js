import React from 'react';
import styled from 'styled-components';

const Row = ({children, alignItems, justifyContent}) => {
  return (
    <Container justifyContent={justifyContent} alignItems={alignItems}>
      {children}
    </Container>
  );
};

export default Row;

const Container = styled.View`
  flex-direction: row;
  justify-content: ${props => props.justifyContent || 'center'};
  align-items: ${props => props.alignItems || 'center'};
`;
