//react
import React from 'react';

//react native dimension
import {Dimensions} from 'react-native';

//styeld components
import styled from 'styled-components';

const Divider = ({marginLeft}) => {
  return <DividerWrap marginLeft={marginLeft} />;
};

export default Divider;

const DividerWrap = styled.View`
  width: ${Dimensions.get('window').width}px;
  height: 2.65px;
  background: #f3f8fb;
  margin-left: ${props => props.marginLeft || 0}px;
`;
