//react
import React from 'react';

//react-native
import {FlatList} from 'react-native';

//styled components
import styled from 'styled-components';

const AllVerticalProductCardFlatList = ({data, renderItem, horizontal}) => {
  return (
    <Container>
      <FlatList
        horizontal={horizontal}
        columnWrapperStyle={{
          justifyContent: 'space-between',
          marginBottom: 20,
        }}
        numColumns={2}
        showsHorizontalScrollIndicator={false}
        data={data}
        renderItem={renderItem}
      />
    </Container>
  );
};
export default AllVerticalProductCardFlatList;

const Container = styled.View`
  padding-horizontal: 23px;
`;
