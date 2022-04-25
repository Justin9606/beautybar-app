import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';


//normalizer
import { normalize } from '../../constants/responsive';

//react-native-bouncy-checkbox
import BouncyCheckbox from 'react-native-bouncy-checkbox';

//
import styled from 'styled-components';

//containers
import SafeAreaContainer from '../../containers/SafeAreaContainer';
import Spacer from '../../containers/Spacer';
import ScrollableView from '../../containers/ScrollableView';
import ControlAlignCenter from '../../containers/ControlAlignCenter';
import Absolutebutton from '../../containers/AbsoluteButton';

//common ui
import Button from '../../components/common/Buttons/Button';
import Header from '../../components/common/Header/Header';
import Textinput from '../../components/common/TextInputs/TextInput';

//skin profile svg step_1
import Step_1 from '../../assets/svg/skin_profiling/step_1.svg';
import Step_1_Profile from '../../assets/svg/skin_profiling/step_1_profile.svg';

//Texts
import Largetext from '../../components/common/Text/LargeText';

const SkinProfile_1 = () => {
  const navigation = useNavigation();
  const [gender, setgender] = useState(false);
  const [name, setname] = useState();
  const [age, setage] = useState();

  const phone = useSelector((state) => { return state.persistedReducer.UserPhone })


  const NextStep = () => {

    const data1 = { name, gender, age, phone }

    if (name != null && name != undefined && gender != undefined && age != null && age != undefined) {
      navigation.navigate('SkinProfile_2', { data1 })
    }
    else {
      alert('Please fill all filed')
    }

  }


  return (
    <SafeAreaContainer>
      <Header back_with_text={'back_with_text'} />
      <Spacer height={normalize(18)} />
      <ControlAlignCenter>
        <Step_1 />
      </ControlAlignCenter>

      <ScrollableView>
        <ControlAlignCenter>
          <Spacer height={normalize(40)} />
          <Step_1_Profile />
          <Largetext
            textAlign={'center'}
            title="Complete your profile"
            marginTop={24}
          />
        </ControlAlignCenter>
        <Textinput
          inputeLabel={'Name'}
          placeholder={'Enter your name'}
          marginTop={normalize(40)}
          onChangeText={(e) => setname(e)}
        />
        <Textinput
          inputeLabel={'Age'}
          placeholder={'Enter your age'}
          marginTop={normalize(23)}
          keyboardType={'phone-pad'}
          onChangeText={(e) => setage(e)}
        />
        <GenderSelectionWrap>
          <LabelWrap>Gender</LabelWrap>
          <BounyCheckBoxContainer>
            <BouncyCheckbox
              textStyle={{
                textDecorationLine: 'none',
              }}
              fillColor={'#E74779'}
              text="Female"
              onPress={() => setgender('Female')}
              isChecked={gender == 'Female' ? true : false}
              disableBuiltInState
            />
            <Spacer width={40} />
            <BouncyCheckbox
              isChecked={gender == 'Male' ? true : false}
              fillColor={'#E74779'}
              onPress={() => setgender('Male')}
              text="Male"
              disableBuiltInState
              textStyle={{
                textDecorationLine: 'none',
              }}

            />
          </BounyCheckBoxContainer>
        </GenderSelectionWrap>
      </ScrollableView>
      <Absolutebutton>
        <Button
          title="Next"
          onPress={() => NextStep()}
        />
      </Absolutebutton>
    </SafeAreaContainer>
  );
};
export default SkinProfile_1;

const GenderSelectionWrap = styled.View`
  margin-horizontal: 24px;
  margin-top: 23px;
`;
const BounyCheckBoxContainer = styled.View`
  flex-direction: row;
  margin-top: 16px;
`;

const LabelWrap = styled.Text`
  font-size: 14px;
  font-weight: 500;
  color: #323234;
  line-height: 17px;
`;
