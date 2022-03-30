import React from 'react';

//common category card
import CategoryCardFlatList from '../../components/common/CommonCards/CategoryCard/CategoryCardFlatList';
//_rendercategoryItems
import _renderCategoryItem from '../../components/common/CommonCards/CategoryCard/_renderCategoryItem';
//category data
import {CATEGORY_ROUND_DATA} from '../../components/svg_data/skin_data';

const RoundedCategories = () => {
  return (
    <CategoryCardFlatList
      data={CATEGORY_ROUND_DATA}
      horizontal
      showsHorizontalScrollIndicator={false}
      renderItem={({item, index}) => {
        const SVG = item?.svg;
        return (
          <_renderCategoryItem
            title={item?.name}
            svg={<SVG />}
            idx={index}
            CATEGORY_ROUND_DATA={CATEGORY_ROUND_DATA}
          />
        );
      }}
    />
  );
};

export default RoundedCategories;
