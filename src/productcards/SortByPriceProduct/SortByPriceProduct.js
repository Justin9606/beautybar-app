//react
import React from 'react';

//styled components
import styled from 'styled-components';

//_renderSortByPriceItem
import _renderSortByPriceItem from '../../components/common/CommonCards/SortByPriceProducts/_renderSortByPriceItem';

//SortByPriceProductCardFlatList.js
import SortByPriceProductCardFlatList from '../../components/common/CommonCards/SortByPriceProducts/SortByPriceProductCardFlatList';

//product review star icon
import ReviewStar from '../../assets/icons/productreviewstar.png';

//svg demo data
import {POPULAR_PRODUCT_DEMO_DATA} from '../../components/svg_data/skin_data';

const SortByPriceProducts = () => {
  return (
    <SortByPriceCardWrap horizontal showsHorizontalScrollIndicator={false}>
      <SortByPriceProductCardFlatList
        numColumns={Math.ceil(POPULAR_PRODUCT_DEMO_DATA.length / 2)}
        data={POPULAR_PRODUCT_DEMO_DATA}
        renderItem={({item, index}) => {
          const SmallDiscountBanner = item.small_discount_banner;
          const HeartnotLikedSvg = item.heart_like;
          return (
            <_renderSortByPriceItem
              key={index}
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
    </SortByPriceCardWrap>
  );
};

export default SortByPriceProducts;

const SortByPriceCardWrap = styled.ScrollView`
  flex-direction: row;
  flex-wrap: wrap;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.06);
`;
