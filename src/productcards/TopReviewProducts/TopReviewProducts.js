import React from 'react';

//styled components
import styled from 'styled-components';

//Promo products card flatList
import TopReviewProductCardFlatList from '../../components/common/CommonCards/TopReviewProductCard/TopReviewProductCardFlatList';
//_render promo item
import _renderTopReviewItem from '../../components/common/CommonCards/TopReviewProductCard/_renderTopReviewItem';

//Promo

import TopReviewProductBcgBannerImg from '../../assets/svg/topreview/topreviewbcgbanner.png';
import BigReviewStar from '../../assets/svg/topreview/big_star.svg';
//product review star icon
import ReviewStar from '../../assets/icons/productreviewstar.png';

//svg demo data
import {POPULAR_PRODUCT_DEMO_DATA} from '../../components/svg_data/skin_data';

const TopReviewProducts = () => {
  return (
    <TopReviewProductsWrap>
      <TopReviewProductBcgBannerWrap source={TopReviewProductBcgBannerImg} />
      <TopReviewTextwithStarBanWrap>
        <BigReviewStar />
        <TopReviewText>Top Review Product</TopReviewText>
      </TopReviewTextwithStarBanWrap>
      <TopReviewProductCardFlatList
        horizontal
        data={POPULAR_PRODUCT_DEMO_DATA}
        renderItem={({item, index}) => {
          const SmallDiscountBanner = item.small_discount_banner;

          const HeartnotLikedSvg = item.heart_like;
          return (
            <_renderTopReviewItem
              POPULAR_PRODUCT_DEMO_DATA={POPULAR_PRODUCT_DEMO_DATA}
              index={index}
              icon={item.icon}
              small_discount_banner={<SmallDiscountBanner />}
              discount_amount_percentage={item.discount_amount_percentage}
              title={item.name}
              descript={item.description}
              price={item.price}
              discount_amount_in_price={item.discount_amount_in_price}
              rateText={item.star}
              starRate={ReviewStar}
              heart_like={<HeartnotLikedSvg />}
            />
          );
        }}
      />
    </TopReviewProductsWrap>
  );
};

export default TopReviewProducts;

const TopReviewProductsWrap = styled.View`
  height: 385px;
`;
const TopReviewProductBcgBannerWrap = styled.Image`
  width: 342px;
  height: 387px;
  position: absolute;
  align-self: center;
  border-radius: 12px;
`;
const TopReviewTextwithStarBanWrap = styled.View`
  margin-left: 52.5px;
  margin-right: 46px;
  margin-top: 30px;
  flex-direction: row;
  align-items: center;
  margin-bottom: 22px;
`;
const TopReviewText = styled.Text`
  width: 145px;
  margin-left: 14.5px;
  font-family: Montserrat-Medium;
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 29px;
  color: #323234;
`;
