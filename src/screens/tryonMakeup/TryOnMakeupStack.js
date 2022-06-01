import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

//screens
import TryOnMakeUpMain from './TryonMakeupMainPage';

const TryOnMakeupStacks = () => {
  const TryOnMakeupStack = createNativeStackNavigator();
  return (
    <TryOnMakeupStack.Navigator>
      <TryOnMakeupStack.Screen
        name="TryOnMakeUpMain"
        component={TryOnMakeUpMain}
      />
    </TryOnMakeupStack.Navigator>
  );
};
export default TryOnMakeupStacks;
