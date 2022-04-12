import React from 'react';

import {Dimensions} from 'react-native';

//react navigation native
import {useRoute} from '@react-navigation/native';
//styled components
import styled from 'styled-components';

//common components
import Header from '../../../components/common/Header/Header';

//containers

import ScrollableView from '../../../containers/ScrollableView';

const Productdetailscreen = () => {
  const route = useRoute();

  const {data} = route.params;

  return (
    <>
      <Header
        back_with_rec_icon={'back_with_tail_icon'}
        small_right_search={'small_right_search'}
        right_home={'right_home'}
        right_cart={'right_cart'}
      />
      <ScrollableView>
        <ProductImage source={data.icon} resizeMode="contain" />
      </ScrollableView>
    </>
  );
};

export default Productdetailscreen;

const ProductImage = styled.Image`
  width: ${Dimensions.get('window').width}px;
  height: ${Dimensions.get('window').width / 1.4}px;
  margin-top: 20px;
  justify-self: center;
  align-self: center;
  display: flex;
`;
