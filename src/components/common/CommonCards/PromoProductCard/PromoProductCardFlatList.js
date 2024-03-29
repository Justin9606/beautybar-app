//react
import React from 'react';

//react-native
import {FlatList} from 'react-native';

//styled components
import styled from 'styled-components';

const PromoProductCardFlatList = ({data, renderItem, horizontal}) => {
  return (
    <Container>
      <FlatList
        showsHorizontalScrollIndicator={false}
        horizontal={horizontal}
        data={data}
        renderItem={renderItem}
      />
    </Container>
  );
};
export default PromoProductCardFlatList;
const Container = styled.View`
  justify-content: center;
`;
