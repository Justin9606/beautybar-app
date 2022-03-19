import React, { useRef } from 'react';



//react-navigation-native
import { useNavigation } from '@react-navigation/native';

//styled components
import styled from 'styled-components';

//normalize from constants
import { normalize } from '../../components/constants/responsive';

//Containers
import SafeAreaContainer from '../../components/containers/SafeAreaContainer';
import ScrollableView from '../../components/containers/ScrollableView';
import ControlAlignCenter from '../../components/containers/ControlAlignCenter';
import Spacer from '../../components/containers/Spacer';
import Horizontalline from '../../components/containers/HorizontalLine';
import Row from '../../components/containers/Row';

//Texts
import Smalltext from '../../components/common/Text/SmallText';
import Largetext from '../../components/common/Text/LargeText';

//Common ui
import Button from '../../components/common/Buttons/Button';
import Header from '../../components/common/Header/Header';
import TextInput from '../../components/common/TextInputs/TextInput';

//SVG
import Gmail from '../../assets/svg/login/gmail.svg';
import Kakao from '../../assets/svg/login/kakao.svg';
import Apple from '../../assets/svg/login/apple.svg';
import Facebook from '../../assets/svg/login/facebook.svg';

import { View, Text, TouchableOpacity } from 'react-native';
import { Modalize } from 'react-native-modalize'
import StringsOfLanguages from '../../assets/languages';

const data = [
  {
    svg: Gmail,
  },
  {
    svg: Kakao,
  },
  {
    svg: Apple,
  },
  {
    svg: Facebook,
  },
];

const allSocialSign = index => {
  if (index === 0) {
    alert('Gmail');
  } else if (index === 1) {
    alert('Kakao');
  } else if (index === 2) {
    alert('Apple');
  } else if (index === 3) {
    alert('Facebook');
  }

  return index;
};

//

//Login Components starts
const Login = () => {

  const modalizeRef = useRef(null);

  const onOpen = () => {
    modalizeRef.current?.open();
  };

  const navigation = useNavigation();

  const settext = (value) => {
    StringsOfLanguages.setLanguage(value);
    
    
  };

  const close = (value) => {
    settext(value)
    modalizeRef.current?.close();

  };




 



  return (
    <SafeAreaContainer>
      <Header lang_select_left={'language'} />

      <ScrollableView>
        <Spacer height={26} />
        <Largetext title={'Welcome Back'} textAlign="center" />
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
          inputeLabel={'Phone Number'}
          placeholder="01083960506"
          keyboardType={'phone-pad'}
        />
        <Spacer height={35} />
        <Button
          title={StringsOfLanguages?.siginin}
          onPress={() => navigation.navigate('Verification')}
        />

        {/* <ControlAlignCenter>
          <Row>
            <Horizontalline />
            <Spacer width={15} />
            <Smalltext
              textAlign="center"
              title={'or Sign in with'}
              width={70}
              height={40}
              color={'#7F7E83'}
            />
            <Spacer width={15} />
            <Horizontalline />
          </Row>
        </ControlAlignCenter> */}
        {/* 
        <SocialButtonWrap>
          {data.map((item, idx) => {
            const Svg = item.svg;
            return (
              <SocialMediaButtons key={idx} onPress={() => allSocialSign(idx)}>
                {idx === 0 ? null : <Spacer width={16} />}
                <Svg />
              </SocialMediaButtons>
            );
          })}
        </SocialButtonWrap> */}
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



      <TouchableOpacity onPress={onOpen}>
        <Text>Change Language</Text>
      </TouchableOpacity>

      <Modalize ref={modalizeRef} modalHeight={300}
        scrollViewProps={{ showsVerticalScrollIndicator: false }}
        // snapPoint={1000}
        HeaderComponent={
          <View style={{ justifyContent: 'center', alignItems: 'center', padding: 10 }}>
            <Text style={{ fontSize: 17 }}>Select Language</Text>
          </View>
        }
        withHandle={false}>

        <View style={{ width: '90%', marginLeft: '5%' }}>

          <TouchableOpacity 
          onPress={()=>close('en')} style={{ width: '100%', height: 60, backgroundColor: '#E74779', alignItems: 'center', justifyContent: 'center' ,}}>
            <Text style={{ color: '#fff', fontSize: 17 }}>English</Text>
          </TouchableOpacity >
          <TouchableOpacity 
          onPress={()=>close('ko')} style={{ width: '100%', height: 60, backgroundColor: '#E74779', alignItems: 'center', justifyContent: 'center',marginTop:10 }}>
            <Text style={{ color: '#fff', fontSize: 17 }}>Korean</Text>
          </TouchableOpacity >
          <TouchableOpacity 
          onPress={()=>close('ru')} style={{ width: '100%', height: 60, backgroundColor: '#E74779', alignItems: 'center', justifyContent: 'center',marginTop:10 }}>
            <Text style={{ color: '#fff', fontSize: 17 }}>Russian</Text>
          </TouchableOpacity >

        </View>

      </Modalize>

    </SafeAreaContainer>
  );
};

export default Login;

const SocialMediaButtons = styled.Pressable`
  flex-direction: row;
`;

const SocialButtonWrap = styled.View`
  margin-top: 40px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const HavingTroubleWrap = styled.Pressable`
  align-self: center;

  text-align: center;

  position: absolute;
  bottom: 50px;
`;
