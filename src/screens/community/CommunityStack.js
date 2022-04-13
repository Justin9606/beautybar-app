import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

//screens
import CommunityMain from './CommunityMain';
import Creatediscussion from './creatediscussion/CreateDiscussion';
import TagProducts from './tagproducts/TagProducts';
import CreateProductLink from './createproductlink/CreateProductLink';

const CommunityScreens = ({}) => {
  const CommunityStack = createNativeStackNavigator();

  return (
    <CommunityStack.Navigator
      screenOptions={{header: () => null}}
      initialRouteName={'CommunityMain'}>
      <CommunityStack.Screen component={CommunityMain} name={'CommunityMain'} />
      <CommunityStack.Screen
        component={Creatediscussion}
        name={'Creatediscussion'}
      />
      <CommunityStack.Screen component={TagProducts} name={'TagProducts'} />
      <CommunityStack.Screen
        component={CreateProductLink}
        name={'ProductLink'}
      />
    </CommunityStack.Navigator>
  );
};

export default CommunityScreens;
