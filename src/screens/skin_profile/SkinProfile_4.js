import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import styled from 'styled-components';
import {useDispatch, useSelector} from 'react-redux';
import {RNCamera} from 'react-native-camera';
import {
  StyleSheet,
  View,
  Image,
  Dimensions,
  TouchableOpacity,
  Text,
} from 'react-native';

import {
  UserDetail,
  LoginUser,
} from '../../store/reducer/auth_reducer/Auth_Reducer';

//normalizer
import {normalize} from '../../constants/responsive';

//containers
import ViewContainer from '../../containers/ViewContainer';
import Spacer from '../../containers/Spacer';
import ScrollableView from '../../containers/ScrollableView';
import Absolutebutton from '../../containers/AbsoluteButton';
import ControlAlignCenter from '../../containers/ControlAlignCenter';

//common
import Button from '../../components/common/Buttons/Button';
import Header from '../../components/common/Header/Header';

//skin profile svg step_1
import Step_4 from '../../assets/svg/skin_profiling/step_4.svg';
import Step_4_Profile from '../../assets/svg/skin_profiling/step_4_photo.svg';
import PhotoWarning from '../../assets/svg/skin_profiling/step_4_photo_warning.svg';
import TakeSelfieExample from '../../assets/svg/skin_profiling/take_selfie_example.svg';

//Texts
import Largetext from '../../components/common/Text/LargeText';

const SkinProfile_4 = props => {
  const [imageuri, setimageuri] = useState();
  const data3 = props?.route?.params?.data3;
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const {width, height} = Dimensions.get('window');

  const NextStep = () => {
    dispatch(UserDetail(data3));
    dispatch(LoginUser(true));
  };

  const takePicture = async () => {
    if (this.camera) {
      const options = {quality: 0.5, base64: true};
      const data = await this.camera.takePictureAsync(options);
      console.log(data.uri);
      setimageuri(data.uri);
    }
  };

  return (
    <ViewContainer>
      <Header skip_right={'skip'} back_with_text={'back_with_text'} />
      <Spacer height={normalize(18)} />
      <ControlAlignCenter>
        <Step_4 />
      </ControlAlignCenter>
      <ScrollableView>
        <ControlAlignCenter>
          <Spacer height={normalize(40)} />
          <Step_4_Profile />

          <Largetext textAlign={'center'} title="User Photo" marginTop={24} />
        </ControlAlignCenter>
        <WarningWrap>
          <PhotoWarning />
          <Spacer width={8} />
          <WarnText>Make sure you don’t wear makeup and glasses</WarnText>
        </WarningWrap>
        <ControlAlignCenter>
          {/* <TakeSelfieText>Take a Selfie</TakeSelfieText> */}
          {/* <TakeSelfieExample /> */}

          {imageuri != undefined ? (
            <Image
              source={{uri: imageuri}}
              style={[styles.preview, [{scaleX: -1}]]}
            />
          ) : (
            <View style={styles.preview}>
              <RNCamera
                ref={ref => {
                  this.camera = ref;
                }}
                style={styles.camera}
                mirrorImage={false}
                fixOrientation={true}
                type={RNCamera.Constants.Type.front}
                flashMode={RNCamera.Constants.FlashMode.off}
                androidCameraPermissionOptions={{
                  title: 'Permission to use camera',
                  message: 'We need your permission to use your camera',
                  buttonPositive: 'Ok',
                  buttonNegative: 'Cancel',
                }}
              />
            </View>
          )}
        </ControlAlignCenter>
        <Spacer height={normalize(120)} />
      </ScrollableView>
      {imageuri !== undefined ? (
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginLeft: 20,
            marginRight: 20,
          }}>
          <Buttone onPress={() => NextStep()}>
            <Text>Next</Text>
          </Buttone>
          <Buttone onPress={() => setimageuri()}>
            <Text>Re-Take</Text>
          </Buttone>
        </View>
      ) : (
        <Absolutebutton>
          {/* <Button title={'Capture'} onPress={() => takePicture()} /> */}
          <Button title={'Next'} onPress={() => NextStep()} />
        </Absolutebutton>
      )}
    </ViewContainer>
  );
};

export default SkinProfile_4;

const WarningWrap = styled.View`
  flex-direction: row;
  background-color: rgba(235, 87, 87, 0.09);
  border: 0.5px solid #eb5757;
  border-radius: 8px;
  padding-vertical: 6px;
  padding-horizontal: 15px;
  margin-horizontal: 24px;
  margin-top: 24px;
  margin-bottom: 34px;
  height: 36px;
  justify-content: center;
  align-items: center;
`;
const Buttone = styled.TouchableOpacity`
  background-color: #eb5757;
  border-radius: 8px;
  padding-vertical: 6px;
  padding-horizontal: 15px;
  margin-top: 24px;
  margin-bottom: 34px;
  height: 36px;
  width: 40%;
  justify-content: center;
  align-items: center;
`;

const WarnText = styled.Text`
  font-family: Montserrat-Medium;
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 24px;
  text-align: center;
  color: #323234;
`;

const TakeSelfieText = styled.Text`
  position: absolute;
  z-index: 1;
  text-align: center;
  top: 128px;
  color: #fff;
  font-size: 14px;
  font-weight: 500;
  font-family: Montserrat-Medium;
`;

const styles = StyleSheet.create({
  preview: {
    height: 280,
    width: 280,
    borderRadius: 150,
    overflow: 'hidden',
    backgroundColor: 'black',
  },
  camera: {
    height: 280,
    width: 280,
  },
});
