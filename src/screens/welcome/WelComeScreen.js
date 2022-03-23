//React
import React from 'react';
//styled components
import styled from 'styled-components';
//react navigation native
import {useNavigation} from '@react-navigation/native';

// //react-i18next
import {useTranslation} from 'react-i18next';

//normalize
import {normalize} from '../../constants/responsive';

//container
import SafeAreaContainer from '../../containers/SafeAreaContainer';

//Texts
import Largetext from '../../components/common/Text/LargeText';
import Smalltext from '../../components/common/Text/SmallText';

//ui
import Button from '../../components/common/Buttons/Button';

const WelComeScreen = () => {
  const navigation = useNavigation();
  const {t} = useTranslation();

  console.log(t);

  return (
    <SafeAreaContainer>
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
            title={t('agreementToThePolicyandTerms')}
          />
        </PolicyTextWrap>
        <ButtonWrap>
          <Button
            title={t('start')}
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
export default WelComeScreen;

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
