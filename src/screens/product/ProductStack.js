import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

//screens
import ProductMainScreen from './ProductMainSceen';
import ProductDetailscreen from './productDetailScreen.js/ProductDetailScreen';

const ProductStacks = () => {
  const ProductStack = createNativeStackNavigator();

  return (
    <ProductStack.Navigator screenOptions={{header: () => null}}>
      <ProductStack.Screen component={ProductMainScreen} name="ProductMain" />
      <ProductStack.Screen
        component={ProductDetailscreen}
        name="ProductDetail"
      />
    </ProductStack.Navigator>
  );
};

export default ProductStacks;
