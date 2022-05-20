import React from 'react';

import styled from 'styled-components';

const ProductLink = ({link, ellipsizeMode, numberOfLines}) => {
  return (
    <ProductText ellipsizeMode={ellipsizeMode} numberOfLines={numberOfLines}>
      {link}
    </ProductText>
  );
};

export default ProductLink;

const ProductText = styled.Text`
  font-family: Montserrat-Medium;
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 15px;
  color: #323234;
`;
