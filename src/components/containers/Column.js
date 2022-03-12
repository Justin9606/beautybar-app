import React from 'react';
import styled from 'styled-components';

const Column = ({children, justifyContent, alignItems}) => {
  return (
    <Container justifyContent={justifyContent} alignItems={alignItems}>
      {children}
    </Container>
  );
};

export default Column;

const Container = styled.View`
  flex-direction: column;
  justify-content: ${props => props.justifyContent || 'flex-start'};
  align-items: ${props => props.alignItems || 'center'};
`;
