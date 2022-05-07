import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useDispatch,useSelector } from 'react-redux';

//function
import {UserPhone} from '../../store/reducer/auth_reducer/Auth_Reducer'


//validator
import {
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from 'react-native-confirmation-code-field';

//styled components
import styled from 'styled-components';

import VerificationCells from './VerificationCells';

//normalize from constants
import { normalize } from '../../constants/responsive';

//containers
import SafeAreaContainer from '../../containers/SafeAreaContainer';
import Spacer from '../../containers/Spacer';
import ScrollableView from '../../containers/ScrollableView';
import ControlAlignCenter from '../../containers/ControlAlignCenter';

//common ui
import Button from '../../components/common/Buttons/Button';
import Header from '../../components/common/Header/Header';

//Texts
import Largetext from '../../components/common/Text/LargeText';
import Smalltext from '../../components/common/Text/SmallText';

//SVG
import VerifySvg from '../../assets/svg/login/verification.svg';

const CELL_COUNT = 4;
const Verification = (props) => {

  const [value, setValue] = useState('2222');
  const ref = useBlurOnFulfill({ value, cellCount: CELL_COUNT });
  const [propss, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });

  const navigation = useNavigation();
  const dispatch = useDispatch()
  const Phone = props?.route?.params?.Phone



  const MoveToRegisteration = () => {
    navigation.navigate('SkinProfile_1')
    dispatch(UserPhone(Phone))
  }


  return (
    <SafeAreaContainer>
      <Header back_with_rec_icon={'back_with_rec_icon'} />
      <ScrollableView>
        <Spacer height={normalize(30)} />
        <ControlAlignCenter>
          <VerifySvg />
        </ControlAlignCenter>
        <Spacer height={normalize(40)} />
        <Largetext title={'Verifying your account'} textAlign={'center'} />
        <ControlAlignCenter>
          <Smalltext
            title={'We have just sent you 4 digit code via your phone number'}
            textAlign={'center'}
            width={250}
            height={40}
            color={'#7F7E83'}
          />
        </ControlAlignCenter>
        <Spacer height={12} />
        <PhoneNumber>{Phone}</PhoneNumber>
        <Spacer height={32} />
        <VerificationCells
          // ref={ref}
          onChangeText={text => setValue(text)}
          value={value}
          {...propss}
          codeFieldRoot={styles.root}
          renderCells={({ index, symbol, isFocused }) => (
            <View
              onLayout={getCellOnLayoutHandler(index)}
              key={index}
              style={[styles.cellRoot, isFocused && styles.focusCell]}>
              <Title
                key={index}
                style={[styles.cell, isFocused && styles.focusCell]}
                onLayout={getCellOnLayoutHandler(index)}>
                {symbol || (isFocused ? <Cursor /> : null)}
              </Title>
            </View>
          )}
        />
        <Spacer height={32} />
        <Button
          title="Verify"
          onPress={() => {
            MoveToRegisteration();
          }}
        />
        <Spacer height={normalize(32)} />
        <ControlAlignCenter>
          <Smalltext
            title="Didn’t receive code? Resend"
            color={'#7F7E83'}
            width={200}
            height={17}
            textAlign={'center'}

          />
        </ControlAlignCenter>
      </ScrollableView>
    </SafeAreaContainer>
  );
};

export default Verification;

const styles = StyleSheet.create({
  root: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  cellRoot: {
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#fbf4f5',
    backgroundColor: '#fbf4f5',
    borderWidth: 1,
    marginHorizontal: 10,
    borderRadius: 14,
  },
  cell: {
    fontFamily: 'Montserrat-Medium',
    fontWeight: 'bold',
    width: 64,
    height: 64,
    color: '#323234',
    fontSize: 32,
    textAlign: 'center',
    borderRadius: 12,
    paddingTop: 11,
  },
  focusCell: {
    borderColor: '#e74779',
    borderWidth: 1,
  },
  cursor: {},
});

const PhoneNumber = styled.Text`
  text-align: center;
  font-family: Montserrat-Medium;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  color: #323234;
`;

const Title = styled.Text``;
