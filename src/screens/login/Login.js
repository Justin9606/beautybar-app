import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {LoginUser} from '../../store/reducer/auth_reducer/Auth_Reducer';

//react-navigation-native
import {useNavigation} from '@react-navigation/native';

//react-i18next
import {useTranslation} from 'react-i18next';

//styled components
import styled from 'styled-components';

//Containers
import SafeAreaContainer from '../../containers/SafeAreaContainer';
import ScrollableView from '../../containers/ScrollableView';
import ControlAlignCenter from '../../containers/ControlAlignCenter';
import Spacer from '../../containers/Spacer';

//Texts
import SmallText from '../../components/common/Text/SmallText';
import Largetext from '../../components/common/Text/LargeText';

//Common ui
import Button from '../../components/common/Buttons/Button';
import TextInput from '../../components/common/TextInputs/TextInput';

//

//Login Components starts
const Login = () => {
  const navigation = useNavigation();
  const {t} = useTranslation();
  const dispatch = useDispatch();

  const [phone, setPhone] = useState(null);

  const PhoneCheck = useSelector(state => {
    return state.persistedReducer.AuthReducer;
  });

  const signIn = () => {
    if (PhoneCheck.UserPhone == phone) {
      dispatch(LoginUser(true));
    } else {
      if (phone != null && phone != ' ') {
        navigation.navigate('Verification', {Phone: phone});
      } else {
        alert('Please Enter Phone Number');
      }
    }
  };

  const signInWith = ['Enter your registered', 'Phone Number to Sign in'];

  return (
    <>
      {/* <Header /> */}

      <ScrollableView
        contentContainerStyle={{justifyContent: 'center', flex: 1}}>
        <Spacer height={26} />
        <Largetext title={t('welcomeback')} textAlign="center" />
        <ControlAlignCenter>
          {signInWith.map(signInText => {
            return (
              <SmallText
                key={signInText}
                textAlign="center"
                title={signInText}
              />
            );
          })}
        </ControlAlignCenter>
        <Spacer height={36} />

        <TextInput
          // hasCountryCode={'hasCountryCode'}
          inputeLabel={t('phoneNumber')}
          placeholder="01083960506"
          keyboardType={'phone-pad'}
          onChangeText={e => setPhone(e)}
        />
        <Spacer height={35} />
        <Button
          title={t('signIn')}
          onPress={signIn}
          // onPress={()=>Login()}
        />
      </ScrollableView>
      <HavingTroubleWrap onPress={() => alert('Having trouble?')}>
        <SmallText
          title="Trouble Signing in?"
          width={140}
          height={30}
          textAlign="center"
          color={'#7F7E83'}
        />
      </HavingTroubleWrap>
    </>
  );
};

export default Login;

const HavingTroubleWrap = styled.Pressable`
  align-self: center;

  text-align: center;

  position: absolute;
  bottom: 50px;
`;
