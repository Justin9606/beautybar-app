import React from 'react';

import {useNavigation} from '@react-navigation/native';

import styled from 'styled-components';

//normalizer
import {normalize} from '../../constants/responsive';

//containers
import Viewcontainer from '../../containers/ViewContainer';
import Spacer from '../../containers/Spacer';
import ScrollableView from '../../containers/ScrollableView';
import ControlAlignCenter from '../../containers/ControlAlignCenter';

//common
import Button from '../../components/common/Buttons/Button';
import Header from '../../components/common/Header/Header';

//skin profile svg step_1
import Step_4 from '../../assets/svg/skin_profiling/step_4.svg';
import Step_4_Profile from '../../assets/svg/skin_profiling/step_4_photo.svg';
import PhotoWarning from '../../assets/svg/skin_profiling/step_4_photo_warning.svg';
import TakeSelfieExample from '../../assets/svg/skin_profiling/take_selfie_example.svg';

//Texts
import Largetext from '../../components/common/Text/LargeText';

const SkinProfile_4 = () => {
  const navigation = useNavigation();
  console.log(navigation);
  return (
    <Viewcontainer>
      <Header skip_right={'skip'} back_with_text={'back_with_text'} />
      <Spacer height={normalize(18)} />
      <ControlAlignCenter>
        <Step_4 />
      </ControlAlignCenter>
      <ScrollableView>
        <ControlAlignCenter>
          <Spacer height={normalize(40)} />
          <Step_4_Profile />

          <Largetext textAlign={'center'} title="User Photo" marginTop={24} />
        </ControlAlignCenter>
        <WarningWrap>
          <PhotoWarning />
          <Spacer width={8} />
          <WarnText>Make sure you don’t wear makeup and glasses</WarnText>
        </WarningWrap>
        <ControlAlignCenter>
          <TakeSelfieText>Take a Selfie</TakeSelfieText>
          <TakeSelfieExample />
        </ControlAlignCenter>
        <Spacer height={normalize(120)} />
      </ScrollableView>
      <BtnWrap>
        <Button title={'Next'} onPress={() => navigation.navigate('Home')} />
      </BtnWrap>
    </Viewcontainer>
  );
};

export default SkinProfile_4;

const WarningWrap = styled.View`
  flex-direction: row;
  background-color: rgba(235, 87, 87, 0.09);
  border: 0.5px solid #eb5757;
  border-radius: 8px;
  padding-vertical: 6px;
  padding-horizontal: 15px;
  margin-horizontal: 24px;
  margin-top: 24px;
  margin-bottom: 34px;
  height: 36px;
  justify-content: center;
  align-items: center;
`;

const WarnText = styled.Text`
  font-family: Montserrat-Medium;
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 24px;
  text-align: center;
  color: #323234;
`;

const TakeSelfieText = styled.Text`
  position: absolute;
  z-index: 1;
  text-align: center;
  top: 128px;
  color: #fff;
  font-size: 14px;
  font-weight: 500;
  font-family: Montserrat-Medium;
`;

const BtnWrap = styled.View`
  background-color: #fff;
  box-shadow: 0px -5px 19px rgba(5, 7, 22, 0.06);
  padding-vertical: 22.25px;
`;
