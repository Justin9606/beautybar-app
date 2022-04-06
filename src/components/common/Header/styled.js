import styled from 'styled-components';
//Platform check
import {Platform} from 'react-native';

const os = Platform.OS;
const Container = styled.View`
  background-color: #fff;
  height: ${os === 'android' ? 50 : 60}px;
  align-items: center;
  justify-content: center;
  margin-bottom: ${props => props.marginBottom || 5}px;
`;

const LeftContainer = styled.View`
  position: absolute;
  left: 24px;
`;

const RightContainer = styled.View`
  position: absolute;
  right: 24px;
`;

const ButtonWrap = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
`;

const LangWrap = styled.TouchableHighlight`
  justify-content: center;
  align-items: center;
  flex-direction: row;
`;

const LangText = styled.Text`
  font-family: Montserrat-Medium;
  font-style: normal;
  font-weight: 600;
  font-size: 14px;

  align-items: center;
  color: #323234;
`;

const DownArrow = styled.Image`
  width: 10px;
  height: 10px;
  margin-left: 7px;
  margin-top: 2px;
`;

const AppNameText = styled.Text`
  font-family: Montserrat-Medium;
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 22px;
  /* Black 100 */
  color: #323234;
`;
const AppNameWrap = styled.View``;

const HiUserName = styled.Text`
  font-family: Montserrat-Medium;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 24px;
  /* Black 50 */

  color: #7f7e83;

  opacity: 0.9;
`;
export {
  DownArrow,
  LangText,
  LangWrap,
  ButtonWrap,
  RightContainer,
  LeftContainer,
  Container,
  AppNameWrap,
  HiUserName,
  AppNameText,
};
