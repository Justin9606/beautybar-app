import React, {useRef} from 'react';
import {FlatList} from 'react-native';
import styled from 'styled-components';

//react navigation native
import {useNavigation} from '@react-navigation/native';

//containers
import SafeAreaContainer from '../../components/containers/SafeAreaContainer';
import Absolutebutton from '../../components/containers/AbsoluteButton';

//normalizer
import {normalize} from '../../components/constants/responsive';

//ui
import Header from '../../components/common/Header/Header';
import Button from '../../components/common/Buttons/Button';

//onboarding svgs
import Onboarding_1 from '../../assets/svg/onboarding/onboarding_1.svg';
import Onboarding_2 from '../../assets/svg/onboarding/onboarding_2.svg';
import Onboarding_3 from '../../assets/svg/onboarding/onboarding_3.svg';
import OnboardingRightArrow from '../../assets/svg/onboarding/onboarding_right_arrow.svg';

const onboardinData = [
  {
    svg: Onboarding_1,
    largeText: 'Skincare & Makeup',
    smallText:
      'Dapatkan rekomendasi skincare and makeup sesuai jenis kulit anda',
  },
  {
    svg: Onboarding_2,
    largeText: 'Skincare & Makeup',
    smallText:
      'Dapatkan rekomendasi skincare and makeup sesuai jenis kulit anda',
  },
  {
    svg: Onboarding_3,
    largeText: 'Skincare & Makeup',
    smallText:
      'Dapatkan rekomendasi skincare and makeup sesuai jenis kulit anda',
  },
];

const _renderItem = ({svg, largeText, smallText}) => {
  return (
    <Container>
      <SvgWrap>{svg}</SvgWrap>
      <LargeText>{largeText}</LargeText>
      <SmallText>{smallText}</SmallText>
    </Container>
  );
};

const Onboarding = () => {
  const ref = useRef();
  const navigation = useNavigation();

  return (
    <SafeAreaContainer>
      <Header skip_right={'skip'} />
      <FlatList
        ref={ref}
        showsHorizontalScrollIndicator={false}
        horizontal
        pagingEnabled
        data={onboardinData}
        renderItem={({item, index}) => {
          const SVG = item.svg;
          return (
            <_renderItem
              key={index}
              svg={<SVG />}
              largeText={item.largeText}
              smallText={item.smallText}
            />
          );
        }}
      />

      <Absolutebutton>
        <Button
          title={'Start'}
          onPress={() => navigation.navigate('ChooseLang')}
        />
      </Absolutebutton>
    </SafeAreaContainer>
  );
};

export default Onboarding;

const Container = styled.View`
  align-items: center;
  margin-horizontal: 24px;
`;

const SvgWrap = styled.View`
  justify-content: center;
  align-items: center;
  align-self: center;
`;

const LargeText = styled.Text`
  font-family: Montserrat-Bold;
  font-weight: bold;
  font-size: 24px;
  color: #323234;
  text-align: center;
  line-height: 29px;
  font-style: normal;
  margin-top: ${normalize(60)}px;
`;

const SmallText = styled.Text`
  width: 328px;
  height: 44px;
  font-family: Montserrat-Medium;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 22px;
  text-align: center;
  color: #7f7e83;
  margin-top: 16px;
`;
