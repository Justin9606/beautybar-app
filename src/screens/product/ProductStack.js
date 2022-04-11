import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

//screens
import ProductMainScreen from './ProductMainSceen';
import ProductDetailscreen from './productDetailScreen.js/ProductDetailScreen';

const ProductStacks = () => {
  const ProductStack = createNativeStackNavigator();

  return (
    <ProductStack.Navigator>
      <ProductStack.Screen name="ProductMain" component={ProductMainScreen} />
      <ProductStack.Screen
        name="ProductDetail"
        component={ProductDetailscreen}
      />
    </ProductStack.Navigator>
  );
};

export default ProductStacks;
