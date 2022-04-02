//react
import React from 'react';

//react-native
import {FlatList} from 'react-native';

//styled components
import styled from 'styled-components';

import Spacer from '../../../../containers/Spacer';

const SortByPriceProductCardFlatList = ({data, renderItem, numColumns}) => {
  return (
    <Container>
      <FlatList
        scrollEnabled={false}
        showsHorizontalScrollIndicator={false}
        data={data}
        contentContainerStyle={{alignSelf: 'flex-start'}}
        numColumns={numColumns}
        renderItem={renderItem}
      />
      <Spacer height={32} />
    </Container>
  );
};
export default SortByPriceProductCardFlatList;
const Container = styled.View`
  justify-content: center;
  margin-left: 24px;
`;
