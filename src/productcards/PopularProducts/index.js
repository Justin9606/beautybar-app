import React from 'react';

import {FlatList} from 'react-native-gesture-handler';

//styled components
import styled from 'styled-components';
//containers
import Spacer from '../../containers/Spacer';
import ViewConainer from '../../containers/ViewContainer';

//demo svg
import Product1 from '../../assets/svg/products/product_1.svg';
import Product2 from '../../assets/svg/products/product_2.svg';

const Categories = [
  {
    icon: Product1,
    name: 'NIVEA',
    description: 'Shooting Cleansing Oil',
    star: 4,
    price: 140.0,
  },
  {
    icon: Product2,
    name: 'RATED GREEN',
    description: 'Shooting Cleansing Oil',
    star: 4,
    price: 140.0,
  },
  {
    icon: Product1,
    name: 'NIVEA',
    description: 'Shooting Cleansing Oil',
    star: 4,
    price: 140.0,
  },
  {
    icon: Product2,
    name: 'RATED GREEN',
    description: 'Shooting Cleansing Oil',
    star: 4,
    price: 140.0,
  },
  {
    icon: Product1,
    name: 'NIVEA',
    description: 'Shooting Cleansing Oil',
    star: 4,
    price: 140.0,
  },
  {
    icon: Product2,
    name: 'RATED GREEN',
    description: 'Shooting Cleansing Oil',
    star: 4,
    price: 140.0,
  },
];

const _renderItem = ({
  icon,
  title,
  descript,
  starRate,
  rateText,
  price,
  heart_like,
}) => {
  return (
    <Wrapper>
      <ImgWrapper>{icon}</ImgWrapper>
      <ProductTitle>{title}</ProductTitle>
      <ProductDescript>{descript}</ProductDescript>
      <ProductPrice>{price}</ProductPrice>
      <ProductRateText>{rateText}</ProductRateText>
    </Wrapper>
  );
};

const Index = () => {
  return (
    <Container>
      <FlatList
        data={Categories}
        renderItem={(item, index) => {
          const SVG = item.icon;
          return (
            <_renderItem
              icon={<SVG />}
              title={item.name}
              descript={item.description}
              price={item.price}
            />
          );
        }}
      />
    </Container>
  );
};

export default Index;

const Wrapper = styled.View``;

const Container = styled.View``;

const ImgWrapper = styled.View``;

const ProductTitle = styled.Text``;

const ProductDescript = styled.Text``;

const ProductPrice = styled.Text``;

const ProductRateText = styled.Text``;
