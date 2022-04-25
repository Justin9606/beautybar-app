import React from 'react';

//react-navigation/native
import { useNavigation } from '@react-navigation/native';

//styled components
import styled from 'styled-components';

//normalizer
import { normalize } from '../../constants/responsive';

//containers
import SafeAreaContainer from '../../containers/SafeAreaContainer';
import Spacer from '../../containers/Spacer';
import ScrollableView from '../../containers/ScrollableView';
import Absolutebutton from '../../containers/AbsoluteButton';
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
import { useState } from 'react';

const data = [
  { text: 'Acne', isselect: false },
  { text: 'Seburn', isselect: false },
  { text: 'Sensitivity', isselect: false },
  { text: 'Acne Scars', isselect: false },
  { text: 'Big Pores', isselect: false },
  { text: 'Eczerna', isselect: false },
  { text: 'Blushing', isselect: false },
];

const ToggleableButton = ({ onPress, title, isActive }) => {
  return (
    <PressableWrap onPress={onPress} isActive={isActive}>
      <Title>{title}</Title>
    </PressableWrap>
  );
};

const SkinProfile_3 = (props) => {


  const data2 = props?.route?.params?.data2;
  const navigation = useNavigation();
  const [SkinIssues, setSkinIssues] = useState();
  let IssuesOfSkin = []

  const SELECTITEM = (index) => {

    let arr = data.map((v, i) => {

      if (index == i) { v.isselect = !v.isselect }
      return { ...v }
    })

    setSkinIssues(arr)

  }

  const NextStep = () => {

    const data3 = { ...data2, IssuesOfSkin }
    for (var i = 0; i < SkinIssues.length; i++) {

      if (SkinIssues[i]?.isselect == true) {
        IssuesOfSkin.push(SkinIssues[i]?.text)
      }
    }

    console.log('data3', IssuesOfSkin.length)


    if (IssuesOfSkin.length > 1) {
      navigation.navigate('SkinProfile_4', {data3})
    }
    else {
      alert('Please select at least on tag')
    }

  }


  return (
    <SafeAreaContainer>
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
            width={295}
            height={24}
            color={'#7F7E83'}
          />
        </ControlAlignCenter>
        <Spacer height={normalize(32)} />
        <Container>
          {data.map((item, index) => {
            let text = item.text
            return <ToggleableButton title={text} key={index} isActive={item?.isselect} onPress={() => SELECTITEM(index)} />;
          })}
        </Container>
      </ScrollableView>
      <Absolutebutton>
        <Button
          title={'Next'}
          onPress={() => NextStep()}
        />
      </Absolutebutton>
    </SafeAreaContainer>
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
  background-color:#faebf1;
  justify-content: center;
  border-color: ${props => (props.isActive ? '#E74779' : '#faebf1')};
  border-width:2px;
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
  color:#e74779;
`;
