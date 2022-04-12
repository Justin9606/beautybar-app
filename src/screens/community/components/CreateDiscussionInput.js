//react
import React from 'react';
import {Dimensions} from 'react-native';

//styled components
import styled from 'styled-components';

const CreateDiscussionInput = ({
  placeholder,
  onChangeText,
  backgroundColor,
  multiline,
  width,
  height,
}) => {
  return (
    <TextInputWrapper>
      <Input
        width={width}
        height={height}
        placeholder={placeholder}
        onChangeText={onChangeText}
        backgroundColor={backgroundColor}
        multiline={multiline}
        placeholderTextColor={'#b1b1b1'}
      />
    </TextInputWrapper>
  );
};
export default CreateDiscussionInput;

const TextInputWrapper = styled.View`
  background-color: #f3f8fb;
  justify-content: center;
  justify-self: center;
  align-self: center;
  border-radius: 12px;
`;

const Input = styled.TextInput`
  font-family: Montserrat-Medium;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
  color: black;
  width: ${props => props.width || Dimensions.get('window').width / 1.39}px;
  padding: 10px;
  min-height: ${props => props.width || Dimensions.get('window').width / 3}px;
`;
