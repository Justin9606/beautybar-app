import React from 'react';
import styled from 'styled-components';

const Largetext = ({title, textAlign, marginBottom, marginTop}) => {
  return (
    <Title
      textAlign={textAlign}
      marginBottom={marginBottom}
      marginTop={marginTop}>
      {title}
    </Title>
  );
};

export default Largetext;

const Title = styled.Text`
  font-family: Montserrat-Bold;
  font-weight: bold;
  font-size: 24px;
  color: #323234;
  text-align: ${props => props.textAlign || ''};
  margin-bottom: ${props => props.marginBottom || 16}px;
  margin-top: ${props => props.marginTop || 0}px;
  line-height: 29px;
  font-style: normal;
`;
