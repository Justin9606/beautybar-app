import styled from 'styled-components';

const CarouselImages = styled.Image``;

const BarCodeSkinWrap = styled.View`
  flex-direction: row;
  justify-content: center;
`;

const BarCodeSkinAnalContainer = styled.View`
  flex-direction: row;
  align-items: center;
  background-color: white;
  width: 154px;
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

export {CarouselImages, BarCodeSkinWrap, BarCodeSkinAnalContainer, SanText};
