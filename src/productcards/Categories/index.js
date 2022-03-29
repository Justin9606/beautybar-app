import React from 'react';

//common category card
import CategoryCardFlatList from '../../components/common/CommonCards/CategoryCard/Category';

//styled components
import styled from 'styled-components';

import Lips from '../../assets/svg/categories/lips.svg';
import Eyes from '../../assets/svg/categories/eye.svg';
import Skin from '../../assets/svg/categories/skin.svg';
import Face from '../../assets/svg/categories/face.svg';

const data = [
  {svg: Face, name: 'Face'},
  {svg: Eyes, name: 'Eyes'},
  {svg: Lips, name: 'Lips'},
  {svg: Skin, name: 'Skin'},
];

const _renderSectionList = ({svg, title, idx}) => {
  return (
    <Container idx={idx}>
      <WrapSVG>{svg}</WrapSVG>
      <Title>{title}</Title>
    </Container>
  );
};
const Index = () => {
  return (
    <CategoryCardFlatList
      data={data}
      horizontal
      showsHorizontalScrollIndicator={false}
      renderItem={({item, index}) => {
        const SVG = item.svg;
        return (
          <_renderSectionList title={item.name} svg={<SVG />} idx={index} />
        );
      }}
    />
  );
};

export default Index;

const Container = styled.View`
  padding-left: ${props => (props.idx === 0 ? 24 : 0)}px;
  padding-right: ${data?.lastIndexOf() ? 26 : 0}px;
  justify-content: center;
  align-items: center;
  padding-top: 24px;
`;

const WrapSVG = styled.View`
  justify-content: center;
  align-items: center;
  background-color: white;
  height: 70px;
  width: 70px;
  shadow-color: rgba(0, 0, 0, 0.06);
  shadow-offset: {width:2, height:4};
  shadow-opacity: 0.6;
  shadow-radius: 5px;
  border-radius: 35px;
  elevation: 5
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
