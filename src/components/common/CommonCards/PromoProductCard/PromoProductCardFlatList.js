//react
import React from 'react';

//react-native
import {FlatList} from 'react-native';

//styled components
import styled from 'styled-components';

const PromoProductCardFlatList = ({data, renderItem}) => {
  return (
    <Container>
      <FlatList
        showsHorizontalScrollIndicator={false}
        horizontal
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
