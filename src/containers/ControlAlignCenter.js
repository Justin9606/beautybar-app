import React from 'react';
import styled from 'styled-components';

const ControlAlignCenter = ({
  children,
  alignItemsCenter,
  justifyContentCenter,
}) => {
  return (
    <Container
      alignItemsCenter={alignItemsCenter}
      justifyContentCenter={justifyContentCenter}>
      {children}
    </Container>
  );
};

export default ControlAlignCenter;

const Container = styled.View`
  align-items: ${props => props.alignItemsCenter || 'center'};
  justify-content: ${props => props.justifyContentCenter || 'center'};
`;
