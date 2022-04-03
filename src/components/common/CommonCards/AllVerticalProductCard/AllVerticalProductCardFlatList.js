//react
import React from 'react';

//react-native
import {FlatList} from 'react-native';

//styled components
import styled from 'styled-components';

const AllVerticalProductCardFlatList = ({data, renderItem}) => {
  return (
    <Container>
      <FlatList
        columnWrapperStyle={{justifyContent: 'space-between', marginBottom: 20}}
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
  padding-horizontal: 24px;
`;
