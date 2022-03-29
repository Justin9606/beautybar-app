import React from 'react';

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
import Smalltext from '../../components/common/Text/SmallText';
import Largetext from '../../components/common/Text/LargeText';

//Common ui
import Button from '../../components/common/Buttons/Button';
import Header from '../../components/common/Header/Header';
import TextInput from '../../components/common/TextInputs/TextInput';

//

//Login Components starts
const Login = () => {
  const navigation = useNavigation();
  const {t} = useTranslation();
  return (
    <>
      {/* <Header /> */}

      <ScrollableView
        contentContainerStyle={{justifyContent: 'center', flex: 1}}>
        <Spacer height={26} />
        <Largetext title={t('welcomeback')} textAlign="center" />
        <ControlAlignCenter>
          <Smalltext
            textAlign="center"
            title="Enter your registered Phone Number to Sign in"
            width={200}
            height={35}
          />
        </ControlAlignCenter>
        <Spacer height={36} />

        <TextInput
          // hasCountryCode={'hasCountryCode'}
          inputeLabel={t('phoneNumber')}
          placeholder="01083960506"
          keyboardType={'phone-pad'}
        />
        <Spacer height={35} />
        <Button
          title={t('signIn')}
          onPress={() => navigation.navigate('Verification')}
        />
      </ScrollableView>
      <HavingTroubleWrap onPress={() => alert('Having trouble?')}>
        <Smalltext
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