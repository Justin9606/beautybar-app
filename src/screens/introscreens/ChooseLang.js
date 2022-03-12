//React
import React, {useRef, useCallback, useMemo} from 'react';
//styled components
import styled from 'styled-components';
//react navigation native
import {useNavigation} from '@react-navigation/native';
//Bounycheck box from react-native-bouncy
import BouncyCheckbox from 'react-native-bouncy-checkbox';

//normalize
import {normalize} from '../../components/constants/responsive';

//custom bottomsheet modal
// import Bottomsheet from '../../common/Modals/BottomSheet';

//container
import SafeAreaContainer from '../../components/containers/SafeAreaContainer';

//Texts
import Largetext from '../../components/common/Text/LargeText';
import Smalltext from '../../components/common/Text/SmallText';

//ui
import Button from '../../components/common/Buttons/Button';
import Header from '../../components/common/Header/Header';

//  <BouncyCheckbox
//    textStyle={{
//      textDecorationLine: 'none',
//    }}
//    fillColor={'#E74779'}
//    text="English"
//  />;

const ChooseLang = () => {
  const navigation = useNavigation();

  // const bottomSheetModalRef = useRef(null);

  const snapPoints = useMemo(() => ['50%'], []);

  // const handleOpen = useCallback(index => {
  //   bottomSheetModalRef.current?.snapToIndex(index);
  // });

  return (
    <SafeAreaContainer>
      <Header lang_select_left={'language'} onPressLang={() => handleOpen(0)} />

      {/* <Bottomsheet
        bottomSheetModalRef={bottomSheetModalRef}
        index={-1}
        snapPoints={snapPoints}
        enablePanDownToClose={true}
        enableOverDrag={false}></Bottomsheet> */}
      <Scrollable>
        <LogoWrapp>
          <Logo>Logo</Logo>
        </LogoWrapp>
        <PolicyTextWrap>
          <Largetext textAlign={'center'} title="Beauty Bar" />
          <Smalltext
            color={'#7F7E83'}
            width={340}
            height={35}
            textAlign={'center'}
            title="By clicking Sign Up or Sign In, you agree with our Terms of Service and Privacy Policy"
          />
        </PolicyTextWrap>
        <ButtonWrap>
          <Button
            title={'Sign In'}
            onPress={() => {
              try {
                navigation.push('Login');
              } catch (err) {
                console.log(err);
              }
            }}
          />
        </ButtonWrap>
      </Scrollable>
    </SafeAreaContainer>
  );
};
export default ChooseLang;

const Scrollable = styled.ScrollView`
  background-color: #fff;
  z-index: -1;
`;

const LogoWrapp = styled.View`
  width: 236px;
  height: 228px;
  background-color: #f4f4f4;
  border-radius: 20px;
  justify-content: center;
  align-self: center;
  align-items: center;
  margin-top: 28px;
`;
const Logo = styled.Text`
  font-family: Montserrat-Medium;
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 29px;
  text-align: center;
  color: #c4c4c4;
`;
const PolicyTextWrap = styled.View`
  justify-content: center;
  align-items: center;
  margin-top: 32px;
`;

const ButtonWrap = styled.View`
  margin-top: ${normalize(48)}px;
`;

const CloseButtonWrap = styled.TouchableOpacity`
  position: absolute;
  right: 25px;
  top: 25px;
`;
