import React from 'react';

import styled from 'styled-components';

const ProductBrand = ({brand, ellipsizeMode, numberOfLines, marginTop}) => {
  return (
    <ProductText
      ellipsizeMode={ellipsizeMode}
      numberOfLines={numberOfLines}
      marginTop={marginTop}>
      {brand}
    </ProductText>
  );
};

export default ProductBrand;

const ProductText = styled.Text`
  font-family: Montserrat-Medium;
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 15px;
  color: #323234;
  margin-top: ${props => props.marginTop || 1}px;
`;
