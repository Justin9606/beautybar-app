import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {useSelector} from 'react-redux';

//Screens
import Onboarding from '../screens/onboarding/Onboarding';
import WelComeScreen from '../screens/welcome/WelComeScreen';
import Login from '../screens/login/Login';
import Verification from '../screens/verification/Verification';
import SkinProfile_1 from '../screens/skin_profile/SkinProfile_1';
import SkinProfile_2 from '../screens/skin_profile/SkinProfile_2';
import SkinProfile_3 from '../screens/skin_profile/SkinProfile_3';
import SkinProfile_4 from '../screens/skin_profile/SkinProfile_4';
import BottomTabs from './BottomTab';

export default function MainRoutes() {
  const Stack = createNativeStackNavigator();

  const LoginUser = useSelector(state => {
    return state.persistedReducer.AuthReducer.LoginUser;
  });

  return (
    <Stack.Navigator
      screenOptions={{header: () => null}}
      initialRouteName={LoginUser == true ? 'Home' : 'Onboarding'}>
      {LoginUser !== true ? (
        <>
          <Stack.Screen name="Onboarding" component={Onboarding} />
          <Stack.Screen name="WelComeScreen" component={WelComeScreen} />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Verification" component={Verification} />
          <Stack.Screen name="SkinProfile_1" component={SkinProfile_1} />
          <Stack.Screen name="SkinProfile_2" component={SkinProfile_2} />
          <Stack.Screen name="SkinProfile_3" component={SkinProfile_3} />
          <Stack.Screen name="SkinProfile_4" component={SkinProfile_4} />
        </>
      ) : (
        <Stack.Screen name="Home" component={BottomTabs} />
      )}
    </Stack.Navigator>
  );
}
