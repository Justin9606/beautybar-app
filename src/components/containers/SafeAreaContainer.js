import React from 'react';
import styled from 'styled-components';

const SafeAreaContainer = ({children, safeareaColor}) => {
  return <Wrapper safeareaColor={safeareaColor}>{children}</Wrapper>;
};

export default SafeAreaContainer;

const Wrapper = styled.SafeAreaView`
  flex: 1;
  background-color: ${props => props.safeareaColor || '#fff'};
`;
