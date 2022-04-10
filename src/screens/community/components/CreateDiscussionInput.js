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
}) => {
  return (
    <TextInputWrapper>
      <Input
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
  border-radius: 12px;
`;

const Input = styled.TextInput`
  font-family: Montserrat-Medium;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
  color: black;
  width: ${Dimensions.get('window').width / 1.4}px;
  padding: 10px;

  min-height: 110px;
`;
