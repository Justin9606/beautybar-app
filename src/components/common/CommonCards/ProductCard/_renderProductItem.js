//react
import React from 'react';

//import FastImage from 'react-native-fast-image'
import FastImage from 'react-native-fast-image';

//styled components
import styled from 'styled-components';

//containers
import Spacer from '../../../../containers/Spacer';
import Row from '../../../../containers/Row';

const _renderProductItem = ({
  cardWidth,
  cardHeight,
  icon,
  title,
  descript,
  starRate,
  rateText,
  price,
  heart_like,
  index,
  top_product_icon,
  POPULAR_PRODUCT_DEMO_DATA,
}) => {
  return (
    <Wrapper
      cardWidth={cardWidth}
      cardHeight={cardHeight}
      POPULAR_PRODUCT_DEMO_DATA={POPULAR_PRODUCT_DEMO_DATA}
      index={index}
      activeOpacity={0.7}
      onPress={() => alert('Product pressed')}>
      <TopProductIcom>{top_product_icon}</TopProductIcom>

      <FastImage
        source={icon}
        style={{
          alignSelf: 'center',
          justifyContent: 'center',
          width: 117,
          height: 120,
          backgroundColor: 'transparent',
          marginTop: 12,
          priority: FastImage.priority.high,
        }}
        resizeMode={FastImage.resizeMode.contain}
      />
      {/* <ProductImageWrap source={icon} resizeMode={'contain'} /> */}
      <ProductTitle>{title}</ProductTitle>
      <ProductDescript>{descript}</ProductDescript>
      <Spacer height={8.33} />
      <Row justifyContent={'flex-start'}>
        <Spacer width={14.33} />
        <ProductReviewStarIcon source={starRate} />
        <ProductReviewStarIcon source={starRate} />
        <ProductReviewStarIcon source={starRate} />
        <ProductReviewStarIcon source={starRate} />
        <ProductReviewStarIcon source={starRate} />
        <Spacer width={0.66} />
        <ProductRateText>{rateText}</ProductRateText>
      </Row>
      <ProductPrice>₩ {price}</ProductPrice>
      <HearLikeIcon
        activeOpacity={0.7}
        onPress={() => alert('Like icon pressed')}>
        {heart_like}
      </HearLikeIcon>
    </Wrapper>
  );
};

export default _renderProductItem;

const Wrapper = styled.TouchableOpacity`
  justify-content: center;
  margin-left: ${props => (props.index === 0 ? 24 : 0)}px;
  background-color: white;
  width: ${props => props.cardWidth || 174}px;
  height: ${props => props.cardHeight || 244}px;
  border-radius: 12px;
  margin-top: 24px;
  margin-bottom: 32px;
  margin-right: ${props =>
    props.POPULAR_PRODUCT_DEMO_DATA?.lastIndexOf() ? 24 : 0}px;
  elevation: 5;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.06);
`;
const TopProductIcom = styled.View`
  position: absolute;
  top: -18px;
  z-index: 1;
  overflow: hidden;
`;

// const ProductImageWrap = styled.Image`
//   align-self: center;
//   width: 117px;
//   height: 120px;
//   background-color: transparent;
//   padding-top: 12px;
// `;

const ProductTitle = styled.Text`
  margin-top: 15px;
  text-align: left;
  margin-left: 12px;
  font-family: Montserrat-Medium;
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 15px;
  color: #323234;
`;

const ProductDescript = styled.Text`
  margin-left: 12px;
  font-family: Montserrat-Medium;
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 15px;
  margin-top: 4px;
  color: #323234;
`;

const ProductPrice = styled.Text`
  margin-left: 14px;
  margin-top: 8px;
  margin-bottom: 11px;
  font-family: Montserrat;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 24px;
  color: #323234;
`;

const ProductReviewStarIcon = styled.Image`
  width: 9.33px;
  height: 9.33px;
  margin-right: 6.67px;
`;

const ProductRateText = styled.Text`
  font-family: Montserrat-Medium;
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  align-items: center;
  color: #7f7e83;
`;

const HearLikeIcon = styled.TouchableOpacity`
  position: absolute;
  bottom: 14px;
  right: 14.4px;
`;
