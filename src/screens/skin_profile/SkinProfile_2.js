import React, {useState} from 'react';
import {FlatList} from 'react-native';
import styled from 'styled-components';

//react-navigation/native
import {useNavigation} from '@react-navigation/native';

//normalizer
import {normalize} from '../../components/constants/responsive';

//containers
import SafeAreaContainer from '../../components/containers/SafeAreaContainer';
import Spacer from '../../components/containers/Spacer';
import ScrollableView from '../../components/containers/ScrollableView';
import Absolutebutton from '../../components/containers/AbsoluteButton';
import ControlAlignCenter from '../../components/containers/ControlAlignCenter';

//common ui
import Button from '../../components/common/Buttons/Button';
import Header from '../../components/common/Header/Header';

//skin profile svg step_1
import Step_2 from '../../assets/svg/skin_profiling/step_2.svg';
import Step_2_Profile from '../../assets/svg/skin_profiling/step_2_skin_profile.svg';

//Texts
import Largetext from '../../components/common/Text/LargeText';
import Smalltext from '../../components/common/Text/SmallText';
import Steplabel from '../../components/common/Text/StepLabel';

//SVG
import {
  SKIN_TYPE_DATA,
  SKIN_TONE_DATA,
  SKIN_UNDER_TONE_DATA,
} from '../../components/svg_data/skin_data';

const _renderItem = ({text, skin_type_svg, onPress, index}) => {
  return (
    <Container onPress={onPress} index={index}>
      <SvgWrap>{skin_type_svg}</SvgWrap>
      <SkinTypeText>{text}</SkinTypeText>
    </Container>
  );
};

const SkinProfile_2 = () => {
  const [skinType, setSkinType] = useState({
    skin_type: '',
    skin_tone: '',
    skin_under_tone: '',
  });

  const navigation = useNavigation();
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
            title={
              'Choose one option for Skin Type, Skin Tone and Skin Under Tone'
            }
            textAlign={'center'}
            width={295}
            height={35}
            color={'#7F7E83'}
          />
        </ControlAlignCenter>
        <Steplabel label={'Skin Type '} marginTop={normalize(32)} />
        <FlatList
          showsHorizontalScrollIndicator={false}
          horizontal
          data={SKIN_TYPE_DATA}
          renderItem={({item, index}) => {
            const SKIN_TYPE_SVG = item.skin_type_svg;

            return (
              <_renderItem
                onPress={() => {
                  setSkinType({setSkinType: item.text});
                  alert(`Skin Type: ${item.text}`);
                }}
                text={item.text}
                index={index}
                skin_type_svg={<SKIN_TYPE_SVG />}
              />
            );
          }}
        />
        <Steplabel label={'Skin Tone'} marginTop={normalize(32)} />
        <FlatList
          showsHorizontalScrollIndicator={false}
          horizontal
          data={SKIN_TONE_DATA}
          renderItem={({item, index}) => {
            const SKIN_TYPE_SVG = item.skin_tone_svg;

            return (
              <_renderItem
                onPress={() => {
                  setSkinType({skin_tone: item.text});
                  alert(`Skin Type: ${item.text}`);
                }}
                text={item.text}
                index={index}
                skin_type_svg={<SKIN_TYPE_SVG />}
              />
            );
          }}
        />
        <Steplabel label={'Skin Under Tone'} marginTop={normalize(32)} />
        <FlatList
          showsHorizontalScrollIndicator={false}
          horizontal
          data={SKIN_UNDER_TONE_DATA}
          renderItem={({item, index}) => {
            const SKIN_TYPE_SVG = item.skin_under_tone_svg;
            return (
              <_renderItem
                key={index}
                onPress={() => {
                  setSkinType({skin_under_tone: item.text});
                  alert(`Skin Type: ${item.text}`);
                }}
                text={item.text}
                index={index}
                skin_type_svg={<SKIN_TYPE_SVG />}
              />
            );
          }}
        />
        <Spacer height={100} />
      </ScrollableView>

      <Absolutebutton>
        <Button
          title={'Next'}
          onPress={() => navigation.navigate('SkinProfile_3')}
        />
      </Absolutebutton>
    </SafeAreaContainer>
  );
};
export default SkinProfile_2;

const Container = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  margin-left: ${props => (props.index === 0 ? 44 : 48)}px;
  margin-right: ${props => (props.index == 4 ? 44 : 0)}px;
  margin-top: 24px;
`;

const SvgWrap = styled.View`
  justify-content: center;
  align-items: center;
`;

const SkinTypeText = styled.Text`
  margin-top: 8px;
  text-align: center;
  justify-content: center;
  align-items: center;
`;
