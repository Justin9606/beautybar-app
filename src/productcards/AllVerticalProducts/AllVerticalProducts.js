import React from 'react';

//styled components
import styled from 'styled-components';

//Promo products card flatList
import AllVerticalProductCardFlatList from '../../components/common/CommonCards/AllVerticalProductCard/AllVerticalProductCardFlatList';
//_render promo item
import _renderAllVerticalItem from '../../components/common/CommonCards/AllVerticalProductCard/_renderAllVerticalItem';

//product review star icon
import ReviewStar from '../../assets/icons/productreviewstar.png';

//svg demo data
import {POPULAR_PRODUCT_DEMO_DATA} from '../../components/svg_data/skin_data';

const AllVerticalProducts = () => {
  return (
    <Wrapper>
      <AllVerticalProductCardFlatList
        data={POPULAR_PRODUCT_DEMO_DATA}
        renderItem={({item, index}) => {
          const SVG = item.icon;
          const SmallDiscountBanner = item.small_discount_banner;
          const HeartnotLikedSvg = item.heart_like;
          return (
            <_renderAllVerticalItem
              index={index}
              icon={<SVG width={117} height={120} />}
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
    </Wrapper>
  );
};

export default AllVerticalProducts;

const Wrapper = styled.View`
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.06);
`;
