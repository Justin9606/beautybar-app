//react
import React from 'react';

//react native dimension
import {Dimensions} from 'react-native';

//styeld components
import styled from 'styled-components';

const Divider = ({width, marginRight, top}) => {
  return <DividerWrap marginRight={marginRight} width={width} top={top} />;
};

export default Divider;

const DividerWrap = styled.View`
  width: ${props => props.width || Dimensions.get('window').width / 1.28}px;
  border: 1px solid #f3f8fb;
  background: #f3f8fb;
  margin-right: ${props => props.marginRight || 12}px;
  align-self: center;
`;
