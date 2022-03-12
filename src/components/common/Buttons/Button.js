import React from 'react';
import styled from 'styled-components';

const Button = ({onPress, title, active, marginHorizontal, marginTop}) => {
  return (
    <PressableWrap
      onPress={onPress}
      active={active}
      marginHorizontal={marginHorizontal}
      marginTop={marginTop}>
      <Title>{title}</Title>
    </PressableWrap>
  );
};

export default Button;

const PressableWrap = styled.Pressable`
  height: 64px;
  align-items: center;
  justify-content: center;
  border-radius: 20px;
  background-color: #e74779;
  opacity: ${props => (props.active ? 0.5 : 1)};
  margin-horizontal: ${props => props.marginHorizontal || 24}px;
  margin-top: ${props => props.marginTop || 0}px;
`;
const Title = styled.Text`
  font-family: Montserrat-Medium;
  font-size: 16px;
  line-height: 20px;
  color: #fff;
  font-weight: 600;
`;
