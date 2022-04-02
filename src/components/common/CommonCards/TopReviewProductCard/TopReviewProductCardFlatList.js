//react
import React from 'react';

//react-native
import {FlatList} from 'react-native';

//styled components
import styled from 'styled-components';

const TopReviewProductCardFlatList = ({data, renderItem, horizontal}) => {
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
export default TopReviewProductCardFlatList;
const Container = styled.View`
  justify-content: center;
`;
