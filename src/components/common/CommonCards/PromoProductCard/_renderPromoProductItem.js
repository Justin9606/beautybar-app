//react
import React from 'react';

//styled components
import styled from 'styled-components';

//containers
import Spacer from '../../../../containers/Spacer';
import Row from '../../../../containers/Row';

const _renderPromoProductItem = ({
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
  small_discount_banner,
  discount_amount_percentage,
  discount_amount_in_price,
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
      <ProductImageWrap>{icon}</ProductImageWrap>

      <SmallDiscountBanner>
        {small_discount_banner}
        <DiscountPercentage>{discount_amount_percentage}%</DiscountPercentage>
      </SmallDiscountBanner>

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
      <PriceHeartLikeWrap>
        <ProductPrice>₩ {price}</ProductPrice>
        <HearLikeIcon
          activeOpacity={0.7}
          onPress={() => alert('Like icon pressed')}>
          {heart_like}
        </HearLikeIcon>
      </PriceHeartLikeWrap>
      <DiscountWrap>
        <DiscountonlyText>Only</DiscountonlyText>
        <DiscountInPrice>{discount_amount_in_price}</DiscountInPrice>
      </DiscountWrap>
    </Wrapper>
  );
};

export default _renderPromoProductItem;

const Wrapper = styled.TouchableOpacity`
  justify-content: center;
  margin-left: ${props => (props.index === 0 ? 46 : 0)}px;
  background-color: white;
  width: ${props => props.cardWidth || 180}px;
  height: ${props => props.cardHeight || 290}px;
  border-radius: 12px;
  margin-top: 5px;
  margin-bottom: 32px;
  margin-right: ${props =>
    props.POPULAR_PRODUCT_DEMO_DATA?.lastIndexOf() ? 16 : 0}px;
  elevation: 5;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.06);
`;

const SmallDiscountBanner = styled.View`
  position: absolute;
  top: 5px;
  left: 6px;
  z-index: 1;
  overflow: hidden;

  box-shadow: 0px 1px 6px rgba(3, 3, 20, 0.07);
`;
const DiscountPercentage = styled.Text`
  position: absolute;
  top: 10px;
  left: 15px;
  text-align: center;
  justify-content: center;
  font-family: Montserrat-Medium;
  font-style: normal;
  font-weight: 700;
  font-size: 12px;
  line-height: 12px;
  text-align: center;

  color: #323234;
`;

const ProductImageWrap = styled.View`
  justify-content: center;
  align-items: center;
  background-color: transparent;
  padding-top: 12px;
`;

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
const PriceHeartLikeWrap = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
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

const DiscountWrap = styled.View`
  margin-left: 14px;
  flex-direction: row;
`;

const DiscountonlyText = styled.Text`
  font-family: Montserrat-Medium;
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 15px;
  color: #323234;
`;

const DiscountInPrice = styled.Text`
  font-family: Montserrat-Medium;
  margin-left: 6px;
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  text-align: center;
  align-items: center;
  color: #e74779;
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
  margin-right: 14.4px;
`;
