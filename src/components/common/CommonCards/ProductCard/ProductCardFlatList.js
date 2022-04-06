//react
import React from 'react';

//react-native
import {FlatList} from 'react-native';

//styled components
import styled from 'styled-components';

const ProductCardFlatList = ({data, renderItem}) => {
  return (
    <Container>
      <FlatList
        showsHorizontalScrollIndicator={false}
        horizontal={true}
        data={data}
        renderItem={renderItem}
      />
    </Container>
  );
};
export default ProductCardFlatList;
const Container = styled.View`
  justify-content: center;
`;
