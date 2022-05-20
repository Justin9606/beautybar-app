import React from 'react';

import styled from 'styled-components';

const ProductTitle = ({title, ellipsizeMode, numberOfLines}) => {
  return (
    <ProductText ellipsizeMode={ellipsizeMode} numberOfLines={numberOfLines}>
      {title}
    </ProductText>
  );
};

export default ProductTitle;

const ProductText = styled.Text`
  font-family: Montserrat-Medium;
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 15px;
  color: #323234;
`;
