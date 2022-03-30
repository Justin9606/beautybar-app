//react
import React from 'react';

//styled components
import styled from 'styled-components';

const _renderCategoryItem = ({svg, title, idx, CATEGORY_ROUND_DATA}) => {
  return (
    <Container
      idx={idx}
      activeOpacity={0.7}
      CATEGORY_ROUND_DATA={CATEGORY_ROUND_DATA}>
      <WrapSVG>{svg}</WrapSVG>
      <Title>{title}</Title>
    </Container>
  );
};

export default _renderCategoryItem;

const Container = styled.TouchableOpacity`
  padding-left: ${props => (props.idx === 0 ? 24 : 0)}px;
  padding-right: ${props =>
    props.CATEGORY_ROUND_DATA?.lastIndexOf() ? 26 : 0}px;
  justify-content: center;
  align-items: center;
  padding-top: 24px;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.06);
`;

const WrapSVG = styled.View`
  justify-content: center;
  align-items: center;
  background-color: white;
  height: 70px;
  width: 70px;
  border-radius: 35px;
`;

const Title = styled.Text`
  text-align: center;
  align-items: center;
  font-family: Montserrat-Medium;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
  color: #323234;
  margin-top: 16px;
`;
