import React from 'react';

import styled from 'styled-components';

const ProductDescription = ({description, ellipsizeMode, numberOfLines}) => {
  return (
    <ProductText ellipsizeMode={ellipsizeMode} numberOfLines={numberOfLines}>
      {description}
    </ProductText>
  );
};

export default ProductDescription;

const ProductText = styled.Text`
  max-width: 176.75px;
  font-family: Montserrat-Medium;
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 15px;
  color: #323234;
`;
