//react
import React from 'react';

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
  padding-horizontal: 19.08px;
  margin-left: 15.76px;
  padding-vertical: 16.86px;
  justify-content: center;
  width: 271.24px;
  border-radius: 12px;
`;

const Input = styled.TextInput`
  font-family: Montserrat-Medium;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
  color: black;
`;
