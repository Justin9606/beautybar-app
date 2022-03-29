import React from 'react';
import {StatusBar, Platform} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import KeyboardManager from 'react-native-keyboard-manager';
import MainRoutes from './navigation';
import './i18next/i18next';

//react-i18next
import {useTranslation} from 'react-i18next';

const App = () => {
  const {t} = useTranslation();

  if (Platform.OS === 'ios') {
    KeyboardManager.setEnable(true);
    KeyboardManager.setKeyboardDistanceFromTextField(20);
    KeyboardManager.setToolbarDoneBarButtonItemText(t('keyboarManagerDone'));
  }

  return (
    <NavigationContainer>
      <StatusBar
        barStyle="dark-content"
        translucent
        backgroundColor="transparent"
      />
      <MainRoutes />
    </NavigationContainer>
  );
};

export default App;
