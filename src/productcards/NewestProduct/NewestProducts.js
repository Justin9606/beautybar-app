import React from 'react';

//NewestProductsCardFlatlistList
import NewestProductsCardFlatlistList from '../../components/common/CommonCards/NewestProductCard/NewestProductFlatList';
//styled components
import styled from 'styled-components';

//_renderNewestItem
import _renderNewestItem from '../../components/common/CommonCards/NewestProductCard/_renderNewsItem';

import ReviewStar from '../../assets/icons/productreviewstar.png';

//svg demo data
import {POPULAR_PRODUCT_DEMO_DATA} from '../../components/svg_data/skin_data';

const NewestProducts = () => {
  return (
    <NewestProductsWrap horizontal showsHorizontalScrollIndicator={false}>
      <NewestProductsCardFlatlistList
        data={POPULAR_PRODUCT_DEMO_DATA}
        numColumns={Math.ceil(POPULAR_PRODUCT_DEMO_DATA.length / 3)}
        renderItem={({item, index}) => {
          const SVG = item.icon;

          const HeartnotLikedSvg = item.heart_like;
          return (
            <_renderNewestItem
              key={index}
              POPULAR_PRODUCT_DEMO_DATA={POPULAR_PRODUCT_DEMO_DATA}
              index={index}
              icon={<SVG width={120} height={120} />}
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
    </NewestProductsWrap>
  );
};

export default NewestProducts;

const NewestProductsWrap = styled.ScrollView`
  padding-left: 24px;
`;
