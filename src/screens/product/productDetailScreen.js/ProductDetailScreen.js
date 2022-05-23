import React from 'react';

import {Dimensions} from 'react-native';

//react navigation native
import {useRoute} from '@react-navigation/native';
//styled components
import styled from 'styled-components/native';

//svg icons
// import LongLinearBanner from '../../../assets/svg/productDetail/mainImage_bottom_banner.svg';
import LongLinearBannerImage from '../../../assets/svg/productDetail/longLinearBanner.png';
import DiscountBanner from '../../../assets/svg/productDetail/discount_banner.svg';
import VectorLeft from '../../../assets/svg/productDetail/vector_left.svg';
import VectorRight from '../../../assets/svg/productDetail/vector_right.svg';
import ShareIcon from '../../../assets/svg/productDetail/shareIcon.svg';
import FilterIcon from '../../../assets/svg/productDetail/filter.svg';
import AddLikeIcon from '../../../assets/svg/productDetail/addLike.svg';
import BuyIcon from '../../../assets/svg/productDetail/buyIcon.svg';
import CameraIcon from '../../../assets/svg/productDetail/camera.svg';

//common components
import Header from '../../../components/common/Header/Header';

//containers
import ScrollableView from '../../../containers/ScrollableView';

const ProductDetailScreen = () => {
  const route = useRoute();

  const {data} = route.params;
  console.log('DATA>>>', data);

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
        <LinearContainer>
          <LongLinearBanner source={LongLinearBannerImage} />
          <LeftVectorWrap>
            <VectorLeft />
          </LeftVectorWrap>
          <DiscountBannerWrap>
            <DiscountAmount>{data.discount_amount_percentage}%</DiscountAmount>
            <DiscountBanner />
          </DiscountBannerWrap>
          <GrabFastText>Grab it fast until 12th November</GrabFastText>
          <RightVectorWrap>
            <VectorRight />
          </RightVectorWrap>
        </LinearContainer>
        <BodyContainer>
          <BrandAndShareWrap></BrandAndShareWrap>
        </BodyContainer>
      </ScrollableView>
    </>
  );
};

export default ProductDetailScreen;

const ProductImage = styled.Image`
  width: ${Dimensions.get('window').width}px;
  height: ${Dimensions.get('window').width / 1.4}px;
  margin-top: 20px;
  justify-self: center;
  align-self: center;
  display: flex;
`;

const LinearContainer = styled.View`
  margin-top: 43px;
`;

const LongLinearBanner = styled.Image`
  height: 53px;
  width: auto;
`;

const DiscountBannerWrap = styled.View`
  position: absolute;
  top: -26.35px;
  left: 20px;
`;

const DiscountAmount = styled.Text`
  position: absolute;
  top: 8px;
  font-family: Montserrat-Medium;
  font-style: normal;
  font-weight: 700;
  font-size: 12px;
  line-height: 15px;
  text-align: center;
  color: #e74779;
  z-index: 1;
  align-self: center;
`;

const GrabFastText = styled.Text`
  position: absolute;
  right: 24px;
  font-family: Montserrat-Medium;
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  color: #ffffff;
  top: 17px;
`;

const LeftVectorWrap = styled.View`
  position: absolute;
  top: -10px;
`;

const RightVectorWrap = styled.View`
  position: absolute;
  right: 5px;
  top: -10px;
  z-index: 1;
`;

const BodyContainer = styled.View``;

const BrandAndShareWrap = styled.View``;
