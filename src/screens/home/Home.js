import React from 'react';
import { verticalScale, moderateScale } from 'react-native-size-matters';
import { Image } from 'react-native';

import SafeAreaContainer from '../../components/containers/SafeAreaContainer';
import ScrollableView from '../../components/containers/ScrollableView';
import Spacer from '../../components/containers/Spacer';
import Header from '../../components/common/Header/Header';
import SubHeader from '../../components/common/Text/SubHeader_16px';
import Slider from '../../components/CursonSlider';
import HorizontalMenue from '../../components/HorizontalMenue'
import HorizontalProduct from '../../components/HorizontalProduct'

import { CarouselImages, BarCodeSkinWrap, BarCodeSkinAnalContainer, SanText } from './styledcomp';
import styles from './styles';

import BarScan from '../../assets/svg/common/bar_scan.svg';
import SkinAnalysis from '../../assets/svg/common/skin_analysiz.svg';

import Banner from '../../assets/svg/etc/main_carousel.png'




const Home = () => {

  console.log('Banner', Banner)

  return (
    <SafeAreaContainer>
      <Header notif_right={'notification'} wish_right={'wishlist'} search_right={'search'} />

      <ScrollableView>

        <Slider CarouselImages={CarouselImages} />

        <Spacer height={moderateScale(27)} />

        <BarCodeSkinWrap>

          <BarCodeSkinAnalContainer style={styles.TabStyle}>
            <BarScan />
            <SanText>Bar Scan</SanText>
          </BarCodeSkinAnalContainer>

          <Spacer width={moderateScale(19)} />

          <BarCodeSkinAnalContainer style={styles.TabStyle}>
            <SkinAnalysis />
            <SanText>Skin Analysis</SanText>
          </BarCodeSkinAnalContainer>

        </BarCodeSkinWrap>

        <Spacer height={verticalScale(32)} />

        <SubHeader label={'Categories'} paddingHorizontal={moderateScale(28)}
          seeAllLabel={'See all'} seeAll={'seeAll'} />


        <HorizontalMenue />

        <Image source={Banner} style={styles.img} />


        <Spacer height={verticalScale(32)} />

        <SubHeader label={'Popular Products'} paddingHorizontal={moderateScale(28)}
          seeAllLabel={'See all'} seeAll={'seeAll'} />


        <HorizontalProduct/>


      </ScrollableView>
    </SafeAreaContainer>
  );
};

export default Home;


