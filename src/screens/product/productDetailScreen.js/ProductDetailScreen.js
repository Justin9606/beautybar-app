import React from 'react';

//react navigation native
import {useRoute} from '@react-navigation/native';
//styled components
import styled from 'styled-components';

//common components
import Header from '../../../components/common/Header/Header';

//containers
import SafeAreaContainer from '../../../containers/SafeAreaContainer';
import ScrollableView from '../../../containers/ScrollableView';

const Productdetailscreen = () => {
  const route = useRoute();

  const {data} = route.params;
  console.log(data.icon);
  return (
    <SafeAreaContainer>
      <Header
        back_with_rec_icon={'back_with_tail_icon'}
        small_right_search={'small_right_search'}
        right_home={'right_home'}
        right_cart={'right_cart'}
      />
      <ScrollableView>
        <ProductImage source={data.icon} />
      </ScrollableView>
    </SafeAreaContainer>
  );
};

export default Productdetailscreen;

const ProductImage = styled.Image`
  width: 179px;
  height: 169px;
  align-self: center;
`;
