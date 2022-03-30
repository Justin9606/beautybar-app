import React from 'react';

//react native
import {FlatList} from 'react-native';

//styled components
import styled from 'styled-components';

const CategoryCard = ({
  data,
  horizontal,
  showsHorizontalScrollIndicator,
  renderItem,
}) => {
  return (
    <Wrapper>
      <FlatList
        data={data}
        renderItem={renderItem}
        showsHorizontalScrollIndicator={showsHorizontalScrollIndicator}
        horizontal={horizontal}
      />
    </Wrapper>
  );
};

export default CategoryCard;

const Wrapper = styled.View`
  justify-content: center;
`;
