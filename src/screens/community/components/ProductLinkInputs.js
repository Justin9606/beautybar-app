//react
import React from 'react';

//styled
import styled from 'styled-components';

//svg
import TagProductLink from '../../../assets/svg/community/link.svg';

const ProductLinkInput = ({
  onChangeText,
  defaultValue,
  placeholder,
  multiline,
  minHight,
  has_left_icon,
  paddingTop,
  paddingBottom,
  paddingLeft,
  numberOfLines,
}) => {
  return (
    <Wrapper>
      {has_left_icon === 'has_left_icon' && (
        <LinkSvgWrap>
          <TagProductLink />
        </LinkSvgWrap>
      )}
      <Input
        numberOfLines={numberOfLines}
        onChangeText={onChangeText}
        defaultValue={defaultValue}
        placeholder={placeholder}
        multiline={multiline}
        placeholderTextColor={'#b1b1b1'}
        minHight={minHight}
        paddingTop={paddingTop}
        paddingBottom={paddingBottom}
        paddingLeft={paddingLeft}
      />
    </Wrapper>
  );
};

export default ProductLinkInput;

const Wrapper = styled.View`
  justify-content: center;
`;

const LinkSvgWrap = styled.View`
  position: absolute;
  left: 18.23px;
  z-index: 1;
`;
const Input = styled.TextInput`
  padding-left: ${props => props.paddingLeft || 21}px;
  padding-top: ${props => props.paddingTop || 0}px;
  padding-bottom: ${props => props.paddingBottom || 0}px;
  background: #f3f8fb;
  border-radius: 12px;
  min-height: ${props => props.minHight || 60}px;
  font-family: Montserrat-Medium;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
  color: #323234;
  padding-right: 10px;
`;
