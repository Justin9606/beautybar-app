import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

//screens
import ProductMain from './ProductMain';
import ProductDetailscreen from './productDetailScreen.js/ProductDetailScreen';
import TryOnMakeUp from '../tryonMakeup/TryonMakeupMainPage';

const ProductStacks = () => {
  const ProductStack = createNativeStackNavigator();

  return (
    <ProductStack.Navigator screenOptions={{header: () => null}}>
      <ProductStack.Screen component={ProductMain} name="ProductMain" />
      <ProductStack.Screen
        component={ProductDetailscreen}
        name="ProductDetail"
      />
      <ProductStack.Screen component={TryOnMakeUp} name="TryOnMakeUp" />
    </ProductStack.Navigator>
  );
};

export default ProductStacks;
