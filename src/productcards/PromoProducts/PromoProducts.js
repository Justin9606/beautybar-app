import React from 'react';

//styled components
import styled from 'styled-components';

//Promo products card flatList
import PromoProductCardFlatList from '../../components/common/CommonCards/PromoProductCard/PromoProductCardFlatList';
//_render promo item
import _renderPromoProductItem from '../../components/common/CommonCards/PromoProductCard/_renderPromoProductItem';

//Promo

import PromoProductBcgBannerImg from '../../assets/svg/promo/promoProductBcgBanner.png';
import BigDiscountBanner from '../../assets/svg/promo/big_discount_banner.svg';
//product review star icon
import ReviewStar from '../../assets/icons/productreviewstar.png';

//svg demo data
import {POPULAR_PRODUCT_DEMO_DATA} from '../../components/svg_data/skin_data';

const PromoProducts = () => {
  return (
    <PromoProductsWrap>
      <PromoProductBcgBannerWrap source={PromoProductBcgBannerImg} />
      <PromoTextwithDiscountBanWrap>
        <PromoText>Promo</PromoText>
        <BigDiscountBanner />
      </PromoTextwithDiscountBanWrap>
      <PromoProductCardFlatList
        horizontal={true}
        data={POPULAR_PRODUCT_DEMO_DATA}
        renderItem={({item, index}) => {
          const SmallDiscountBanner = item.small_discount_banner;

          const HeartnotLikedSvg = item.heart_like;
          return (
            <_renderPromoProductItem
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
    </PromoProductsWrap>
  );
};

export default PromoProducts;

const PromoProductsWrap = styled.View`
  height: 412px;
`;
const PromoProductBcgBannerWrap = styled.Image`
  width: 342px;
  height: 412px;
  position: absolute;
  align-self: center;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.06);
  border-radius: 12px;
`;
const PromoTextwithDiscountBanWrap = styled.View`
  margin-left: 46px;
  margin-right: 46px;
  margin-top: 21px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
const PromoText = styled.Text`
  font-family: Montserrat-Medium;
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 29px;
  color: #ffffff;
`;
