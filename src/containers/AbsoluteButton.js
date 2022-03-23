import React from 'react';

//styled components
import styled from 'styled-components';

//normalizer
import {normalize} from '../constants/responsive';

const Absolutebutton = ({children, bottom}) => {
  return <ButtonWrapper bottom={bottom}>{children}</ButtonWrapper>;
};

export default Absolutebutton;

const ButtonWrapper = styled.View`
  position: absolute;
  justify-self: center;
  left: 0;
  right: 0;
  bottom: ${props => props.bottom || normalize(30)}px;
`;
