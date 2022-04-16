import React from 'react';

//conainers
import SafeAreaContainer from '../../containers/SafeAreaContainer';
import ScrollableView from '../../containers/ScrollableView';
import Spacer from '../../containers/Spacer';

//Texts
import SubHeader from '../../components/common/Text/SubHeader_16px';

//common
import Header from '../../components/common/Header/Header';
import Slider from '../../components/CursonSlider';

//Rounded Categories section
import RoundedCategories from '../../productcards/Categories/RoundedCategories';

//Popular production section
import PopularProducts from '../../productcards/PopularProducts/PopularProducts';
//Best match products
import BestMathProducts from '../../productcards/BestMatchProducts/BestMatchProducts';

import {
  CarouselImages,
  BarCodeSkinWrap,
  BarCodeSkinAnallContainer,
  SanText,
} from './styledcomp';
import styled from 'styled-components';

import BarScan from '../../assets/svg/common/bar_scan.svg';
import SkinAnalysis from '../../assets/svg/common/skin_analysiz.svg';

import AnalysisResultSVG from '../../assets/svg/etc/analysis_result.svg';

const Home = () => {
  return (
    <>
      <Header
        notif_right={'notification'}
        wish_right={'wishlist'}
        search_left={'search_left'}
        center_title={'hasCenterTitle'}
      />
      <ScrollableView>
        <Slider CarouselImages={CarouselImages} />
        <Spacer height={27} />
        <BarCodeSkinWrap>
          <BarCodeSkinAnallContainer activeOpacity={0.7}>
            <BarScan />
            <SanText>Bar Scan</SanText>
          </BarCodeSkinAnallContainer>

          <Spacer width={19} />

          <BarCodeSkinAnallContainer activeOpacity={0.7}>
            <SkinAnalysis />
            <SanText>Skin Analysis</SanText>
          </BarCodeSkinAnallContainer>
        </BarCodeSkinWrap>
        <Spacer height={32} />
        <SubHeader label={'Categories'} seeAll={'seeAll'} />
        <RoundedCategories />
        <Spacer height={32} />
        <AnaysisResultWrap>
          <AnalysisResultAllTextsWrap>
            <AnalysisTitle>Analysis Your Skin</AnalysisTitle>
            <AnalysisContent>
              to see the analysis of your skin problems
            </AnalysisContent>
            <AnalysisResultBtn
              onPress={() => alert('Analysis Result pressed')}
              activeOpacity={0.7}>
              <AnalysisResultBtnText>Analysis result</AnalysisResultBtnText>
            </AnalysisResultBtn>
          </AnalysisResultAllTextsWrap>
          <SVGWrap>
            <AnalysisResultSVG />
          </SVGWrap>
        </AnaysisResultWrap>
        <Spacer height={32} />
        <SubHeader
          label={'Best Match Products '}
          seeAll={'seeAll'}
          onPressSeeAllBtn={() => alert('Best Match See all Pressed')}
        />
        <BestMathProducts />
        <SubHeader
          label={'Popular Products'}
          seeAll={'seeAll'}
          onPressSeeAllBtn={() => alert('Popular Product See all Pressed')}
        />
        <PopularProducts />
        {/* WILL BE REMOVED */}
        <Spacer height={100} />
        {/* WILL BE REMOVED */}
      </ScrollableView>
    </>
  );
};

export default Home;

const AnaysisResultWrap = styled.View`
  background-color: #fce8ef;
  margin-horizontal: 24px;
  border-radius: 16px;
  height: 154px;
`;

const AnalysisResultAllTextsWrap = styled.View`
  padding-top: 26px;
  padding-left: 20px;
`;

const SVGWrap = styled.View`
  position: absolute;
  right: 0;
  bottom: 0;
`;

const AnalysisTitle = styled.Text`
  font-family: Montserrat-Medium;
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 17px;

  /* Black 100 */
  color: #323234;
`;

const AnalysisContent = styled.Text`
  font-family: Montserrat-Medium;
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 18px;
  margin-top: 7px;
  width: 130px;
  align-items: center;
  /* Black 50 */
  color: #7f7e83;
`;

const AnalysisResultBtn = styled.TouchableOpacity`
  background: #e74779;
  width: 139px;
  height: 33px;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  margin-top: 12px;

  margin-bottom: 21px;
`;

const AnalysisResultBtnText = styled.Text`
  font-family: Montserrat-Medium;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
  /* identical to box height */
  color: #ffffff;
`;
