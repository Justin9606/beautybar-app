import React from 'react';

//styled
import styled from 'styled-components';

//containers
import Spacer from '../../../../containers/Spacer';
import Row from '../../../../containers/Row';

//product review star icon

const _renderNewestItem = ({
  icon,
  title,
  descript,
  starRate,
  rateText,
  price,
  heart_like,
  index,
}) => {
  return (
    <RenderItemWrapper
      index={index}
      activeOpacity={0.7}
      onPress={() => alert('Product pressed')}>
      <NewBannerTextWrap>
        <NewBannerText>NEW</NewBannerText>
      </NewBannerTextWrap>
      <Row>
        <NewestProductsMainImgs>{icon}</NewestProductsMainImgs>
        <Wrap>
          <NewestProductsTitle>{title}</NewestProductsTitle>
          <NewestProductsDescript>{descript}</NewestProductsDescript>
          <Spacer height={8.33} />
          <Row alignItems={'center'} justifyContent={'flex-start'}>
            <ProductReviewStarIcon source={starRate} />
            <ProductReviewStarIcon source={starRate} />
            <ProductReviewStarIcon source={starRate} />
            <ProductReviewStarIcon source={starRate} />
            <ProductReviewStarIcon source={starRate} />
            <Spacer width={0.66} />
            <ProductRateText>{rateText}</ProductRateText>
          </Row>

          <NewestProductsPriceWithHeartIconWrap>
            <NewestProductsPrice>₩ {price}</NewestProductsPrice>
            <HearLikeIcon
              activeOpacity={0.7}
              onPress={() => alert('Like icon pressed')}>
              {heart_like}
            </HearLikeIcon>
          </NewestProductsPriceWithHeartIconWrap>
        </Wrap>
      </Row>
    </RenderItemWrapper>
  );
};

export default _renderNewestItem;

const RenderItemWrapper = styled.TouchableOpacity`
  padding-right: 30px;
  padding-bottom: 36px;
`;
const NewBannerTextWrap = styled.View`
  position: absolute;
  width: 40px;
  height: 14px;
  background-color: #323234;
  justify-content: center;
  align-items: center;
  z-index: 1;
`;

const NewBannerText = styled.Text`
  font-family: Montserrat-Medium;
  font-style: normal;
  font-weight: 600;
  font-size: 10px;
  line-height: 12px;
  color: #ffffff;
`;

const Wrap = styled.View`
  flex-direction: column;
  margin-left: 28px;
  justify-content: flex-start;
`;

const NewestProductsMainImgs = styled.View`
  margin-left: 16px;
`;

const NewestProductsTitle = styled.Text`
  font-family: Montserrat-Medium;
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 15px;
  /* identical to box height */
  margin-bottom: 4px;
  color: #323234;
`;
const NewestProductsDescript = styled.Text`
  font-family: Montserrat-Medium;
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 15px;
  /* identical to box height */

  color: #323234;
`;

const NewestProductsPrice = styled.Text`
  font-family: Montserrat-Medium;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 24px;
  /* identical to box height, or 171% */

  text-align: center;

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

const NewestProductsPriceWithHeartIconWrap = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-top: 11px;
`;

const HearLikeIcon = styled.TouchableOpacity`
  margin-left: 80px;
  align-self: center;
`;
