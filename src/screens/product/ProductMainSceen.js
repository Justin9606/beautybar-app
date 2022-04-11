import React from 'react';

//styled components
import styled from 'styled-components';

//product components
import Top10Products from '../../productcards/Top10Products/Top10Products';
import RoundedCategories from '../../productcards/Categories/RoundedCategories';
import PromoProducts from '../../productcards/PromoProducts/PromoProducts';
import SortByPriceProducts from '../../productcards/SortByPriceProduct/SortByPriceProduct';
import TopReviewProducts from '../../productcards/TopReviewProducts/TopReviewProducts';
import AllVerticalProducts from '../../productcards/AllVerticalProducts/AllVerticalProducts';
import NewestProducts from '../../productcards/NewestProduct/NewestProducts';

//Header
import Header from '../../components/common/Header/Header';

//containers
import ScrollableView from '../../containers/ScrollableView';
import SafeAreaContainer from '../../containers/SafeAreaContainer';
import Spacer from '../../containers/Spacer';

//texts
import Largetext from '../../components/common/Text/LargeText';
import SubHeader from '../../components/common/Text/SubHeader_16px';

//brands svg
import SomeByMi from '../../assets/svg/brands/somebymi.svg';
import Laneige from '../../assets/svg/brands/laneige.svg';
import Nacific from '../../assets/svg/brands/nacific.svg';
import Innisfree from '../../assets/svg/brands/innisfree.svg';
import Natural_Republic from '../../assets/svg/brands/natural_republic.svg';
import Corx from '../../assets/svg/brands/corx.svg';

const brandsData = [
  {
    id: 1,
    brand_svg: SomeByMi,
  },
  {
    id: 2,
    brand_svg: Laneige,
  },
  {
    id: 3,
    brand_svg: Nacific,
  },
  {
    id: 4,
    brand_svg: Natural_Republic,
  },
  {
    id: 5,
    brand_svg: Corx,
  },
  {
    id: 6,
    brand_svg: Innisfree,
  },
  {
    id: 5,
    brand_svg: Corx,
  },
  {
    id: 6,
    brand_svg: Innisfree,
  },
];

const ProductMainScreen = () => {
  return (
    <SafeAreaContainer>
      <Header
        search_right={'search_right'}
        wish_right={'wishlist'}
        appName={'appName'}
        hiUserName={'Hi, Justin'}
      />
      <ScrollableView>
        <Largetext
          title={'Top 10 Products'}
          marginLeft={24}
          textAlign={'left'}
          marginTop={16}
        />
        <Top10Products />
        <SubHeader label={'Categories'} />
        <RoundedCategories />
        <Spacer height={32} />
        <SubHeader
          label={'Popular Brands'}
          seeAll={'seeAll'}
          onPressSeeAllBtn={() => alert('Popular Brands See all Pressed')}
        />
        <Spacer height={24} />
        <PopularBrandsWrap>
          {brandsData.map((item, idx) => {
            const BrandSVG = item.brand_svg;
            return (
              <PopularBrandsContainer key={idx} activeOpacity={0.7}>
                <BrandSvgWrap>
                  <BrandSVG />
                </BrandSvgWrap>
              </PopularBrandsContainer>
            );
          })}
        </PopularBrandsWrap>
        <Spacer height={32} />
        <PromoProducts />
        <Largetext
          title={'Sorting by Price'}
          marginLeft={24}
          textAlign={'left'}
          marginTop={32}
          marginBottom={0.1}
        />

        <SortByPriceProducts />
        <Largetext
          title={'Newest Products'}
          marginLeft={24}
          textAlign={'left'}
          marginBottom={28}
        />
        <NewestProducts />
        <TopReviewProducts />
        <Largetext
          title={'All Products'}
          marginLeft={24}
          textAlign={'left'}
          marginTop={32}
          marginBottom={24}
        />

        <AllVerticalProducts />
        <Spacer height={130} />
      </ScrollableView>
    </SafeAreaContainer>
  );
};

export default ProductMainScreen;

const PopularBrandsWrap = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  padding-left: 24px;
`;

const PopularBrandsContainer = styled.TouchableOpacity`
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.06);
  background-color: #ffffff;
  width: 100px;
  height: 54px;
  border-radius: 4px;
  margin-right: 14px;
  margin-bottom: 12px;
  justify-content: center;
  align-items: center;
`;

const BrandSvgWrap = styled.View`
  z-index: 1;
`;
