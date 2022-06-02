import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

//screens
import TryOnMakeUpMain from './TryonMakeupMainPage';
import LiveOnMakeUpScreen from './liveonmakeupscreen/LiveOnMakeUp';
import MakeupToEarn from './makeuptoearn/MakeupToEarn';

const TryOnMakeupStacks = () => {
  const TryOnMakeupStack = createNativeStackNavigator();
  return (
    <TryOnMakeupStack.Navigator screenOptions={{header: () => null}}>
      <TryOnMakeupStack.Screen
        name="TryOnMakeUpMain"
        component={TryOnMakeUpMain}
      />
      <TryOnMakeupStack.Screen
        name="LiveOnMakeUp"
        component={LiveOnMakeUpScreen}
      />
      <TryOnMakeupStack.Screen name="MakeupToEarn" component={MakeupToEarn} />
    </TryOnMakeupStack.Navigator>
  );
};
export default TryOnMakeupStacks;
