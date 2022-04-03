import React from 'react';

//react-native FlatList
import {FlatList} from 'react-native';

//styled
import styled from 'styled-components';

const NewestProductsCardFlatlistList = ({data, numColumns, renderItem}) => {
  return (
    <Container>
      <FlatList
        scrollEnabled={false}
        showsHorizontalScrollIndicator={false}
        data={data}
        numColumns={numColumns}
        renderItem={renderItem}
      />
    </Container>
  );
};

export default NewestProductsCardFlatlistList;

const Container = styled.View`
  justify-content: center;
  align-items: center;
`;
