import React from 'react';

//ProductCardFlatList
import ProductCardFlatList from '../../components/common/CommonCards/ProductCard/ProductCardFlatList';

//product review star icon
import ReviewStar from '../../assets/icons/productreviewstar.png';

//POPULAR_PRODUCT_DEMO_DATA
import {POPULAR_PRODUCT_DEMO_DATA} from '../../components/svg_data/skin_data';

//_renderProductItem
import _renderProductItem from '../../components/common/CommonCards/ProductCard/_renderProductItem';

const Top10Products = () => {
  return (
    <ProductCardFlatList
      data={POPULAR_PRODUCT_DEMO_DATA}
      renderItem={({item, index}) => {
        const Top10ProductSVG = item.top_product_icon;
        const HeartnotLikedSvg = item.heart_like;
        return (
          <_renderProductItem
            POPULAR_PRODUCT_DEMO_DATA={POPULAR_PRODUCT_DEMO_DATA}
            index={index}
            icon={item.icon}
            top_product_icon={<Top10ProductSVG />}
            title={item.name}
            descript={item.description}
            price={item.price}
            rateText={item.star}
            starRate={ReviewStar}
            heart_like={<HeartnotLikedSvg />}
          />
        );
      }}
    />
  );
};

export default Top10Products;
