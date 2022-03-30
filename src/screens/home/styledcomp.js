import styled from 'styled-components';

const CarouselImages = styled.Image``;

const BarCodeSkinWrap = styled.View`
  justify-content: center;
  flex-direction: row;
`;

const BarCodeSkinAnallContainer = styled.TouchableOpacity`
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.06);
  flex-direction: row;
  align-items: center;
  background-color: white;
  width: 160px;
  height: 64px;
  border-radius: 12px;
  padding-left: 8px;
`;

const SanText = styled.Text`
  /* Sub Heading */
  margin-left: 4px;
  font-family: Montserrat;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
  /* Black 100 */

  color: #323234;
`;

export {CarouselImages, BarCodeSkinWrap, BarCodeSkinAnallContainer, SanText};
