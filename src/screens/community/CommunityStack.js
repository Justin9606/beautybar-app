import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {getFocusedRouteNameFromRoute} from '@react-navigation/native';

//screens
import CommunityMain from './CommunityMain';
import Creatediscussion from './creatediscussion/CreateDiscussion';

export const getRouteName = ({route}) => {
  const routeName = getFocusedRouteNameFromRoute(route);
  console.log(routeName);

  const tabVisibleFalseArr = ['Creatediscussion'];

  if (tabVisibleFalseArr?.includes(routeName)) {
    return 'none';
  } else {
    return 'flex';
  }
};
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
    </CommunityStack.Navigator>
  );
};

export default CommunityScreens;
