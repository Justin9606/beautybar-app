import React from 'react';

//styled components
import styled from 'styled-components';
//react-native-size-matters
import {moderateScale} from 'react-native-size-matters';

const SubHeader_16px = ({
  label,
  fontSize,
  color,
  marginTop,
  paddingHorizontal,
  seeAll,
  seeAllLabel,
  onPressSeeAllBtn,
}) => {
  return (
    <SubHeaderWrap
      fontSize={fontSize}
      color={color}
      marginTop={marginTop}
      paddingHorizontal={paddingHorizontal}>
      <Label>{label}</Label>

      {seeAll === 'seeAll' && (
        <SeeAllButtonWrap onPress={onPressSeeAllBtn} activeOpacity={0.7}>
          <SeeAllText>See all</SeeAllText>
        </SeeAllButtonWrap>
      )}
    </SubHeaderWrap>
  );
};

export default SubHeader_16px;

const SubHeaderWrap = styled.View`
  padding-horizontal: ${props => props.paddingHorizontal || 24}px;
  margin-top: ${props => props.marginTop || 0}px;
  align-items: center;
  flex-direction: row;
`;
const Label = styled.Text`
  font-family: Montserrat-Medium;
  font-style: normal;
  font-weight: 600;
  font-size: ${props => props.fontSize || 16}px;
  line-height: 20px;
  color: #323234;
`;

const SeeAllButtonWrap = styled.TouchableOpacity`
  position: absolute;
  right: ${moderateScale(28)}px;
  top: 2px;
`;
const SeeAllText = styled.Text`
  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 17px;
  color: #e74779;
`;
