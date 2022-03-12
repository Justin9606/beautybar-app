import React from 'react';
import styled from 'styled-components';

const Textinput = ({
  autoFocus,
  placeholder,
  onChangeText,
  defaultValue,
  keyboardType,
  returnKeyType,
  inputeLabel,
  inputLabelColor,
  labelMarginBottom,
  paddingHorizontal,
  placeholderLeft,
  marginTop,
  keyboardAppearance,
  hasCountryCode,
}) => {
  return (
    <TextIputWrapper
      paddingHorizontal={paddingHorizontal}
      marginTop={marginTop}>
      <InputLabel labelMarginBottom={labelMarginBottom}>
        {inputeLabel}
      </InputLabel>
      {hasCountryCode === 'country' && <CountryCodeWrap></CountryCodeWrap>}
      <TextInputs
        autoFocus={autoFocus}
        placeholder={placeholder}
        onChangeText={onChangeText}
        keyboardType={keyboardType}
        returnKeyType={returnKeyType}
        placeholderLeft={placeholderLeft}
        keyboardAppearance={keyboardAppearance}
      />
    </TextIputWrapper>
  );
};

export default Textinput;

const TextIputWrapper = styled.View`
  padding-horizontal: ${props => props.paddingHorizontal || 24}px;
  margin-top: ${props => props.marginTop || 0}px;
`;

const InputLabel = styled.Text`
  font-size: 14px;
  font-weight: 500;
  color: #323234;
  line-height: 17px;
  margin-bottom: ${props => props.labelMarginBottom || 16}px;
`;

const TextInputs = styled.TextInput`
  background-color: #f3f8fb;
  height: 60px;
  border-radius: 12px;
  padding-left: ${props => props.placeholderLeft || 12}px;
`;

const CountryCodeWrap = styled.View`
  background-color: red;
`;
