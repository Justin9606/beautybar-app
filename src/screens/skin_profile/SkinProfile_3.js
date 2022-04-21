import React from 'react';

//react-navigation/native
import {useNavigation} from '@react-navigation/native';

//styled components
import styled from 'styled-components';

//normalizer
import {normalize} from '../../constants/responsive';

//containers
import Viewcontainer from '../../containers/ViewContainer';
import Spacer from '../../containers/Spacer';
import ScrollableView from '../../containers/ScrollableView';
import ControlAlignCenter from '../../containers/ControlAlignCenter';

//common ui
import Button from '../../components/common/Buttons/Button';
import Header from '../../components/common/Header/Header';

//skin profile svg step_1
import Step_2 from '../../assets/svg/skin_profiling/step_3.svg';
import Step_2_Profile from '../../assets/svg/skin_profiling/step_2_skin_profile.svg';

//Texts
import Largetext from '../../components/common/Text/LargeText';
import Smalltext from '../../components/common/Text/SmallText';

const data = [
  {text: 'Acne'},
  {text: 'Seburn'},
  {text: 'Sensitivity'},
  {text: 'Acne Scars'},
  {text: 'Big Pores'},
  {text: 'Eczerna'},
  {text: 'Blushing'},
];

const ToggleableButton = ({onPress, title, isActive}) => {
  return (
    <PressableWrap onPress={onPress} isActive={isActive}>
      <Title>{title}</Title>
    </PressableWrap>
  );
};

const SkinProfile_3 = () => {
  const navigation = useNavigation();
  return (
    <Viewcontainer>
      <Header skip_right={'skip'} back_with_text={'back_with_text'} />
      <Spacer height={normalize(18)} />
      <ControlAlignCenter>
        <Step_2 />
      </ControlAlignCenter>
      <ScrollableView>
        <ControlAlignCenter>
          <Spacer height={normalize(40)} />
          <Step_2_Profile />

          <Largetext textAlign={'center'} title="Skin Profile" marginTop={24} />
          <Spacer height={normalize(16)} />
          <Smalltext
            title={'You can select more than option'}
            textAlign={'center'}
            color={'#7F7E83'}
          />
        </ControlAlignCenter>
        <Spacer height={normalize(32)} />
        <Container>
          {data.map((item, index) => {
            return <ToggleableButton title={item.text} key={index} />;
          })}
        </Container>
      </ScrollableView>
      <BtnWrap>
        <Button
          title={'Next'}
          onPress={() => navigation.navigate('SkinProfile_4')}
        />
      </BtnWrap>
    </Viewcontainer>
  );
};

export default SkinProfile_3;

const Container = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  padding-horizontal: 23px;
`;

const PressableWrap = styled.Pressable`
  border-radius: 24px;
  background-color: ${props => (props.isActive ? '#E74779' : '#faebf1')};
  justify-content: center;
  align-items: center;
  margin-left: 16px;
  margin-bottom: 16px;
`;

const Title = styled.Text`
  margin-horizontal: 16px;
  margin-vertical: 8px;
  font-family: Montserrat-Medium;
  font-weight: 600;
  font-size: 14px;
  text-align: center;
  color: ${props => (props.isActive ? '#FFFFFF' : '#e74779')};
`;

const BtnWrap = styled.View`
  background-color: #fff;
  box-shadow: 0px -5px 19px rgba(5, 7, 22, 0.06);
  padding-vertical: 22.25px;
`;
