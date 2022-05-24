import React from 'react';
import styled from 'styled-components/native';

const BottomBtnWrapper = ({children}) => {
  return <Wrapper>{children}</Wrapper>;
};

export default BottomBtnWrapper;

const Wrapper = styled.View`
  height: 105px;
  padding-vertical: 15px;
  box-shadow: 0px -5px 19px rgba(5, 7, 22, 0.06);
  background-color: white;
`;
